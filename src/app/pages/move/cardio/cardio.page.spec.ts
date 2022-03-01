import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardioPage } from './cardio.page';

describe('CardioPage', () => {
  let component: CardioPage;
  let fixture: ComponentFixture<CardioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
