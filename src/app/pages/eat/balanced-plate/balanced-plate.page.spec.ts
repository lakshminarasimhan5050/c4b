import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BalancedPlatePage } from './balanced-plate.page';

describe('BalancedPlatePage', () => {
  let component: BalancedPlatePage;
  let fixture: ComponentFixture<BalancedPlatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancedPlatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BalancedPlatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
