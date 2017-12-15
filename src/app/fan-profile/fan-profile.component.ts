import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Fan } from '../fan.model';
import { FanService } from '../fan.service';

@Component({
  selector: 'app-fan-profile',
  templateUrl: './fan-profile.component.html',
  styleUrls: ['./fan-profile.component.css'],
  providers: [FanService]
})
export class FanProfileComponent implements OnInit {
  fanId: number = null;
  fanToDisplay: Fan;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private fanService: FanService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.fanId = parseInt(urlParameters['id']);
    });
    // this.fanToDisplay = this.fanService.getFanById(this.fanId);
  }

}
