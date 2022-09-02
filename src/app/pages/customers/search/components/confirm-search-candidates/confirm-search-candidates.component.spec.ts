import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmSearchCandidatesComponent } from './confirm-search-candidates.component';

describe('ConfirmSearchCandidatesComponent', () => {
  let component: ConfirmSearchCandidatesComponent;
  let fixture: ComponentFixture<ConfirmSearchCandidatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSearchCandidatesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmSearchCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
