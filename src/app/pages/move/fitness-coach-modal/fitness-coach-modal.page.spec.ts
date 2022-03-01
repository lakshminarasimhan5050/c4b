import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FitnessCoachModalPage } from './fitness-coach-modal.page';

describe('FitnessCoachModalPage', () => {
  let component: FitnessCoachModalPage;
  let fixture: ComponentFixture<FitnessCoachModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessCoachModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FitnessCoachModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
