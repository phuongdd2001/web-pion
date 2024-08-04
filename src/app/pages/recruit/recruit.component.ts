import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerStartPageComponent } from '@shared/components/banner-start-page/banner-start-page.component';
import { ItemRecruitComponent } from '@shared/components/item-recruit/item-recruit.component';

@Component({
  selector: 'app-recruit',
  standalone: true,
  imports: [BannerStartPageComponent, ItemRecruitComponent, CommonModule, RouterLink],
  templateUrl: './recruit.component.html',
  styleUrl: './recruit.component.scss'
})
export class RecruitComponent {

}
