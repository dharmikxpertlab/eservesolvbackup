import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/api/models';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent implements OnInit {

  @Input() location: Location;
  @Input() detailsButton = false;

  constructor() { }

  ngOnInit() {}

}
