import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
 
export const AppRoutes: any = [
    { path: "", component: Page1Component },
    { path: "page2", component: Page2Component },
    { path: "monthly", component: MonthlyComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "payment", component: PaymentComponent },
    { path: "confirm", component: ConfirmComponent }
];
 
export const AppComponents: any = [
    Page1Component,
    Page2Component,
    MonthlyComponent,
    CheckoutComponent,
    PaymentComponent,
    ConfirmComponent
];