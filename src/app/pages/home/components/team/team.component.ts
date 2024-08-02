import { Component } from '@angular/core';
import { TitleComponentComponent } from '@shared/components/title-component/title-component.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TitleComponentComponent,],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  bannerTeams: string[] = ['assets/images/pages/home/banner_team_1.jpg', 'assets/images/pages/home/banner_team_2.jpg', 'assets/images/pages/home/banner_team_3.jpg']
}
