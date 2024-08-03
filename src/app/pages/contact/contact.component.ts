import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerStartPageComponent } from '@shared/components/banner-start-page/banner-start-page.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BannerStartPageComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
