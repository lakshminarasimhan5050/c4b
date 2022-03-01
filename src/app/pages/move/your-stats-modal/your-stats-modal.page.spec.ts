import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourStatsModalPage } from './your-stats-modal.page';

describe('YourStatsModalPage', () => {
  let component: YourStatsModalPage;
  let fixture: ComponentFixture<YourStatsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourStatsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourStatsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
