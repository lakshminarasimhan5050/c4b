import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopingStrategiesModalPage } from './coping-strategies-modal.page';

describe('CopingStrategiesModalPage', () => {
  let component: CopingStrategiesModalPage;
  let fixture: ComponentFixture<CopingStrategiesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopingStrategiesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CopingStrategiesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
