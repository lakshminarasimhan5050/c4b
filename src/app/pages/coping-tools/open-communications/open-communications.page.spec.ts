import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenCommunicationsPage } from './open-communications.page';

describe('OpenCommunicationsPage', () => {
  let component: OpenCommunicationsPage;
  let fixture: ComponentFixture<OpenCommunicationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCommunicationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenCommunicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
