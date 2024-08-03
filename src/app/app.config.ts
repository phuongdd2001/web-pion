import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import { BrowserModule, provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { routes } from './config/routes/app.routes';
import { LanguageService } from '@services/global/language.service';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { InitService } from '@services/init/init.service';
import { HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '@utils/http-loader-factory';

const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'enabled', // set là top thì khi back lại nó sẽ scroll lên đầu page, enabled thì back lại giữ nguyên vị trí cũ
    anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
    withInMemoryScrolling(scrollConfig);

    export function initializeAppDetail(initService: InitService) {
        return () => {
            return initService.init();
        };
    }

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, inMemoryScrollingFeature),
        provideClientHydration(
            withHttpTransferCacheOptions({
                includePostRequests: true,
            })
        ),
        importProvidersFrom([
            BrowserModule,
            BrowserAnimationsModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient],
                },
            }),
        ]),
        provideAnimations(),
        provideHttpClient(withFetch(), withInterceptorsFromDi()),
        LanguageService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeAppDetail,
            deps: [InitService],
            multi: true,
        },
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: VolioAuthInterceptor,
        //     multi: true,
        // },
    ]
};
