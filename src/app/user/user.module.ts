/**
 * Created by guanyj on  2018/10/14
 */
import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './user.routes';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import {NeteaseCommonModule} from '@netease/common';
import {FollowsComponent} from './follows/follows.component';
import {FansComponent} from './fans/fans.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NeteaseCommonModule,
        RouterModule.forChild(ROUTER_CONFIG)
    ],
    declarations: [
        UserComponent,
        HomeComponent,
        FollowsComponent,
        FansComponent
    ]
})

export class UserModule {}
