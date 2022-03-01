import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepMeditationModalPage } from './sleep-meditation-modal.page';

describe('SleepMeditationModalPage', () => {
  let component: SleepMeditationModalPage;
  let fixture: ComponentFixture<SleepMeditationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepMeditationModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepMeditationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
