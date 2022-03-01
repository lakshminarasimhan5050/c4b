import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepSoundsModalPage } from './sleep-sounds-modal.page';

describe('SleepSoundsModalPage', () => {
  let component: SleepSoundsModalPage;
  let fixture: ComponentFixture<SleepSoundsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepSoundsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepSoundsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
