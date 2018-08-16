import { Component, OnInit, HostBinding } from '@angular/core';
import { Ride } from '../../../models';
import { RideService } from '../../../services';

@Component({
  selector: 'app-take-ride',
  templateUrl: './take-ride.component.html',
  styleUrls: ['./take-ride.component.scss']
})
export class TakeRideComponent implements OnInit {

    takeRides: Array<Ride> = [];
    constructor(
        private _rideService: RideService) {
    }

    ngOnInit() {
        this._rideService.listRidesByType('Take').subscribe(rideLists => {
            this.takeRides = rideLists;
        })
    }

}
