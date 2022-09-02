import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderTimeInformationDivComponent } from './order-time-information-div.component';

describe('OrderTimeInformationDivComponent', () => {
  let component: OrderTimeInformationDivComponent;
  let fixture: ComponentFixture<OrderTimeInformationDivComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTimeInformationDivComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderTimeInformationDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
