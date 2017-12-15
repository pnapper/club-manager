import { Injectable } from '@angular/core';
import { Fan } from './fan.model';
import { FANS } from './mock-fans';

@Injectable()
export class FanService {

  constructor() { }

  getFans() {
    return FANS;
  }

  getFanById(fanId: number){
    for (var i = 0; i <= FANS.length - 1; i++) {
      if (FANS[i].id === fanId) {
        return FANS[i];
      }
    }
  }
}
