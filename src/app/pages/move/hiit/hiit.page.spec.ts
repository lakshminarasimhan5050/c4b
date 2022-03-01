import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HiitPage } from './hiit.page';

describe('HiitPage', () => {
  let component: HiitPage;
  let fixture: ComponentFixture<HiitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HiitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
