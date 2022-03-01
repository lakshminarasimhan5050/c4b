import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurstoryModalPage } from './ourstory-modal.page';

describe('OurstoryModalPage', () => {
  let component: OurstoryModalPage;
  let fixture: ComponentFixture<OurstoryModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurstoryModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurstoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
