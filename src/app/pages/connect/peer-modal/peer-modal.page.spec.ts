import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeerModalPage } from './peer-modal.page';

describe('PeerModalPage', () => {
  let component: PeerModalPage;
  let fixture: ComponentFixture<PeerModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeerModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
