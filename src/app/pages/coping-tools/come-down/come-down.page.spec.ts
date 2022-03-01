import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComeDownPage } from './come-down.page';

describe('ComeDownPage', () => {
  let component: ComeDownPage;
  let fixture: ComponentFixture<ComeDownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComeDownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComeDownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
