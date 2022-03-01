import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EatMenuPage } from './eat-menu.page';

describe('EatMenuPage', () => {
  let component: EatMenuPage;
  let fixture: ComponentFixture<EatMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EatMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
