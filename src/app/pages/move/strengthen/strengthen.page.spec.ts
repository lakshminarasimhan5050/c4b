import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrengthenPage } from './strengthen.page';

describe('StrengthenPage', () => {
  let component: StrengthenPage;
  let fixture: ComponentFixture<StrengthenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrengthenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
