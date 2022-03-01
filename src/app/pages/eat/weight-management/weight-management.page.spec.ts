import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeightManagementPage } from './weight-management.page';

describe('WeightManagementPage', () => {
  let component: WeightManagementPage;
  let fixture: ComponentFixture<WeightManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightManagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeightManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
