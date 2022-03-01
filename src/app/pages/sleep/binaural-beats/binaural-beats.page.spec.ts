import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BinauralBeatsPage } from './binaural-beats.page';

describe('BinauralBeatsPage', () => {
  let component: BinauralBeatsPage;
  let fixture: ComponentFixture<BinauralBeatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinauralBeatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BinauralBeatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
