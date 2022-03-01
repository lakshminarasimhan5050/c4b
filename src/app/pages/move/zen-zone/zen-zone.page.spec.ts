import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZenZonePage } from './zen-zone.page';

describe('ZenZonePage', () => {
  let component: ZenZonePage;
  let fixture: ComponentFixture<ZenZonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenZonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZenZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
