import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriticalIncidentPage } from './critical-incident.page';

describe('CriticalIncidentPage', () => {
  let component: CriticalIncidentPage;
  let fixture: ComponentFixture<CriticalIncidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalIncidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriticalIncidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
