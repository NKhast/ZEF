import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
 
@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
 
    constructor(private location: Location, private router: Router) { }
 
    goBack() {
        this.location.back();
    }

    confirm() {
    	this.router.navigate(["confirm"]);
    }
 
}