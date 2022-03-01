import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepMeditationPage } from './sleep-meditation.page';

describe('SleepMeditationPage', () => {
  let component: SleepMeditationPage;
  let fixture: ComponentFixture<SleepMeditationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepMeditationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepMeditationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
