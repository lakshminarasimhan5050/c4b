import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfTalkModalPage } from './self-talk-modal.page';

describe('SelfTalkModalPage', () => {
  let component: SelfTalkModalPage;
  let fixture: ComponentFixture<SelfTalkModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTalkModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfTalkModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
