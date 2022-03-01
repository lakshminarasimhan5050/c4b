import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectWithIntentionPage } from './select-with-intention.page';

describe('SelectWithIntentionPage', () => {
  let component: SelectWithIntentionPage;
  let fixture: ComponentFixture<SelectWithIntentionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWithIntentionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectWithIntentionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
