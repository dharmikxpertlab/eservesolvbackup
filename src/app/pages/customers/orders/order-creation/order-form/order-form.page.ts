import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CredentialOptions,
  Location,
  Machine,
  Order,
  OrderDescriptionDocumentTypeEnum,
  ServiceProviderUser,
  Type2DeEnum
} from 'src/api/models';
import { OptionsList, ServiceProviderOptions, ServiceProviderProfileOption } from 'src/app/pages/auth/profile/service-provider/service-provider.config';
import { OrdersFacadeService } from '../../orders-facade.service';
import { OrderAreas, OrderTypes, ServiceTimeOptionMultiplicationFactor, ServiceTimeOptions, ServiceTimeTypeEnum } from '../order-creation.config';

import * as _ from 'lodash';
import { loader } from 'src/app/shared/decorators/loader';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { Camera } from '@capacitor/camera';
import { Device } from '@capacitor/device';
import { SearchFacadeService } from '../../../search/search-facade.service';
import { LanguageService } from 'src/app/shared/services/translation/language.service';
import { DateAdapter } from '@angular/material/core';
import * as moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.page.html',
  styleUrls: ['./order-form.page.scss'],

})
export class OrderFormPage implements OnInit {

  get serviceTimeOptions() {
    if (this.selectedKind != null && this.orderTypeValue) {
      return _.find(ServiceTimeOptions, {
        orderType: this.orderTypeValue
      }).values;
    } else {
      return [];
    }
  }

