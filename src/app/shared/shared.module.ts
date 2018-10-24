/**
 * Created by guanyj on  2018/10/14
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlayerComponent} from './component/player/player.component';
import {NeteaseCommonModule} from '@netease/common';
import {HeaderComponent} from './component/header/header.component';
import {DurationPipe} from './pipe/duration.pipe';


@NgModule({
    imports: [
        CommonModule,
        NeteaseCommonModule
    ],
    declarations: [
        PlayerComponent,
        HeaderComponent,
        DurationPipe
    ],
    exports: [
        PlayerComponent,
        HeaderComponent,
        DurationPipe
    ],
})

export class SharedModule {}
