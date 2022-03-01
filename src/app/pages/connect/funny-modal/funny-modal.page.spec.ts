import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FunnyModalPage } from './funny-modal.page';

describe('FunnyModalPage', () => {
  let component: FunnyModalPage;
  let fixture: ComponentFixture<FunnyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunnyModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FunnyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
