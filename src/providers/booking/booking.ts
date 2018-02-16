import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingProvider {
      data:any;
      constructor(public http: HttpClient) {
          this.data = [
              {to: 'Ampara',time:'4:30 - 12:00',last_updated:'11',free:"2",busy:"5",avatar:"../../assets/imgs/fish.png"},
              {to: 'Batticaloa',time:'5:30 - 12:00',last_updated:'4',free:"3",busy:"8",avatar:"../../assets/imgs/sea.png"},
              {to: 'Colombo',time:'6:30 - 09:00',last_updated:'5',free:"2",busy:"5",avatar:"../../assets/imgs/fish.png"},
              {to: 'Galle',time:'7:30 - 10:00',last_updated:'10',free:"2",busy:"5",avatar:"../../assets/imgs/fish.png"},
              {to: 'Jaffna',time:'8:30 - 01:00',last_updated:'2',free:"2",busy:"7",avatar:"../../assets/imgs/sea.png"},
              {to: 'Kandy',time:'9:30 - 02:00',last_updated:'0',free:"2",busy:"6",avatar:"../../assets/imgs/fish.png"}
          ];
      }

      loadAll() {
          return Promise.resolve(this.data);
      }

}
