import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponentComponent } from '@shared/components/title-component/title-component.component';
import { PartnerComponent } from './components/partner.component';
import { RecruitHomeComponent } from './components/recruit-home.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { ProductComponent } from './components/product/product.component';
import { TeamComponent } from './components/team/team.component';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
    AchievementComponent, 
    ProductComponent, 
    TeamComponent,
    GalleryImageComponent, 
    PartnerComponent, 
    RecruitHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
