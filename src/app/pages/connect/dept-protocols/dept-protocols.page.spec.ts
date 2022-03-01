import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeptProtocolsPage } from './dept-protocols.page';

describe('DeptProtocolsPage', () => {
  let component: DeptProtocolsPage;
  let fixture: ComponentFixture<DeptProtocolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptProtocolsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeptProtocolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
