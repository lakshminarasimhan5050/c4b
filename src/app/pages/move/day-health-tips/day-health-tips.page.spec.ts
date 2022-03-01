import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayHealthTipsPage } from './day-health-tips.page';

describe('DayHealthTipsPage', () => {
  let component: DayHealthTipsPage;
  let fixture: ComponentFixture<DayHealthTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayHealthTipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayHealthTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
