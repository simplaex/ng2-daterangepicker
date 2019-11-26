"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var $ = require("jquery");
require("../../daterangepicker.js");
var config_service_1 = require("./config.service");
var DaterangePickerComponent = (function () {
    function DaterangePickerComponent(input, config, differs) {
        this.input = input;
        this.config = config;
        this.differs = differs;
        this.targetOptions = {};
        this._differ = {};
        this.options = {};
        this.selected = new core_1.EventEmitter();
        this.cancelDaterangepicker = new core_1.EventEmitter();
        this.applyDaterangepicker = new core_1.EventEmitter();
        this.hideCalendarDaterangepicker = new core_1.EventEmitter();
        this.showCalendarDaterangepicker = new core_1.EventEmitter();
        this.hideDaterangepicker = new core_1.EventEmitter();
        this.showDaterangepicker = new core_1.EventEmitter();
        this._differ['options'] = differs.find(this.options).create();
        this._differ['settings'] = differs.find(this.config.settings).create();
    }
    DaterangePickerComponent.prototype.ngAfterViewInit = function () {
        this.render();
        this.attachEvents();
    };
    DaterangePickerComponent.prototype.render = function () {
        this.targetOptions = Object.assign({}, this.config.settings, this.options);
        $(this.input.nativeElement).daterangepicker(this.targetOptions, this.callback.bind(this));
        this.datePicker = $(this.input.nativeElement).data('daterangepicker');
    };
    DaterangePickerComponent.prototype.attachEvents = function () {
        var _this = this;
        $(this.input.nativeElement).on('cancel.daterangepicker', function (event, picker) { return _this.cancelDaterangepicker.emit({ event: event, picker: picker }); });
        $(this.input.nativeElement).on('apply.daterangepicker', function (event, picker) { return _this.applyDaterangepicker.emit({ event: event, picker: picker }); });
        $(this.input.nativeElement).on('hideCalendar.daterangepicker', function (event, picker) { return _this.hideCalendarDaterangepicker.emit({ event: event, picker: picker }); });
        $(this.input.nativeElement).on('showCalendar.daterangepicker', function (event, picker) { return _this.showCalendarDaterangepicker.emit({ event: event, picker: picker }); });
        $(this.input.nativeElement).on('hide.daterangepicker', function (event, picker) { return _this.hideDaterangepicker.emit({ event: event, picker: picker }); });
        $(this.input.nativeElement).on('show.daterangepicker', function (event, picker) { return _this.showDaterangepicker.emit({ event: event, picker: picker }); });
    };
    DaterangePickerComponent.prototype.callback = function (_a) {
        var start = _a.start, end = _a.end, label = _a.label, granularity = _a.granularity;
        this.activeRange = { start: start, end: end, label: label, granularity: granularity };
        this.selected.emit(this.activeRange);
    };
    DaterangePickerComponent.prototype.destroyPicker = function () {
        try {
            $(this.input.nativeElement).data('daterangepicker').remove();
        }
        catch (e) {
            console.log(e.message);
        }
    };
    DaterangePickerComponent.prototype.ngOnDestroy = function () {
        this.destroyPicker();
    };
    DaterangePickerComponent.prototype.ngDoCheck = function () {
        var optionsChanged = this._differ['options'].diff(this.options);
        var settingsChanged = this._differ['settings'].diff(this.config.settings);
        if (optionsChanged || settingsChanged) {
            this.render();
            this.attachEvents();
            if (this.activeRange && this.datePicker) {
                this.datePicker.setStartDate(this.activeRange.start);
                this.datePicker.setEndDate(this.activeRange.end);
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DaterangePickerComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DaterangePickerComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DaterangePickerComponent.prototype, "cancelDaterangepicker", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DaterangePickerComponent.prototype, "applyDaterangepicker", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DaterangePickerComponent.prototype, "hideCalendarDaterangepicker", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DaterangePickerComponent.prototype, "showCalendarDaterangepicker", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DaterangePickerComponent.prototype, "hideDaterangepicker", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DaterangePickerComponent.prototype, "showDaterangepicker", void 0);
    DaterangePickerComponent = __decorate([
        core_1.Directive({
            selector: '[daterangepicker]',
        }),
        __metadata("design:paramtypes", [core_2.ElementRef,
            config_service_1.DaterangepickerConfig,
            core_2.KeyValueDiffers])
    ], DaterangePickerComponent);
    return DaterangePickerComponent;
}());
exports.DaterangePickerComponent = DaterangePickerComponent;
//# sourceMappingURL=daterangepicker.component.js.map