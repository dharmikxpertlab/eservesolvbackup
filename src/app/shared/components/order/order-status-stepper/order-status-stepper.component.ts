import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OrderStateStep, ServiceProviderOrderSteps } from './order-status-stepper.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { EmployeeOrder, Order, RolesEnum, StatusEnum } from 'src/api/models';
import { OrderStatusStepperService } from './order-status-stepper.facade.service';
import { loader } from 'src/app/shared/decorators/loader';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';

@Component({
  selector: 'app-order-status-stepper',
  templateUrl: './order-status-stepper.component.html',
  styleUrls: ['./order-status-stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class OrderStatusStepperComponent implements AfterViewInit {

  @Input() order: Order | EmployeeOrder;
  @Output() orderStateChange = new EventEmitter<StatusEnum>();
  @Input() orderSteps: OrderStateStep[];
  role: RolesEnum;

  formGroup = new FormGroup({
    cancelled_at: new FormControl(null, Validators.required),
    accepted_at: new FormControl(null, Validators.required),
    on_the_way_at: new FormControl(null, Validators.required),
    work_started_at: new FormControl(null, Validators.required),
    work_completed_at: new FormControl(null, Validators.required),
    completed_at: new FormControl(null, Validators.required)
  });
  @ViewChild('stepper', { static: true }) private stepper: MatStepper;
  readonly StatusEnum = StatusEnum;

  get customer() {
    if (this.role) {
      return this.role === RolesEnum.Customer;
    }

    return false;
  }

  get serviceProvider() {
    if (this.role) {
      return this.role === RolesEnum.SpEmployee;
    }

    return false;
  }

  constructor(
    public changeDetector: ChangeDetectorRef,
    public orderStatusStepperService: OrderStatusStepperService,
  ) { }

  async ngAfterViewInit() {
    this.role = await this.orderStatusStepperService.getRole();
    this.updateForm();
    this.updateStepper();
  }

  @completionNotifier('', false)
  async performAction(state) {
    await this.orderStatusStepperService.setOrderStatus(this.order, state);
    await this.fetchOrder();
    await this.updateForm();
    await this.updateStepper();
    this.stepper.next();
  }

  async fetchOrder() {
    this.order = await this.orderStatusStepperService.retrieveOrder(this.order);
    this.orderStateChange.emit(this.order.status);
  }

  async updateForm() {
    await this.formGroup.patchValue({
      ...this.order
    });
  }

  async updateStepper() {
    let lastDoneState = 0;
    this.stepper.steps.forEach((step, i) => {
      if (step.stepControl.status === 'VALID') {
        step.state = 'done';
        lastDoneState = i;
      }
    });
    this.stepper.selectedIndex = lastDoneState;

    this.changeDetector.detectChanges();
  }

}
