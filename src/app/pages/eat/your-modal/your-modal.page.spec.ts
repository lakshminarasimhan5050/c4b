import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourModalPage } from './your-modal.page';

describe('YourModalPage', () => {
  let component: YourModalPage;
  let fixture: ComponentFixture<YourModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
