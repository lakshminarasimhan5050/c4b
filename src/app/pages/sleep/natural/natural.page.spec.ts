import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaturalPage } from './natural.page';

describe('NaturalPage', () => {
  let component: NaturalPage;
  let fixture: ComponentFixture<NaturalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaturalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
