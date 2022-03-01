import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EatModalPage } from './eat-modal.page';

describe('EatModalPage', () => {
  let component: EatModalPage;
  let fixture: ComponentFixture<EatModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EatModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
