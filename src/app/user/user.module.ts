/**
 * Created by guanyj on  2018/10/14
 */
import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './user.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(ROUTER_CONFIG)
    ],
    declarations: [
        UserComponent
    ]
})

export class UserModule {}
