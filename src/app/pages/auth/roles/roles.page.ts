import { Component, OnInit } from '@angular/core';
import { RolesEnum } from 'src/api/models/roles-enum';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage {

  readonly Roles = RolesEnum;

  constructor() { }

}
