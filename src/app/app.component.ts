import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent,
        FooterComponent,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    isSticky: boolean = false;
    showScroll: boolean = false;
    showScrollHeight = 300;
    hideScrollHeight = 10;

    @HostListener('window:scroll')
    checkScroll() {
        const scrollPosition =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (scrollPosition >= this.showScrollHeight) {
            this.showScroll = true;
        } else {
            this.showScroll = false;
        }

        this.isSticky = window.pageYOffset > 0;
    }

    scrollToTop() {
        (function smoothscroll() {
            var currentScroll =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 5);
            }
        })();
    }
}
