import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatsPage } from './whats.page';

describe('WhatsPage', () => {
  let component: WhatsPage;
  let fixture: ComponentFixture<WhatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
