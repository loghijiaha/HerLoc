import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {BookingProvider} from "../../providers/booking/booking";
import {Observable} from "rxjs/Observable"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    bookingList: any;

    constructor(public nav:NavController,public bookController:BookingProvider) {
        this.bookController.loadAll().then(result=> {
            this.bookingList=result;
        })
    }

}