import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlignedVsConflictedPage } from './aligned-vs-conflicted.page';

describe('AlignedVsConflictedPage', () => {
  let component: AlignedVsConflictedPage;
  let fixture: ComponentFixture<AlignedVsConflictedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignedVsConflictedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlignedVsConflictedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
