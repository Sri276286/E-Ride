import { Routes } from '@angular/router';
import { TakeRideComponent } from './component/take-ride/take-ride.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: TakeRideComponent}
];
