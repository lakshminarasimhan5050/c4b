import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KnowYourIntentionPage } from './know-your-intention.page';

describe('KnowYourIntentionPage', () => {
  let component: KnowYourIntentionPage;
  let fixture: ComponentFixture<KnowYourIntentionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowYourIntentionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KnowYourIntentionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
