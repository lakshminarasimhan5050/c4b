import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FocusedMeditationModalPage } from './focused-meditation-modal.page';

describe('FocusedMeditationModalPage', () => {
  let component: FocusedMeditationModalPage;
  let fixture: ComponentFixture<FocusedMeditationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusedMeditationModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FocusedMeditationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
