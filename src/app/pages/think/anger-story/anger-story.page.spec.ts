import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngerStoryPage } from './anger-story.page';

describe('AngerStoryPage', () => {
  let component: AngerStoryPage;
  let fixture: ComponentFixture<AngerStoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngerStoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngerStoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
