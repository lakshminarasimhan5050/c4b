import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BodyScanPage } from './body-scan.page';

describe('BodyScanPage', () => {
  let component: BodyScanPage;
  let fixture: ComponentFixture<BodyScanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyScanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BodyScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
