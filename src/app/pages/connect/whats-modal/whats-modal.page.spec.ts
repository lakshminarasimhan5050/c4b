import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatsModalPage } from './whats-modal.page';

describe('WhatsModalPage', () => {
  let component: WhatsModalPage;
  let fixture: ComponentFixture<WhatsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
