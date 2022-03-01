import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreathworkPage } from './breathwork.page';

describe('BreathworkPage', () => {
  let component: BreathworkPage;
  let fixture: ComponentFixture<BreathworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreathworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreathworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
