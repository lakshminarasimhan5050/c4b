import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WholeInModalPage } from './whole-in-modal.page';

describe('WholeInModalPage', () => {
  let component: WholeInModalPage;
  let fixture: ComponentFixture<WholeInModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeInModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WholeInModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
