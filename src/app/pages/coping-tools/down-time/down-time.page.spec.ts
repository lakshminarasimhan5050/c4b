import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownTimePage } from './down-time.page';

describe('DownTimePage', () => {
  let component: DownTimePage;
  let fixture: ComponentFixture<DownTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
