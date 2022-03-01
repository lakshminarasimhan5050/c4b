import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepMenuPage } from './sleep-menu.page';

describe('SleepMenuPage', () => {
  let component: SleepMenuPage;
  let fixture: ComponentFixture<SleepMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
