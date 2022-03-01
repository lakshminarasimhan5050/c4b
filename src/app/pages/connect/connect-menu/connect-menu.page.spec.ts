import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectMenuPage } from './connect-menu.page';

describe('ConnectMenuPage', () => {
  let component: ConnectMenuPage;
  let fixture: ComponentFixture<ConnectMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
