import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StopModalPage } from './stop-modal.page';

describe('StopModalPage', () => {
  let component: StopModalPage;
  let fixture: ComponentFixture<StopModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StopModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
