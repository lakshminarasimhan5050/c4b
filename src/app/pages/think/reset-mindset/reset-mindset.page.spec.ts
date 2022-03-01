import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetMindsetPage } from './reset-mindset.page';

describe('ResetMindsetPage', () => {
  let component: ResetMindsetPage;
  let fixture: ComponentFixture<ResetMindsetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetMindsetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetMindsetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
