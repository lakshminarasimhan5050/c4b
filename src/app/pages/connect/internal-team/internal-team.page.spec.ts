import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternalTeamPage } from './internal-team.page';

describe('InternalTeamPage', () => {
  let component: InternalTeamPage;
  let fixture: ComponentFixture<InternalTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternalTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
