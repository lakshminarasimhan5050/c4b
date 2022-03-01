import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScaleTrackerPage } from './scale-tracker.page';

describe('ScaleTrackerPage', () => {
  let component: ScaleTrackerPage;
  let fixture: ComponentFixture<ScaleTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleTrackerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScaleTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
