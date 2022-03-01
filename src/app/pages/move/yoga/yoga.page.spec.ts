import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YogaPage } from './yoga.page';

describe('YogaPage', () => {
  let component: YogaPage;
  let fixture: ComponentFixture<YogaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YogaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