  get orderArea() { return _.find(OrderAreas, { id: this.selectedDept }).name; }
  get orderAreaValue() { return _.find(OrderAreas, { id: this.selectedDept }).value; }
  get orderType() { return _.find(OrderTypes, { id: this.selectedKind }).name; }
  get orderTypeValue() { return _.find(OrderTypes, { id: this.selectedKind }).value; }
  get orderId() { return this.orderForm.get('id').value; }
  get location() { return this.orderForm.get('location').value; }

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public orderService: OrdersFacadeService,
    public searchService: SearchFacadeService,
    public languageService: LanguageService,
    public dateAdapter: DateAdapter<any>,
  ) { }

  selectedKind: number;
  selectedDept: number;
  get selectedDateForMaintenance() {
    // use moment to make human readable date with month, day and year from endDate

    if (this.orderForm.get('needs_fix_in_hours_date').value) {
      const configForServiceType = _.find(ServiceTimeOptionMultiplicationFactor, {
        type: ServiceTimeTypeEnum.Date
      });

      return moment(this.orderForm.get('needs_fix_in_hours_date').value).format(configForServiceType.momentTimeFormat);
    }

    return null;
  }

  locations: Location[];
  machines: Machine[];
  user: ServiceProviderUser;
  readonly OptionsSection2: ServiceProviderProfileOption[] = [
    {
        name: 'Certificates',
        type: ServiceProviderOptions.Training,
    },
    {
        name: 'Preventive Occupational Health Care',
        type: ServiceProviderOptions.Certificate,
    },
    {
        name: 'Experience with Manufacturers',
        type: ServiceProviderOptions.Experience,
    }
  ];
  readonly OptionsSection1: ServiceProviderProfileOption[] = [
    {
      name: 'Selection Criteria / Skills',
      type: ServiceProviderOptions.Skills,
    }
  ];
  credentialOptions: CredentialOptions;
  file: File;
  order: Order;
  readonly OrderDescriptionDocumentTypeEnum = OrderDescriptionDocumentTypeEnum;
  readonly ServiceTimeTypeEnum = ServiceTimeTypeEnum;
  readonly ServiceTimeOptionMultiplicationFactor = ServiceTimeOptionMultiplicationFactor;
  readonly Type2DeEnum = Type2DeEnum;
  orderFetched = false;
  orderForm = new FormGroup({
    area: new FormControl(null, Validators.required),
    certificates: new FormControl([]),
    contact_person_email: new FormControl('', Validators.required),
    contact_person_full_name: new FormControl('', Validators.required),
    contact_person_phone: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    documents: new FormControl([]),
    experience: new FormControl([]),
    id: new FormControl(null),
    location: new FormControl(null, Validators.required),
    machine: new FormControl(null),
    needs_fix_in_hours: new FormControl(null, Validators.required),
    skills: new FormControl([]),
    type: new FormControl('', Validators.required),
    what_three_words: new FormControl(''),
    training: new FormControl([]),
    needs_fix_in_hours_date: new FormControl(null),
  });

  @ViewChild('documentButton') documentButton: ElementRef;
  minDate: Date;
  @ViewChild('picker') picker: MatDatepicker<any>;

  getServiceTimeFactor(itemType) {
    return _.find(ServiceTimeOptionMultiplicationFactor, {
      type: itemType
    }).factor || 1;
  }

  async ngOnInit() {
    this.selectedKind = +this.activatedRoute.snapshot.params.kind;
    this.selectedDept = +this.activatedRoute.snapshot.params.department;

    this.locations = await this.orderService.getLocations();

    if (this.location) {
      this.machines = await this.orderService.getMachines(this.location);
    }

    this.orderForm.get('location').valueChanges.subscribe(async (value) => {
      this.machines = await this.orderService.getMachines(value);
    });

    this.orderForm.patchValue({
      area: this.orderAreaValue,
      type: _.find(OrderTypes, { id: this.selectedKind }).value
    });

    this.credentialOptions = await this.orderService.getCredentials();
    this.minDate = new Date();


    this.orderForm.get('needs_fix_in_hours_date').valueChanges.subscribe(async (value) => {
      this.setNeedFixInHours(value);
    });

    if (this.activatedRoute.snapshot.params.order) {
      const orderId = +this.activatedRoute.snapshot.params.order;
      this.orderForm.get('id').patchValue(orderId);
      await this.fetchOrder();
    }

  }

  updateOptions(value, type) {
    const checkedType = value.filter((item) => item.isChecked).map((item) => item.id);
    const update = {};
    update[type] = checkedType;
    this.orderForm.get(type).patchValue(checkedType);
  }

  @loader()
  @completionNotifier('', false)
  async saveOrderForm() {
    const order = await this.orderService.saveOrder(this.orderForm.value);
    this.orderForm.patchValue({
      ...order
    });
  }

  @loader()
  @completionNotifier('', false)
  async submit() {
    await this.saveOrderForm();
    this.searchService.selectedCandidates.next([]);
    this.router.navigate(['/customers', 'search', this.orderId, 'results']);
  }

  selectFileToUpload(documentToUpload) {
    const file = documentToUpload.target.files[0];
    this.uploadDocument(file);
  }

  @loader()
  @completionNotifier('', false)
  async uploadDocument(file) {
    await this.saveOrderForm();
    await this.orderService.addDocument(this.orderForm.value, file);
    this.fetchOrder();
  }

  async fetchOrder() {
    const order = (await this.orderService.getOrder(this.orderId));
    this.orderForm.patchValue({
      ...order
    });
    this.setNeedFixInHoursDate(order);
    this.orderFetched = true;
  }

  @loader()
  async deleteDocument(documentId) {
    await this.saveOrderForm();
    await this.orderService.deleteDocument(this.orderId, documentId);
    this.fetchOrder();
  }

  async clickFileInput() {
    if ((await Device.getInfo()).platform !== 'web') {
      await Camera.requestPermissions();
    }
    this.documentButton.nativeElement.click();
  }

  async ionViewDidEnter() {
    this.dateAdapter.setLocale(await this.languageService.getLanguage());
  }

  setNeedFixInHours(date) {
    const today = new Date();
    const startDate = today;
    const endDate = new Date(date);

    // diff is 1 less than expected
    const diffInDays = moment(endDate).diff(moment(startDate), 'days') + 1;

    const configForServiceType = _.find(ServiceTimeOptionMultiplicationFactor, {
      type: ServiceTimeTypeEnum.Date
    });

    this.orderForm.get('needs_fix_in_hours').patchValue(diffInDays * configForServiceType.factor);
  }

  setNeedFixInHoursDate(order) {
    const fixDate = moment(order.created_at).add((this.orderForm.get('needs_fix_in_hours').value / 24), 'days');
    this.orderForm.get('needs_fix_in_hours_date').patchValue(new Date(fixDate.toString()));
  }
}
