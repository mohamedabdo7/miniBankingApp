import { Component, OnInit } from '@angular/core';
import { AccountsService } from "../../services/accounts.service";
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {
  userId = localStorage.getItem('myId')
  user;
  userAccounts;
  constructor(private accounts: AccountsService, private router: Router, private nav: NavController) { }
  
  ngOnInit() {
    // this.getAllAccounts();
    this.getUserDetails(this.userId);
  }

  ionViewWillEnter() {
    this.otherUserAccount();
  }

  customerAccounts: any;

  // getAllAccounts() { 
  //   this.customerAccounts = this.accounts.accounts
  //   console.log(this.customerAccounts);
  // }

  getUserDetails(id) {
    this.user = this.accounts.customers
    this.userAccounts = this.user[this.userId].accounts
    // console.log(this.user[this.userId])
    console.log(this.userAccounts)
    // this.customerAccounts = this.accounts.customers    
  }

  details(id) {
    this.router.navigate(['accountdetails/', id])
  }

  other1;
  other2;
  otherUserAccount(){
    this.other1 = this.accounts.customers[0].accounts[0]
    // this.other2 = this.accounts.customers[2].accounts[0]
    let otherUser1 = JSON.stringify(this.other1)
    // let otherUser2 = JSON.stringify(this.other2)
    localStorage.setItem('otherUser1',`${otherUser1}`)
    // localStorage.setItem('otherUser2',`${otherUser2}`)

    let otherUser1Balance = JSON.parse(localStorage.getItem('otherUser1')).balance
    localStorage.setItem('otherUser1Balance',`${otherUser1Balance}`)
    console.log(otherUser1);
    console.log(this.other2);
    
  }


  logOut() {
    this.nav.navigateRoot("/login");
    localStorage.clear()

  }

}
