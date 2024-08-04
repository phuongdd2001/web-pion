import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemRecruitComponent } from '@shared/components/item-recruit/item-recruit.component';
import { TitleComponentComponent } from '@shared/components/title-component/title-component.component';

@Component({
    selector: 'app-recruit-home',
    standalone: true,
    imports: [TitleComponentComponent, ItemRecruitComponent, CommonModule],
    template: `
    <div class="relative mt-32  bg-no-repeat bg-[url('assets/images/pages/home/banner_tuyendung.jpg')]  bg-cover bg-top
    before:bg-white/85 before:w-full before:h-full  before:block before:absolute
    ">
            <div
                class="mx-auto container relative pt-[60px] pb-[72px]"
            >
                <div>
                    <app-title-component
                            [title]="'Tuyển dụng'"
                            [color]="'#273A42'"
                    />
                </div>
                <div class="flex justify-center mt-9">
                   <div class="w-8/12">
                        <app-item-recruit />
                   </div>
                </div>
            </div>
    </div>
  `,
    styles: ``
})
export class RecruitHomeComponent {

}
