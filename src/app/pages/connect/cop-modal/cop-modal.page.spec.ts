import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopModalPage } from './cop-modal.page';

describe('CopModalPage', () => {
  let component: CopModalPage;
  let fixture: ComponentFixture<CopModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CopModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
