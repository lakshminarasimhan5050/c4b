import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Your1ModalPage } from './your1-modal.page';

describe('Your1ModalPage', () => {
  let component: Your1ModalPage;
  let fixture: ComponentFixture<Your1ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Your1ModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Your1ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
