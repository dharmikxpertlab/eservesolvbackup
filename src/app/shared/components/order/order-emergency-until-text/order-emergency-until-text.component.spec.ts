import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderEmergencyUntilTextComponent } from './order-emergency-until-text.component';

describe('OrderEmergencyUntilTextComponent', () => {
  let component: OrderEmergencyUntilTextComponent;
  let fixture: ComponentFixture<OrderEmergencyUntilTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderEmergencyUntilTextComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderEmergencyUntilTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
