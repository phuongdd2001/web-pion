import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss'
})
export class AchievementComponent implements OnInit {
  achievement: { icon: string, title: string, des: string }[] = [
    { title: 'Total mobile app downloads', des: '100M+', icon: 'assets/images/pages/home/ic_download.svg' },
    { title: 'Monthly Active Users', des: '100M+', icon: 'assets/images/pages/home/ic_user.svg' },
    { title: 'Total of products released', des: '100M+', icon: 'assets/images/pages/home/ic_total_apps.svg' },
  ]

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang(
    'vi'
    );
}
}
