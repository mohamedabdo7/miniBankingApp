import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ToastService } from "../../services/toast.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnChanges {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      ID: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    });
  }

  validation_messages = {
    'ID': [
      { type: 'required', message: 'ID is required.' },
      { type: 'minlength', message: 'Please enter a valid ID, ID at least 8 characters' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  lock = 0;

  login() {
    localStorage.setItem('myId', '1')
    let user = JSON.parse(localStorage.getItem('me'));
    console.log(user)
    if (user == null){
      this.toast.showToast('you are not registered')
    }
    if ((this.loginForm.value.ID == user.ID) && (this.loginForm.value.password == user.password)) {
      this.navCtrl.navigateForward('/accounts');
    } else if ((this.loginForm.value.ID !== user.ID) || (this.loginForm.value.password !== user.password)) {
      // this.toast.showToast('Password or email is incorrect')
      this.lock++;
      console.log(this.lock);
      let logbtn = <HTMLElement>document.getElementById("logbtn");
      if (this.lock == 1) {
        this.toast.showToast('ID or password incorrect note that account will be locked after three times wrong')
      }
      else if (this.lock == 2) {
        this.toast.showToast('Password or email is incorrect 2')
      }
      else if (this.lock == 3) {
        this.toast.showToast('account has been locked')
        logbtn.setAttribute('disabled', 'true')
      }
    }
    // else if (localStorage.clear() == true) {
    //   this.toast.showToast('you are not registered')
    // }
  }

  ngOnChanges() {
    // changes.prop contains the old and the new value...
    // if (this.lock == 1) {
    //   console.log('first try');
    // }
    // else if (this.lock == 2) {
    //   console.log('second try')
    // }
    // else if (this.lock == 3) {
    //   console.log('account locked')
    // }
    // console.log('looooooooooooock');

  }


  goToRegisterPage() {
    this.navCtrl.navigateForward('/signup');
  }

}
