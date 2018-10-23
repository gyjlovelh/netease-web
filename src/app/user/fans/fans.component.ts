/**
 * Created by guanyj on  2018/10/23
 */
import {Component} from '@angular/core';

@Component({
    selector: 'nte-user-fans',
    templateUrl: './fans.component.html',
    styleUrls: ['./fans.component.scss']
})

export class FansComponent {
    list = [];
    constructor() {

        for (let i = 0; i < 20; i++) {
            this.list.push(i);
        }
    }
}
