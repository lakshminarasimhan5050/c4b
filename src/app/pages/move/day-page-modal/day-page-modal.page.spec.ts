import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayPageModalPage } from './day-page-modal.page';

describe('DayPageModalPage', () => {
  let component: DayPageModalPage;
  let fixture: ComponentFixture<DayPageModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPageModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayPageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
