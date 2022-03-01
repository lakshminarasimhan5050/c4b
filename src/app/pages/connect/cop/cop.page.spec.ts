import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopPage } from './cop.page';

describe('CopPage', () => {
  let component: CopPage;
  let fixture: ComponentFixture<CopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
