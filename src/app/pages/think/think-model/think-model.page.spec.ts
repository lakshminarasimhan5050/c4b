import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThinkModelPage } from './think-model.page';

describe('ThinkModelPage', () => {
  let component: ThinkModelPage;
  let fixture: ComponentFixture<ThinkModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinkModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThinkModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
