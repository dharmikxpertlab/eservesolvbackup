import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

export interface SortingPickerOption {
  text: string;
  value: string;
}

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {

  @Input() name = '';
  @Input() fields: SortingPickerOption[];
  @Input() selectedField: SortingPickerOption;
  @Output() fieldSelectionEvent = new EventEmitter<SortingPickerOption>();

  constructor(
    private pickerController: PickerController,
    public translateService: TranslateService
  ) { }

  ngOnInit() {
    if (this.fields.length === 0) {
      return;
    }

    if (!this.selectedField) {
      this.selectField(this.fields[0]);
    }

    for (const field of this.fields) {
      field.text = this.translateService.instant(field.text);
    }
  }

  selectField(field: SortingPickerOption) {
    this.selectedField = field;
    this.fieldSelectionEvent.emit(field);
  }

  async presentPicker() {
    const picker = await this.pickerController.create({
    animated: true,
      buttons: [
        {
          text: this.translateService.instant('Cancel'),
          role: 'cancel'
        },
        {
          text: this.translateService.instant('Choose'),
          handler: (val) => {
            this.selectField(val[this.name]);
            return true;
          }
        }
      ],
      columns: [
        {
          name: this.name,
          options: this.fields
        }
      ],
        mode: 'ios',
    });

    picker.present();
  }
}
