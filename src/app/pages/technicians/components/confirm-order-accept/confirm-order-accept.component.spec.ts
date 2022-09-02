import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmOrderAcceptComponent } from './confirm-order-accept.component';

describe('ConfirmOrderAcceptComponent', () => {
  let component: ConfirmOrderAcceptComponent;
  let fixture: ComponentFixture<ConfirmOrderAcceptComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmOrderAcceptComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmOrderAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
