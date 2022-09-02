import { Component, Input, OnInit } from '@angular/core';
import { Machine } from 'src/api/models';

@Component({
  selector: 'app-machines-list-item',
  templateUrl: './machines-list-item.component.html',
  styleUrls: ['./machines-list-item.component.scss'],
})
export class MachinesListItemComponent implements OnInit {

  @Input() machine: Machine;

  constructor() { }

  ngOnInit() {}

}
