/**
 * Created by guanyj on  2018/10/23
 */
import {Component} from '@angular/core';

@Component({
    selector: 'nte-user-follows',
    templateUrl: './follows.component.html',
    styleUrls: ['./follows.component.scss']
})

export class FollowsComponent {
    list = [];
    constructor() {

        for (let i = 0; i < 20; i++) {
            this.list.push(i);
        }
    }
}
