import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneTheJobModalPage } from './one-the-job-modal.page';

describe('OneTheJobModalPage', () => {
  let component: OneTheJobModalPage;
  let fixture: ComponentFixture<OneTheJobModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTheJobModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneTheJobModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
