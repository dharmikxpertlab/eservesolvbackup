import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchResultItemChooseButtonComponent } from './search-result-item-choose-button.component';

describe('SearchResultItemChooseButtonComponent', () => {
  let component: SearchResultItemChooseButtonComponent;
  let fixture: ComponentFixture<SearchResultItemChooseButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultItemChooseButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultItemChooseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
