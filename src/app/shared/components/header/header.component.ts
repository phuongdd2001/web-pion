import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ItemMenu } from '../../../types/menu';
import { Menu } from '@shared/data/data';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, NgOptimizedImage],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    menu: ItemMenu[] = Menu;

    openMenuMobile: boolean = false;
    showScroll: boolean = false;
    currentPosition: any;

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        let pos =
            (document.documentElement.scrollTop || document.body.scrollTop) +
            document.documentElement.offsetHeight;
        if (pos > this.currentPosition) {
            this.showScroll = true;
        } else {
            this.showScroll = false;
        }
        this.currentPosition = pos;
    }

    constructor() {}
}
