import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnTheJobPage } from './on-the-job.page';

describe('OnTheJobPage', () => {
  let component: OnTheJobPage;
  let fixture: ComponentFixture<OnTheJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTheJobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnTheJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
