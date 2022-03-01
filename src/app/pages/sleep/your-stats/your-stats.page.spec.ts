import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourStatsPage } from './your-stats.page';

describe('YourStatsPage', () => {
  let component: YourStatsPage;
  let fixture: ComponentFixture<YourStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
