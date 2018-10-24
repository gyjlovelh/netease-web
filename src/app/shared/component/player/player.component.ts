/**
 * Created by guanyj on  2018/10/14
 */


import {Component, OnInit, ViewChild} from '@angular/core';
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

    mSource: string;

    currentTime: number;
    duration: number;

    @ViewChild('audioElement') private audioElement: any;
    @ViewChild('bar') private bar: any;
    @ViewChild('cur') private cur: any;
    @ViewChild('icon') private icon: any;

    constructor(
        private $progressService: ProgressBarService,
        private $playerService: PlayerService
    ) {}

    ngOnInit() {
        this.$playerService.initAudioElement(this.audioElement);
        this.$playerService.initProgressElement(this.bar, this.cur, this.icon);

        this.$playerService.canplay.subscribe(data => {
            this.duration = data;
        });
        this.$playerService.timeupdate.subscribe(data => {
            this.currentTime = data;
        });
    }

    handlePrev() {

    }

    handlePlay() {
        this.$playerService.playOrPause();
    }

    handleNext() {

    }


}
