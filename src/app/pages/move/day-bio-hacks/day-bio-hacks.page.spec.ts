import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayBioHacksPage } from './day-bio-hacks.page';

describe('DayBioHacksPage', () => {
  let component: DayBioHacksPage;
  let fixture: ComponentFixture<DayBioHacksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayBioHacksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayBioHacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
