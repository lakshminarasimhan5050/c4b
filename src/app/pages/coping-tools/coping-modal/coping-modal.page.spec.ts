import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopingModalPage } from './coping-modal.page';

describe('CopingModalPage', () => {
  let component: CopingModalPage;
  let fixture: ComponentFixture<CopingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopingModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CopingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
