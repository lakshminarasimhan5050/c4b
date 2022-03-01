import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebriefModalPage } from './debrief-modal.page';

describe('DebriefModalPage', () => {
  let component: DebriefModalPage;
  let fixture: ComponentFixture<DebriefModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebriefModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebriefModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
