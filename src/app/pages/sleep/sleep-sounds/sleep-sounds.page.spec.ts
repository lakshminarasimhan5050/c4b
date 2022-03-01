import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepSoundsPage } from './sleep-sounds.page';

describe('SleepSoundsPage', () => {
  let component: SleepSoundsPage;
  let fixture: ComponentFixture<SleepSoundsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepSoundsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepSoundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
