import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FitcoaPage } from './fitcoa.page';

describe('FitcoaPage', () => {
  let component: FitcoaPage;
  let fixture: ComponentFixture<FitcoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitcoaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FitcoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
