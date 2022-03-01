import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectModalPage } from './connect-modal.page';

describe('ConnectModalPage', () => {
  let component: ConnectModalPage;
  let fixture: ComponentFixture<ConnectModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
