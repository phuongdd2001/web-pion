import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-component',
  standalone: true,
  imports: [],
  templateUrl: './title-component.component.html',
  styleUrl: './title-component.component.scss'
})
export class TitleComponentComponent {
  @Input() title: string = "";
}
