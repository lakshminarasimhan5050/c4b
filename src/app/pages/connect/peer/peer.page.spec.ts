import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeerPage } from './peer.page';

describe('PeerPage', () => {
  let component: PeerPage;
  let fixture: ComponentFixture<PeerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
