import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-monthlystatements',
  templateUrl: './monthlystatements.page.html',
  styleUrls: ['./monthlystatements.page.scss'],
})
export class MonthlystatementsPage implements OnInit {

  constructor(private account: AccountsService) { }
  transfers: any;
  // date: Date = new Date;
  ngOnInit() {
    console.log(this.account.myTransfers)
    this.transfers = this.account.myTransfers
  }

}
