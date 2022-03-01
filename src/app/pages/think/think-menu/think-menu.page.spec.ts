import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThinkMenuPage } from './think-menu.page';

describe('ThinkMenuPage', () => {
  let component: ThinkMenuPage;
  let fixture: ComponentFixture<ThinkMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinkMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThinkMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
