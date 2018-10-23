import { NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NeteaseCommonModule} from '@netease/common';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './app.routes';
import {SharedModule} from './shared/shared.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        SharedModule,
        NeteaseCommonModule,
        RouterModule.forRoot(ROUTER_CONFIG)
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
