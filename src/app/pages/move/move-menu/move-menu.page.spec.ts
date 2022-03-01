import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoveMenuPage } from './move-menu.page';

describe('MoveMenuPage', () => {
  let component: MoveMenuPage;
  let fixture: ComponentFixture<MoveMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoveMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
