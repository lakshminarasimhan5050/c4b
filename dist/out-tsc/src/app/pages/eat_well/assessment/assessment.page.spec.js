import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AssessmentPage } from './assessment.page';
describe('AssessmentPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AssessmentPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AssessmentPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=assessment.page.spec.js.map