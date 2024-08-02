import { Component } from '@angular/core';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss'
})
export class AchievementComponent {
  achievement: { icon: string, title: string, des: string }[] = [
    { title: 'Total mobile app downloads', des: '100M+', icon: 'assets/images/pages/home/ic_download.svg' },
    { title: 'Monthly Active Users', des: '100M+', icon: 'assets/images/pages/home/ic_user.svg' },
    { title: 'Total of products released', des: '100M+', icon: 'assets/images/pages/home/ic_total_apps.svg' },
  ]
}
