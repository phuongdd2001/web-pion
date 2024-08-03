import { inject, Injectable } from "@angular/core";
import { BrowserStorageService } from "@services/global/browser.storage.service";
import { ValueGlobalService } from "@services/global/value.global.service";

@Injectable({ providedIn: 'root' })
export class InitService {

    readonly #valueGlobalService = inject(ValueGlobalService);
    readonly #browserStorageService = inject(BrowserStorageService);

    init() {
        return this.#valueGlobalService.getValueGloval(), this.#browserStorageService.initialize();
    }
}
