import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayPagePage } from './day-page.page';

describe('DayPagePage', () => {
  let component: DayPagePage;
  let fixture: ComponentFixture<DayPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
