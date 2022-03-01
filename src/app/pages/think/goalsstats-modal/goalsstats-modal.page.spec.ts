import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalsstatsModalPage } from './goalsstats-modal.page';

describe('GoalsstatsModalPage', () => {
  let component: GoalsstatsModalPage;
  let fixture: ComponentFixture<GoalsstatsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsstatsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsstatsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
