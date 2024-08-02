import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner-start-page',
  standalone: true,
  imports: [],
  templateUrl: './banner-start-page.component.html',
  styleUrl: './banner-start-page.component.scss'
})
export class BannerStartPageComponent {
  link = input<string>('assets/images/pages/home/banner_tuyendung.jpg');
  title = input<string>('our Teams');
}
