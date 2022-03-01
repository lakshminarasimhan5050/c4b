import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExternalPage } from './external.page';

describe('ExternalPage', () => {
  let component: ExternalPage;
  let fixture: ComponentFixture<ExternalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
