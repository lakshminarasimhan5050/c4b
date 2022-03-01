import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetMindsetModalPage } from './reset-mindset-modal.page';

describe('ResetMindsetModalPage', () => {
  let component: ResetMindsetModalPage;
  let fixture: ComponentFixture<ResetMindsetModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetMindsetModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetMindsetModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
