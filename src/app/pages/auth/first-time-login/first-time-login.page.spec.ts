import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstTimeLoginPage } from './first-time-login.page';

describe('FirstTimeLoginPage', () => {
  let component: FirstTimeLoginPage;
  let fixture: ComponentFixture<FirstTimeLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTimeLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstTimeLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
