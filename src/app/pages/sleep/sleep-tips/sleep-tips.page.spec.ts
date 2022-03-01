import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepTipsPage } from './sleep-tips.page';

describe('SleepTipsPage', () => {
  let component: SleepTipsPage;
  let fixture: ComponentFixture<SleepTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepTipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
