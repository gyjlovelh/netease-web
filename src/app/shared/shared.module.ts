/**
 * Created by guanyj on  2018/10/14
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlayerComponent} from './component/player/player.component';
import {NeteaseCommonModule} from '@netease/common';


@NgModule({
    imports: [
        CommonModule,
        NeteaseCommonModule
    ],
    declarations: [
        PlayerComponent
    ],
    exports: [
        PlayerComponent
    ],
})

export class SharedModule {}
