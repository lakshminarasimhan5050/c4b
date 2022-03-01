import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfHypnosisPage } from './self-hypnosis.page';

describe('SelfHypnosisPage', () => {
  let component: SelfHypnosisPage;
  let fixture: ComponentFixture<SelfHypnosisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfHypnosisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfHypnosisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
