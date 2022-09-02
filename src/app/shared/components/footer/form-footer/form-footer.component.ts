import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.scss'],
})
export class FormFooterComponent implements OnInit {

  @Output() saveButtonClick = new EventEmitter();
  @Input() saveButtonText = 'Save';

  constructor(
    public navController: NavController,
  ) { }

  ngOnInit() {}

  save() {
    this.saveButtonClick.emit(true);
  }

  back() {
    this.navController.back();
  }
}
