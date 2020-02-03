import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AccountsService } from "../../services/accounts.service";
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { NavController } from '@ionic/angular';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.page.html',
  styleUrls: ['./accountdetails.page.scss'],
})
export class AccountdetailsPage implements OnInit {

  accDetails;

  constructor(
    // private modalService: BsModalService,
    private nav: NavController,
    private account: AccountsService,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toast: ToastService
  ) { }
  
  // modalRef: BsModalRef;
  // items: any[];
 
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }


  transferForm: FormGroup
  ngOnInit() {

    this.activateRoute.params.subscribe(params => {
      console.log(params)
      this.getAccountDetails(params.id - 1)
    })

    this.transferForm = this.fb.group({
      amount: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    })

  }

  balance: any;
  myBankName: any;
  getAccountDetails(id) {
    let userId = Number(localStorage.getItem('myId'))
    // console.log(userId);
    this.accDetails = this.account.customers[userId].accounts[id]
    this.balance = this.accDetails.balance
    this.myBankName = this.accDetails.bankName
    console.log(this.accDetails)
    let myAccount = JSON.stringify(this.accDetails)
    localStorage.setItem('myAccount', `${myAccount}`)
    // this.accDetails = this.account.customers[1].accounts[id]
    // this.accDetails = this.account.customers.map((acc) => {console.log(acc)})
    console.log(this.accDetails);
  }

  // myTransfers: any = [];
  amount = <HTMLElement>document.getElementById('amount')
  transfer() {
    let myAccount = JSON.parse(localStorage.getItem('myAccount'));
    // console.log(myAccount.password)
    let bankName = JSON.parse(localStorage.getItem('otherUser1')).bankName
    if ((this.myBankName == bankName) && (this.transferForm.value.password == myAccount.password) && (this.transferForm.value.amount <= this.balance)) {
      let amount = this.transferForm.get('amount').value;
      this.balance = this.balance - amount
      let transferedAccountBalance = Number(localStorage.getItem('otherUser1Balance'))
      transferedAccountBalance = transferedAccountBalance + amount;
      localStorage.setItem('otherUser1Balance', `${transferedAccountBalance}`)
      console.log(transferedAccountBalance);

      // localStorage.setItem('myTransfers', this.myTransfers)
      // this.myTransfers.push(this.transferForm.value.amount)
      // console.log(this.myTransfers)

      this.account.myTransfers.push(this.transferForm.value.amount)
      console.log(this.account.myTransfers)

      this.toast.showToast('money transfered successfully')

      this.transferForm.controls['amount'].setValue('');
      this.transferForm.controls['password'].setValue('');
    }
    else if (this.transferForm.value.password !== myAccount.password) {
      this.toast.showToast('password is in correct')
    }
    if (this.myBankName != bankName) {
      this.toast.showToast('cant transfer money to this bank')
    }
    //  if (this.transferForm.value.amount == '') {
    //   this.toast.showToast('you must enter a number')
    // }
    if ((this.transferForm.value.amount == '') || (this.transferForm.value.password == '')){
      this.toast.showToast('you must enter a number and password')
    }

    // else {
    //   this.toast.showToast('cant transfer money to this bank')
    // }
  }

  goTransfers(){
    this.nav.navigateRoot("/monthlystatements");
  }

  
}
