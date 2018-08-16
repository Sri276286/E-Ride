import { UserService } from "./user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CommonService {
    private _signum;
    private _userDetails;
    private _message;
    constructor(private _userService: UserService) {
    }

    set signum(signum: string) {
        this._signum = signum;
        this._userService.getUser(this.signum)
            .subscribe((user) => {
                this._userDetails = user;
            });
    }

    get signum() {
        return this._signum;
    }

    set userDetails(userDetails) {
        this._userDetails = userDetails
    }

    get userDetails() {
        return this._userDetails
    }

    set message(message: string) {
        this._message = message;
    }

    get message() {
        return this._message;
    }


}