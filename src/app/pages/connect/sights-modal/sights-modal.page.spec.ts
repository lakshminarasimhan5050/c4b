import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SightsModalPage } from './sights-modal.page';

describe('SightsModalPage', () => {
  let component: SightsModalPage;
  let fixture: ComponentFixture<SightsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SightsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
