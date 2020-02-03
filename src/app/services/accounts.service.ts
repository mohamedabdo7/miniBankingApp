import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  customers: any[] = [
    {
      userId: 1,
      
      accounts: [
        {id: 1, bankName: 'alahly', accountName: 'account one', accountNum: 9876, balance: 3000},
        {id: 2, bankName: 'alahly', accountName: 'account two', accountNum: 8765, balance: 5000},
      ],
    },
    {
      userId: 2,
      accounts: [
        {id: 1,password: 1111, bankName: 'alahly', accountName: 'account one', accountNum: 1234, balance: 1000},
        {id: 2,password: 2222, bankName: 'alahly', accountName: 'account two', accountNum: 2345, balance: 2000},
        {id: 3,password: 3333, bankName: 'alahly', accountName: 'account three', accountNum: 3456, balance: 3000},
        {id: 4,password: 4444, bankName: 'alahly', accountName: 'account four', accountNum: 4567, balance: 4000}
      ],
    },
    {
      userId: 3,
      accounts: [
        {id: 1, bankName: 'Masr', accountName: 'account one', accountNum: 1111, balance: 5555},
        {id: 2, bankName: 'Masr', accountName: 'account two', accountNum: 2222, balance: 2222},
      ],
    }
  ]

  myTransfers: any = [];

  // accounts: any[] = [
  //   {
  //     id: 1,
  //     accountName: 'account one',
  //     accountNum: 1234,
  //     balance: 1000
  //   },
  //   {
  //     id: 2,
  //     accountName: 'account two',
  //     accountNum: 2345,
  //     balance: 2000
  //   },
  //   {
  //     id: 3,
  //     accountName: 'account three',
  //     accountNum: 3456,
  //     balance: 3000
  //   },
  //   {
  //     id: 4,
  //     accountName: 'account four',
  //     accountNum: 4567,
  //     balance: 4000
  //   },
  // ]


}
