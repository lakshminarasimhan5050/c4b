import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AffirmationsDetailsPage } from './affirmations-details.page';
describe('AffirmationsDetailsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AffirmationsDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AffirmationsDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=affirmations-details.page.spec.js.map