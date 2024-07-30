import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContactInfo, ItemMenu } from '../../../types/menu';
import { ContactsInfo, Menu } from '@shared/data/data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menus: ItemMenu[] = Menu;
  contactsInfo: ContactInfo[] = ContactsInfo;
}
