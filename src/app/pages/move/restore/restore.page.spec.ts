import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestorePage } from './restore.page';

describe('RestorePage', () => {
  let component: RestorePage;
  let fixture: ComponentFixture<RestorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
