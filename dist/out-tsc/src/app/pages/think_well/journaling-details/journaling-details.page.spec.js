import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { JournalingDetailsPage } from './journaling-details.page';
describe('JournalingDetailsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JournalingDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(JournalingDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=journaling-details.page.spec.js.map