import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatModalPage } from './chat-modal.page';

describe('ChatModalPage', () => {
  let component: ChatModalPage;
  let fixture: ComponentFixture<ChatModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
