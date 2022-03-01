import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hydration101Page } from './hydration101.page';

describe('Hydration101Page', () => {
  let component: Hydration101Page;
  let fixture: ComponentFixture<Hydration101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hydration101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hydration101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
