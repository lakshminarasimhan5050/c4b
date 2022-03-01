import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmbientNoisePage } from './ambient-noise.page';

describe('AmbientNoisePage', () => {
  let component: AmbientNoisePage;
  let fixture: ComponentFixture<AmbientNoisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbientNoisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmbientNoisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
