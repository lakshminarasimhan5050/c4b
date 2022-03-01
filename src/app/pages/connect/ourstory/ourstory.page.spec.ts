import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurstoryPage } from './ourstory.page';

describe('OurstoryPage', () => {
  let component: OurstoryPage;
  let fixture: ComponentFixture<OurstoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurstoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurstoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
