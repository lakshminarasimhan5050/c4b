import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhyItMattersPage } from './why-it-matters.page';

describe('WhyItMattersPage', () => {
  let component: WhyItMattersPage;
  let fixture: ComponentFixture<WhyItMattersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyItMattersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhyItMattersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
