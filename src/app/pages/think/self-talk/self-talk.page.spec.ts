import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfTalkPage } from './self-talk.page';

describe('SelfTalkPage', () => {
  let component: SelfTalkPage;
  let fixture: ComponentFixture<SelfTalkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTalkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfTalkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
