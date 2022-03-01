import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepTipsModalPage } from './sleep-tips-modal.page';

describe('SleepTipsModalPage', () => {
  let component: SleepTipsModalPage;
  let fixture: ComponentFixture<SleepTipsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepTipsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepTipsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
