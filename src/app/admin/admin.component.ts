import { Component, OnInit } from '@angular/core';
import { FanService } from '../fan.service';
import { Fan } from '../fan.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FanService]
})
export class AdminComponent implements OnInit {

  constructor(private fanService: FanService) { }

  ngOnInit() {
  }

  submitForm(name: string, signupDate: string, location: string, story: string, image: string) {
    var newFan: Fan = new Fan(name, signupDate, location, story, image);
    this.fanService.addFan(newFan);
  }
}
