import {Injectable} from '@angular/core';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/pl';
import 'dayjs/locale/de';

@Injectable({
    providedIn: "root"
})
export class DayjsService {

    private supportedLangs = ['en', 'pl', 'de'];

    constructor() {
        this.setLocale(this.getBrowserLanguage());
    }

    private getBrowserLanguage(): string {
        const lang = navigator.language.split('-')[0]; // Pobiera 'pl', 'en', 'de' itd.
        return this.supportedLangs.includes(lang) ? lang : 'en';
    }

    setLocale(lang: string) {
        dayjs.locale(lang);
    }

    getDayjsInstance(date: string | number | Date) {
        return dayjs(date);
    }
}
