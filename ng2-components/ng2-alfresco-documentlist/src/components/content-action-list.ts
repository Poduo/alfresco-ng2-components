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

import {Component} from '@angular/core';
import {DocumentList} from './document-list';
import {ContentActionModel} from './../models/content-action.model';

@Component({
    selector: 'content-actions',
    template: ''
})
export class ContentActionList {

    constructor(
        private documentList: DocumentList) {
    }

    /**
     * Registers action handler within the parent document list component.
     * @param action Action model to register.
     */
    registerAction(action: ContentActionModel): boolean {
        if (this.documentList && action) {
            this.documentList.actions.push(action);
            return true;
        }
        return false;
    }
}
