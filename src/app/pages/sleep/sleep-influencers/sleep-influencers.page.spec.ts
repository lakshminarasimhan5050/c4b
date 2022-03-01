import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepInfluencersPage } from './sleep-influencers.page';

describe('SleepInfluencersPage', () => {
  let component: SleepInfluencersPage;
  let fixture: ComponentFixture<SleepInfluencersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepInfluencersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepInfluencersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
