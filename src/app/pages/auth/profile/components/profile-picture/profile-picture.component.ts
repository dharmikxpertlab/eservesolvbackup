import { Component, Input, OnInit } from '@angular/core';
import { OrderCandidate, ServiceProviderUser } from 'src/api/models';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit {

  @Input() user: ServiceProviderUser | OrderCandidate;

  constructor() { }

  ngOnInit() {
  }

}
