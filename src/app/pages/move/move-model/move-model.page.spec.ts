import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoveModelPage } from './move-model.page';

describe('MoveModelPage', () => {
  let component: MoveModelPage;
  let fixture: ComponentFixture<MoveModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoveModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
