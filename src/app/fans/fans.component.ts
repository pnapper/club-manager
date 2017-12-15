import { Component, OnInit } from '@angular/core';
import { Fan } from '../fan.model';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.css']
})
export class FansComponent implements OnInit {
  fans: Fan[] = [
   new Fan("Sara Anne", "6/17/2017",
       "Seattle", 1),
   new Fan("Wendy", "6/17/2017",
       "Edmonds", 2),
   new Fan("Joey Rad", "8/19/17",
       "Kirkland", 3),
 ];
  constructor() { }

  ngOnInit() {
  }

}
