import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagingChangeModalPage } from './managing-change-modal.page';

describe('ManagingChangeModalPage', () => {
  let component: ManagingChangeModalPage;
  let fixture: ComponentFixture<ManagingChangeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingChangeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagingChangeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
