import { AfterViewInit, EventEmitter } from '@angular/core';
import { KeyValueDiffers, ElementRef, OnDestroy, DoCheck } from '@angular/core';
import '../../daterangepicker.js';
import { DaterangepickerConfig } from './config.service';
export declare class DaterangePickerComponent implements AfterViewInit, OnDestroy, DoCheck {
    private input;
    private config;
    private differs;
    private activeRange;
    private targetOptions;
    private _differ;
    datePicker: any;
    options: any;
    selected: EventEmitter<any>;
    cancelDaterangepicker: EventEmitter<any>;
    applyDaterangepicker: EventEmitter<any>;
    hideCalendarDaterangepicker: EventEmitter<any>;
    showCalendarDaterangepicker: EventEmitter<any>;
    hideDaterangepicker: EventEmitter<any>;
    showDaterangepicker: EventEmitter<any>;
    constructor(input: ElementRef, config: DaterangepickerConfig, differs: KeyValueDiffers);
    ngAfterViewInit(): void;
    render(): void;
    attachEvents(): void;
    private callback;
    destroyPicker(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
}
