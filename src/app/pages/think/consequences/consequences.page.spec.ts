import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsequencesPage } from './consequences.page';

describe('ConsequencesPage', () => {
  let component: ConsequencesPage;
  let fixture: ComponentFixture<ConsequencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsequencesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsequencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
