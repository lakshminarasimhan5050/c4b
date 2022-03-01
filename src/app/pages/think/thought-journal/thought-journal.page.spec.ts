import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThoughtJournalPage } from './thought-journal.page';

describe('ThoughtJournalPage', () => {
  let component: ThoughtJournalPage;
  let fixture: ComponentFixture<ThoughtJournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtJournalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThoughtJournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
