import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  constructor(private service : CartService) { 
    this.shippingCosts = this.service.getShippingPrices();
  }

  ngOnInit() {
  }

}