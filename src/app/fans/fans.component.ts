import { Component, OnInit } from '@angular/core';
import { Fan } from '../fan.model';
import { Router } from '@angular/router';
import { FanService } from '../fan.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.css'],
  providers: [FanService]
})
export class FansComponent implements OnInit {
  fans: FirebaseListObservable<any[]>;

  constructor(private router: Router, private fanService: FanService) { }

  ngOnInit() {
    this.fans = this.fanService.getFans();
  }

  goToProfilePage(clickedFan) {
    this.router.navigate(['fans', clickedFan.$key]);
   };

}
