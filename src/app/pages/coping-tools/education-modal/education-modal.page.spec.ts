import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationModalPage } from './education-modal.page';

describe('EducationModalPage', () => {
  let component: EducationModalPage;
  let fixture: ComponentFixture<EducationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
