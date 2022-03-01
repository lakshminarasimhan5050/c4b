import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopingMenuPage } from './coping-menu.page';

describe('CopingMenuPage', () => {
  let component: CopingMenuPage;
  let fixture: ComponentFixture<CopingMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopingMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CopingMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
