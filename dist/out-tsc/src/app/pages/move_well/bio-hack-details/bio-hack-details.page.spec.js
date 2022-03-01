import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BioHackDetailsPage } from './bio-hack-details.page';
describe('BioHackDetailsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BioHackDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BioHackDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bio-hack-details.page.spec.js.map