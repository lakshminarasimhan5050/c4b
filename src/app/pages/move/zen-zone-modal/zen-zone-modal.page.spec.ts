import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZenZoneModalPage } from './zen-zone-modal.page';

describe('ZenZoneModalPage', () => {
  let component: ZenZoneModalPage;
  let fixture: ComponentFixture<ZenZoneModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenZoneModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZenZoneModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
