import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hydration101ModalPage } from './hydration101-modal.page';

describe('Hydration101ModalPage', () => {
  let component: Hydration101ModalPage;
  let fixture: ComponentFixture<Hydration101ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hydration101ModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hydration101ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
