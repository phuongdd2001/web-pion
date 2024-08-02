import { Component } from '@angular/core';
import { BannerStartPageComponent } from '@shared/components/banner-start-page/banner-start-page.component';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [BannerStartPageComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {

}
