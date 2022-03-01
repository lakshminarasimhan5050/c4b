import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FirstTimeLoginPage } from './first-time-login.page';
describe('FirstTimeLoginPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FirstTimeLoginPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(FirstTimeLoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=first-time-login.page.spec.js.map