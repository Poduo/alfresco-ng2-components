import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from 'ng2-alfresco-core';
import { SearchModule } from 'ng2-alfresco-search';
import { LoginModule } from 'ng2-alfresco-login';
import { DataTableModule } from 'ng2-alfresco-datatable';
import { DocumentListModule } from 'ng2-alfresco-documentlist';
import { UploadModule } from 'ng2-alfresco-upload';
import { TagModule } from 'ng2-alfresco-tag';
import { WebScriptModule } from 'ng2-alfresco-webscript';
import { ViewerModule } from 'ng2-alfresco-viewer';
import { ActivitiFormModule } from 'ng2-activiti-form';
import { ActivitiTaskListModule } from 'ng2-activiti-tasklist';
import { ActivitiProcessListModule } from 'ng2-activiti-processlist';
import { UserInfoComponentModule } from 'ng2-alfresco-userinfo';
import { AnalyticsModule } from 'ng2-activiti-analytics';
import { AppComponent } from './app.component';
import { routing } from './app.routes';

import {
    DataTableDemoComponent,
    SearchComponent,
    SearchBarComponent,
    LoginDemoComponent,
    // ActivitiDemoComponent,
    FormViewer,
    WebscriptComponent,
    TagComponent,
    AboutComponent,
    FilesComponent,
    FormNodeViewer,
    SettingComponent
} from './components/index';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule,
        LoginModule,
        SearchModule,
        DataTableModule,
        DocumentListModule,
        UploadModule,
        TagModule,
        WebScriptModule,
        ViewerModule,
        ActivitiFormModule,
        ActivitiTaskListModule,
        ActivitiProcessListModule,
        UserInfoComponentModule,
        AnalyticsModule
    ],
    declarations: [
        AppComponent,
        SearchBarComponent,
        DataTableDemoComponent,
        SearchComponent,
        SearchBarComponent,
        LoginDemoComponent,
        // ActivitiDemoComponent,
        FormViewer,
        WebscriptComponent,
        TagComponent,
        AboutComponent,
        FilesComponent,
        FormNodeViewer,
        SettingComponent,
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
