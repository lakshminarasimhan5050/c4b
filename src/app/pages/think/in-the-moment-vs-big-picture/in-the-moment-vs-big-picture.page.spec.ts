import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InTheMomentVsBigPicturePage } from './in-the-moment-vs-big-picture.page';

describe('InTheMomentVsBigPicturePage', () => {
  let component: InTheMomentVsBigPicturePage;
  let fixture: ComponentFixture<InTheMomentVsBigPicturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTheMomentVsBigPicturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InTheMomentVsBigPicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
