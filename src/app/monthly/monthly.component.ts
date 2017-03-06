import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
 
@Component({
    selector: 'app-monthly',
    templateUrl: './monthly.component.html',
    styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent {
 
    constructor(private location: Location, private router: Router) { }
 
    goBack() {
        this.location.back();
    }

    annual() {
    	this.router.navigate(["page2"]);
    }

    checkout() {
    	this.router.navigate(["checkout"]);
    }
 
}