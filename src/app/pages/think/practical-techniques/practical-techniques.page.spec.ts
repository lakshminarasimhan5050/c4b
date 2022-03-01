import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracticalTechniquesPage } from './practical-techniques.page';

describe('PracticalTechniquesPage', () => {
  let component: PracticalTechniquesPage;
  let fixture: ComponentFixture<PracticalTechniquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticalTechniquesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracticalTechniquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
