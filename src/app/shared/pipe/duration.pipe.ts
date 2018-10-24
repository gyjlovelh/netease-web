/**
 * Created by guanyj on  2018/10/23
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform {

    transform(value: number | string, params: any) {
        value = Math.floor(Number(value || 0));
        const m = Math.floor(value / 60);
        const s = value % 60;
        return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }
}
