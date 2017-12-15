import { Injectable } from '@angular/core';
import { Fan } from './fan.model';
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
    return this.database.object('fans/' + fanId);
  }

  updateFan(localUpdatedFan){
    var fanEntryInFirebase = this.getFanById(localUpdatedFan.$key);
    fanEntryInFirebase.update({name: localUpdatedFan.name,
                               location: localUpdatedFan.location,
                               story: localUpdatedFan.story,
                               image: localUpdatedFan.image
                             });
  }

  deleteFan(localFanToDelete){
    var fanEntryInFirebase = this.getFanById(localFanToDelete.$key);
    fanEntryInFirebase.remove();
  }
}
