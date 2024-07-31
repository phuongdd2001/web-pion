import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponentComponent } from '@shared/components/title-component/title-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TitleComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  achievement: { icon: string, title: string, des: string }[] = [
    { title: 'Total mobile app downloads', des: '100M+', icon: 'assets/images/pages/home/ic_download.svg' },
    { title: 'Monthly Active Users', des: '100M+', icon: 'assets/images/pages/home/ic_user.svg' },
    { title: 'Total of products released', des: '100M+', icon: 'assets/images/pages/home/ic_total_apps.svg' },
  ]

  bannerTeams: string[] = ['assets/images/pages/home/banner_team_1.jpg', 'assets/images/pages/home/banner_team_2.jpg', 'assets/images/pages/home/banner_team_3.jpg']
}
