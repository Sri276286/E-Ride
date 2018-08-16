import { Routes } from '@angular/router';
import { TakeRideComponent } from './component/take-ride/take-ride.component';
import { ShareRideComponent } from './component/share-ride/share-ride.component';
import { LoginComponent } from './component/login/login.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'takeride', pathMatch: 'full'},
    { path: 'takeride', component: TakeRideComponent},
    { path: 'shareride', component: ShareRideComponent},
    { path: 'login', component: LoginComponent}
]

