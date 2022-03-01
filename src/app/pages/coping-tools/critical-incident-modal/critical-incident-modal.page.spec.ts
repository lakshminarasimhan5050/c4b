import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriticalIncidentModalPage } from './critical-incident-modal.page';

describe('CriticalIncidentModalPage', () => {
  let component: CriticalIncidentModalPage;
  let fixture: ComponentFixture<CriticalIncidentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalIncidentModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriticalIncidentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
