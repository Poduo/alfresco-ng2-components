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

import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AlfrescoTranslationService, AlfrescoAuthenticationService, AlfrescoPipeTranslate } from 'ng2-alfresco-core';
import { ActivitiTaskListService } from './../services/activiti-tasklist.service';
import { TaskDetailsModel } from '../models/task-details.model';
import { ActivitiForm, FormModel, FormService } from 'ng2-activiti-form';


declare let componentHandler: any;
declare let __moduleName: string;

@Component({
    selector: 'activiti-task-details',
    moduleId: __moduleName,
    templateUrl: './activiti-task-details.component.html',
    styleUrls: ['./activiti-task-details.component.css'],
    providers: [ActivitiTaskListService, FormService],
    directives: [ActivitiForm],
    pipes: [ AlfrescoPipeTranslate ]

})
export class ActivitiTaskDetails implements OnInit, OnChanges {

    @Input()
    taskId: string;

    taskDetails: TaskDetailsModel;

    taskForm: FormModel;

    /**
     * Constructor
     * @param auth
     * @param translate
     */
    constructor(private auth: AlfrescoAuthenticationService,
                private translate: AlfrescoTranslationService,
                private activitiForm: FormService,
                private activitiTaskList: ActivitiTaskListService) {

        if (translate) {
            translate.addTranslationFolder('node_modules/ng2-activiti-tasklist');
        }
    }

    ngOnInit() {
        if (this.taskId) {
            this.activitiTaskList.getTaskDetails(this.taskId).subscribe(
                (res: TaskDetailsModel) => {
                    this.taskDetails = res;
                    console.log(this.taskDetails);
                }
            );
        }
    }

    ngOnChanges(change) {
        this.loadDetails(this.taskId);
    }

    loadDetails(id: string) {
        this.taskForm = null;
        if (id) {
            this.activitiTaskList.getTaskDetails(id).subscribe(
                (res: TaskDetailsModel) => {
                    this.taskDetails = res;
                    if (this.taskDetails && this.taskDetails.formKey) {
                        this.activitiForm.getTaskForm(this.taskDetails.id).subscribe(
                            (response) => {
                                this.taskForm = response;
                            }
                        );
                    }
                    console.log(this.taskDetails);
                }
            );
        }
    }

    onComplete() {
        this.activitiTaskList.completeTask(this.taskId).subscribe(
            (res) => {
                console.log(res);
            }
        );
    }
}
