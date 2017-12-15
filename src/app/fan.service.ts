import { Injectable } from '@angular/core';
import { Fan } from './fan.model';
// import { FANS } from './mock-fans';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FanService {
  fans: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.fans = database.list('fans');
  }


  getFans() {
    return this.fans;
  }

  addFan(newFan: Fan) {
    this.fans.push(newFan);
  }

  getFanById(fanId: number){
    // for (var i = 0; i <= FANS.length - 1; i++) {
    //   if (FANS[i].id === fanId) {
    //     return FANS[i];
    //   }
    // }
  }
}
