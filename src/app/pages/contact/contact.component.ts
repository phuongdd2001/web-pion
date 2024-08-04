import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerStartPageComponent } from '@shared/components/banner-start-page/banner-start-page.component';
import { ContactInfo } from '../../types/menu';
import { ContactsPage } from '@shared/data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BannerStartPageComponent, RouterLink, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactsInfo: ContactInfo[] = ContactsPage;
}
