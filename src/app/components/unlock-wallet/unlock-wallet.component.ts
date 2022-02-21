import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unlock-wallet',
  templateUrl: './unlock-wallet.component.html',
  styleUrls: ['./unlock-wallet.component.scss']
})
export class UnlockWalletComponent implements OnInit {

  constructor() {
    this.maxSecond([1,1,1,1,1,1,1,2,3,5,7])
   }

  ngOnInit(): void {
  }

  maxSecond(arr: any) {
    let contain: any = {};
    for (let i = 0; i < arr.length; i++) {
      if (contain[arr[i]] === undefined) {
        contain[arr[i]] = 1
      } else {
        contain[arr[i]] += 1 
      }
    }
  
    let max1 = 0;
    let max2 = 0;
  
    for (const prop in contain) {
      if (contain[prop] > max1) {
        max2 = max1;
        max1 = contain[prop];
      }
    }
    return max2;
  }

}
