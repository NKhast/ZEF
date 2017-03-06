import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
 
@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
 
    constructor(private location: Location) { }
 
    goBack() {
        this.location.back();
    }
 
}