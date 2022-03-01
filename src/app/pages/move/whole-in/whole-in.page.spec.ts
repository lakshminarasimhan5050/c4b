import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WholeInPage } from './whole-in.page';

describe('WholeInPage', () => {
  let component: WholeInPage;
  let fixture: ComponentFixture<WholeInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WholeInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
