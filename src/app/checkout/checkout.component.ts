import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
 
@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
 
    constructor(private location: Location, private router: Router) { }
 
    goBack() {
        this.location.back();
    }

    payment() {
    	this.router.navigate(["payment"]);
    }
 
}