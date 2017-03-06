import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
 
@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.css']
})
export class Page2Component {
 
    constructor(private location: Location, private router: Router) { }
 
    goBack() {
        this.location.back();
    }

    monthly() {
    	this.router.navigate(["monthly"]);
    }

    checkout() {
        this.router.navigate(["checkout"]);
    }
 
}