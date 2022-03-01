import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BioHackesPage } from './bio-hackes.page';

describe('BioHackesPage', () => {
  let component: BioHackesPage;
  let fixture: ComponentFixture<BioHackesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioHackesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BioHackesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
