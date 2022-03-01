import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagingChangePage } from './managing-change.page';

describe('ManagingChangePage', () => {
  let component: ManagingChangePage;
  let fixture: ComponentFixture<ManagingChangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingChangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagingChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
