import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SosEmotionProcessDetailsPage } from './sos-emotion-process-details.page';
describe('SosEmotionProcessDetailsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SosEmotionProcessDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SosEmotionProcessDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sos-emotion-process-details.page.spec.js.map