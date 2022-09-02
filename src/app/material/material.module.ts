import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';


const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatCommonModule,
  MatInputModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatExpansionModule,
  MatStepperModule,
  MatDatepickerModule,
  MatCardModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    MatFormFieldModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class MaterialModule { }
