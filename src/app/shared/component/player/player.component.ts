/**
 * Created by guanyj on  2018/10/14
 */


import {Component, OnInit} from '@angular/core';
import {ProgressBarService} from './progress-bar.service';
import {PlayerService} from './player.service';

@Component({
    selector: 'nte-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
    providers: [
        ProgressBarService,
        PlayerService
    ]
})

export class PlayerComponent implements OnInit {

    constructor(
        private $progressService: ProgressBarService,
        private $playerService: PlayerService
    ) {}

    ngOnInit() {

    }

    handlePrev() {

    }

    handlePlay() {

    }

    handleNext() {

    }
}
