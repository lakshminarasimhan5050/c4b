import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BalancedPlateModalPage } from './balanced-plate-modal.page';

describe('BalancedPlateModalPage', () => {
  let component: BalancedPlateModalPage;
  let fixture: ComponentFixture<BalancedPlateModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancedPlateModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BalancedPlateModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
