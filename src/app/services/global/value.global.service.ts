import {
    Inject,
    inject,
    Injectable,
    PLATFORM_ID,
    Signal,
    signal,
} from '@angular/core';
import { BrowserStorageService } from './browser.storage.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ValueGlobalService {
    readonly #browserStorageService = inject(BrowserStorageService);

    public readonly locale: Signal<string | undefined>;
    readonly #locale = signal<string>('');

    constructor(
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.locale = this.#locale.asReadonly();
    }

    setLocaleDefault(code: string) {
        this.#locale.set(code);
    }

    getValueGloval() {
        if (isPlatformBrowser(this.platformId)) {
            this.#locale.set(this.#browserStorageService.getItem('language'));
        }
    }
}
