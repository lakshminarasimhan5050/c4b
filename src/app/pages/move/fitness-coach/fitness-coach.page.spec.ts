import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FitnessCoachPage } from './fitness-coach.page';

describe('FitnessCoachPage', () => {
  let component: FitnessCoachPage;
  let fixture: ComponentFixture<FitnessCoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessCoachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FitnessCoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
