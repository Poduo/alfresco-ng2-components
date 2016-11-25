/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { TextFieldWidgetComponent } from './../textfield-widget.component';

declare var require: any;

@Component({
    selector: 'date-widget',
    template: require('./date.widget.html'),
    styles: [require('./date.widget.css')]
})
export class DateWidget extends TextFieldWidgetComponent implements OnInit, AfterViewChecked {

    DATE_FORMAT: string = 'D-M-YYYY';

    datePicker: any;

    constructor(elementRef: ElementRef) {
        super(elementRef);
    }

    ngOnInit() {

        let settings: any = {
            type: 'date',
            past: moment().subtract(100, 'years'),
            future: moment().add(100, 'years')
        };

        if (this.field) {

            if (this.field.minValue) {
                settings.past = moment(this.field.minValue, this.DATE_FORMAT);
            }

            if (this.field.maxValue) {
                settings.future = moment(this.field.maxValue, this.DATE_FORMAT);
            }

            if (this.field.value) {
                settings.init = moment(this.field.value, this.DATE_FORMAT);
            }
        }

        this.datePicker = new mdDateTimePicker.default(settings);
    }

    ngAfterViewChecked() {
        if (this.elementRef) {
            let dataLocator = '#' + this.field.id;
            this.datePicker.trigger = this.elementRef.nativeElement.querySelector(dataLocator);
        }
    }

    onDateChanged() {
        if (this.field.value) {
            this.datePicker.time = moment(this.field.value, this.DATE_FORMAT);
        }
        this.checkVisibility(this.field);
    }

    onDateSelected() {
        let newValue = this.datePicker.time.format(this.DATE_FORMAT);
        this.field.value = newValue;
        this.checkVisibility(this.field);

        if (this.elementRef) {
            this.setupMaterialTextField(this.elementRef, componentHandler, newValue);
        }
    }

}
