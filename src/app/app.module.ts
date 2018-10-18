import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NeteaseCommonModule} from '@netease/common';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './app.routes';
import {SharedModule} from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
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
