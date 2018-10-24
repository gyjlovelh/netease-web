/**
 * Created by guanyj on  2018/10/18
 */
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

let clientX: number = 0; // 鼠标拖拽初始偏移量
let curWidth: number = 0; // 刚进行拖拽时，进度条宽度
let targetTime: number = 0; // 拖拽结束时，目标进度位置
let isMouseDown: boolean = false;

@Injectable()
export class PlayerService {

    timeupdate: Subject<any> = new Subject<any>();
    canplay: Subject<any> = new Subject<any>();

    private audio: any;
    private bar: any;
    private cur: any;

    constructor() {}

    /**
     * 初始化音乐播放标签
     * @param audio
     */
    initAudioElement(audio: any) {
        this.audio = audio.nativeElement;
        this.audio.ontimeupdate = (event: any) => {
            if (!isMouseDown) {
                this.cur.nativeElement.style.width = event.target.currentTime / event.target.duration * 100 + '%';
            }
            this.timeupdate.next(event.target.currentTime);
        };

        this.audio.oncanplay = (event: any) => {
            this.canplay.next(event.target.duration);
        };
    }

    /**
     * 初始化进度条配置
     * @param bar
     * @param cur
     * @param icon
     */
    initProgressElement(bar: any, cur: any, icon: any) {
        this.bar = bar;
        this.cur = cur;
        bar.nativeElement.onmousedown = (event: any) => {
            if (event.target.className === icon.nativeElement.className) {
                isMouseDown = true;
                clientX = event.clientX;
                curWidth = this.cur.nativeElement.clientWidth;
                document.addEventListener('mousemove', this.handleMouseMove);
                document.addEventListener('mouseup', this.handleMouseUp);
            } else {
                this.audio.currentTime = event.offsetX / bar.nativeElement.offsetWidth * this.audio.duration;
            }
        };
    }

    /**
     * 播放/暂停按钮
     */
    playOrPause() {
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    private handleMouseMove = (event: any) => {
        let progress = (curWidth + event.clientX - clientX) / this.bar.nativeElement.offsetWidth * 100;
        progress = Math.max(0, progress);
        progress = Math.min(100, progress);
        this.cur.nativeElement.style.width = progress + '%';
        targetTime = progress;
    }

    private handleMouseUp = () => {
        isMouseDown = false;
        this.audio.currentTime = targetTime * this.audio.duration / 100;
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }
}
