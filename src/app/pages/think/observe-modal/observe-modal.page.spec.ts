import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObserveModalPage } from './observe-modal.page';

describe('ObserveModalPage', () => {
  let component: ObserveModalPage;
  let fixture: ComponentFixture<ObserveModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserveModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObserveModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
