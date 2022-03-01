import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepStoriesPage } from './sleep-stories.page';

describe('SleepStoriesPage', () => {
  let component: SleepStoriesPage;
  let fixture: ComponentFixture<SleepStoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepStoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepStoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
