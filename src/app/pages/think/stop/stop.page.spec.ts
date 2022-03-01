import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StopPage } from './stop.page';

describe('StopPage', () => {
  let component: StopPage;
  let fixture: ComponentFixture<StopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
