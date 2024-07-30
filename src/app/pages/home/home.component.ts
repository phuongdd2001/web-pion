import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  achievement: { icon: string, title: string, des: string }[] = [
    { title: 'Total mobile app downloads', des: '100M+', icon: 'assets/images/pages/home/ic_download.svg' },
    { title: 'Monthly Active Users', des: '100M+', icon: 'assets/images/pages/home/ic_user.svg' },
    { title: 'Total of products released', des: '100M+', icon: 'assets/images/pages/home/ic_total_apps.svg' },
  ]
}
