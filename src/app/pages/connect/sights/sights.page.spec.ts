import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SightsPage } from './sights.page';

describe('SightsPage', () => {
  let component: SightsPage;
  let fixture: ComponentFixture<SightsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
