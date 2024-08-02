import { Component } from '@angular/core';
import { TitleComponentComponent } from '@shared/components/title-component/title-component.component';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [TitleComponentComponent],
  template: `
  <div class="mx-auto container text-center mt-20">
    <app-title-component title="Our Partner"></app-title-component>
    <div class="flex justify-center gap-x-[82px] mt-20">
      @for (item of partners; track $index) {
        <img src="assets/images/pages/home/{{item}}" />
      }
    </div>
  </div>
    
  `,
  styles: ``
})
export class PartnerComponent {
  partners = ['partner_1.png', 'partner_2.png', 'partner_3.png', 'partner_4.png', 'partner_5.png', 'partner_6.png']
}
