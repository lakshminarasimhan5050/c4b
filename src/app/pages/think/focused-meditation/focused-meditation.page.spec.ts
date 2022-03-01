import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FocusedMeditationPage } from './focused-meditation.page';

describe('FocusedMeditationPage', () => {
  let component: FocusedMeditationPage;
  let fixture: ComponentFixture<FocusedMeditationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusedMeditationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FocusedMeditationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
