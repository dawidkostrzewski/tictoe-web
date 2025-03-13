import {inject, Pipe, PipeTransform} from '@angular/core';
import {DayjsService} from '../../core/dayjs-service/dayjs.service';

@Pipe({
    name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

    private readonly dayjsService = inject(DayjsService);

    transform(value: number | string, ...args: any[]): string {
        const currentTime = this.dayjsService.getDayjsInstance(new Date());
        const time = this.dayjsService.getDayjsInstance(value);
        const diffTime = currentTime.diff(time, 'days');

        if (diffTime == 0) return time.format('HH:mm');

        if (diffTime == 1) return `Yesterday, ${time.format('HH:mm')}`;

        return time.format('MMMM D, HH:mm');
    }

}
