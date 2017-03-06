import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
 
@NgModule({
    declarations: [
        AppComponent,
        ...AppComponents,
        MonthlyComponent,
        CheckoutComponent,
        PaymentComponent,
        ConfirmComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }