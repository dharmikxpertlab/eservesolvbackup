import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/api/models';

@Component({
  selector: 'app-employee-selection',
  templateUrl: './employee-selection.component.html',
  styleUrls: ['./employee-selection.component.scss'],
})
export class EmployeeSelectionComponent implements OnInit {

  users: Employees;

  constructor() { }

  ngOnInit() {}

}
