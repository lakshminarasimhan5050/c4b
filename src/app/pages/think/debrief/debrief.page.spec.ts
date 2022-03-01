import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebriefPage } from './debrief.page';

describe('DebriefPage', () => {
  let component: DebriefPage;
  let fixture: ComponentFixture<DebriefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebriefPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebriefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
