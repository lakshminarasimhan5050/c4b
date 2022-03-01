import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResistancePage } from './resistance.page';

describe('ResistancePage', () => {
  let component: ResistancePage;
  let fixture: ComponentFixture<ResistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
