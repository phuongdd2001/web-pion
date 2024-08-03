import { Injectable, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserStorageService } from './browser.storage.service';
import { log } from 'console';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    readonly #browserStorageService = inject(BrowserStorageService);

    private language: string;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            this.language = this.#browserStorageService.getItem('language');

        } else {
            this.language = 'vi';
        }
    }

    getLanguage(): string {
        return this.language;
    }

    //   setLanguage(lang: string): void {
    //     this.language = lang;
    //     if (isPlatformBrowser(this.platformId)) {
    //       sessionStorage.setItem('setLanguage', lang);
    //     }
    //   }
}
