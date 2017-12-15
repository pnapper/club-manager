import { Component, Input, OnInit } from '@angular/core';
import { FanService } from '../fan.service';
import { Fan } from '../fan.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [FanService]
})
export class EditProfileComponent implements OnInit {
  @Input() selectedFan;

  constructor(private fanService: FanService) { }

  ngOnInit() {
  }

  beginUpdatingFan(fanToUpdate){
    this.fanService.updateFan(fanToUpdate);
  }
}
