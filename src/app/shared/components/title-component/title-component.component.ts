import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-title-component',
  standalone: true,
  imports: [],
  templateUrl: './title-component.component.html',
  styleUrl: './title-component.component.scss'
})
export class TitleComponentComponent {
  title = input<string>('');
  color = input<string>('colorLinkDefault');
}
