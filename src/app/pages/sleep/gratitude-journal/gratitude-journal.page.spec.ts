import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GratitudeJournalPage } from './gratitude-journal.page';

describe('GratitudeJournalPage', () => {
  let component: GratitudeJournalPage;
  let fixture: ComponentFixture<GratitudeJournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeJournalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GratitudeJournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
