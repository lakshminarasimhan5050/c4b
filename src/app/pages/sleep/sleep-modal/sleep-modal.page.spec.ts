import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepModalPage } from './sleep-modal.page';

describe('SleepModalPage', () => {
  let component: SleepModalPage;
  let fixture: ComponentFixture<SleepModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
