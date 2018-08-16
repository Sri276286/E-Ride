import { ViewChild, Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, CommonService } from "../../../services";
import { Subject, Observable } from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    @ViewChild('loginForm') loginForm: NgForm;
    loginEntity = {
        signum: '',
        password: ''
    };
    loginSubject: Subject<any> = new Subject<any>();
    loggedIn$: Observable<any>;
    constructor(private _userService: UserService,
        private _commonService: CommonService,
        private _router: Router) { 
            this.loggedIn$ = this.loginSubject.asObservable();
        }

    validateUser() {
        this.loginEntity.signum = this.loginForm.value.signum;
        this.loginEntity.password = this.loginForm.value.password;
        console.log('loginEntity ', this.loginEntity);
        this._userService.validateUser(this.loginEntity)
            .subscribe(() => {
                this.loginSubject.next(true);
                this._commonService.signum = this.loginEntity.signum;
                this._router.navigate(['/']);
            });
    }
}