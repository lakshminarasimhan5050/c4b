import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EffortPage } from './effort.page';

describe('EffortPage', () => {
  let component: EffortPage;
  let fixture: ComponentFixture<EffortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EffortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
