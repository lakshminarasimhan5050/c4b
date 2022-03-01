import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThoughtJournalModalPage } from './thought-journal-modal.page';

describe('ThoughtJournalModalPage', () => {
  let component: ThoughtJournalModalPage;
  let fixture: ComponentFixture<ThoughtJournalModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtJournalModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThoughtJournalModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
