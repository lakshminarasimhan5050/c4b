import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AnalyticMeditationsDetailsPage } from './analytic-meditations-details.page';
describe('AnalyticMeditationsDetailsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AnalyticMeditationsDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AnalyticMeditationsDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=analytic-meditations-details.page.spec.js.map