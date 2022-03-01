import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RhythmPage } from './rhythm.page';

describe('RhythmPage', () => {
  let component: RhythmPage;
  let fixture: ComponentFixture<RhythmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhythmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RhythmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
