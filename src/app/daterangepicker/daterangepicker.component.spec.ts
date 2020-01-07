import {async, TestBed} from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { DaterangePickerComponent } from './daterangepicker.component';

xdescribe('DaterangePickerComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DaterangePickerComponent
            ],
            imports: [
                BrowserModule
            ]
        }).compileComponents();
    }));

    it('should create the component', () => {
        const fixture = TestBed.createComponent(DaterangePickerComponent);
        const daterangePickerComponent = fixture.debugElement.componentInstance;
        expect(daterangePickerComponent).toBeTruthy();
    });
});
