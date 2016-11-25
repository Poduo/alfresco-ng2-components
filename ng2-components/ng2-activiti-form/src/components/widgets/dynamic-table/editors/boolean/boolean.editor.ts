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

import { Component } from '@angular/core';
import { CellEditorComponent } from './../cell.editor';
import { DynamicTableRow, DynamicTableColumn } from './../../dynamic-table.widget.model';

declare var require: any;

@Component({
    selector: 'alf-boolean-editor',
    template: require('./boolean.editor.html'),
    styles: [require('./boolean.editor.css')]
})
export class BooleanEditorComponent extends CellEditorComponent {

    onValueChanged(row: DynamicTableRow, column: DynamicTableColumn, event: any) {
        let value: boolean = (<HTMLInputElement>event.target).checked;
        row.value[column.id] = value;
    }

}
