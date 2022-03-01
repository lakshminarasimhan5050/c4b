import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LogoutPage } from './logout.page';
describe('LogoutPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LogoutPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(LogoutPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=logout.page.spec.js.map