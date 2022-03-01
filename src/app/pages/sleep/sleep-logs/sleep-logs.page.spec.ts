import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepLogsPage } from './sleep-logs.page';

describe('SleepLogsPage', () => {
  let component: SleepLogsPage;
  let fixture: ComponentFixture<SleepLogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepLogsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
