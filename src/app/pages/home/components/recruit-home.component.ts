import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponentComponent } from '@shared/components/title-component/title-component.component';

@Component({
    selector: 'app-recruit-home',
    standalone: true,
    imports: [TitleComponentComponent, CommonModule],
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
                    <div class="text-center w-8/12 bg-white rounded-[20px] py-[38px] px-[50px] " style="box-shadow: 0px 8px 40px 0px #0000000F;">
                        <div [ngSwitch]="'Hot'" class="new-hot">
                            <div class="title" *ngSwitchCase="">
                                <h3 class="text-sizeMedium font-semibold line-clamp-1">
                                Frontend (WebApp) Developer
                                </h3>
                            </div>
                            <div class="title-new" *ngSwitchCase="'New'">
                                <h3 class="text-sizeMedium font-semibold line-clamp-1">
                                Frontend (WebApp) Developer
                                </h3>
                            </div>
                            <div class="title-hot" *ngSwitchCase="'Hot'">
                                <h3 class="text-sizeMedium font-semibold line-clamp-1">
                                Frontend (WebApp) Developer
                                </h3>
                            </div>
                        </div>

                        <div class="subtitle mt-4">
                            <span class="text-sizeDefaultRecuit font-medium">
                              Mức lương: $ 999.999.999
                            </span>
                            <span
                                class="text-sizeDefaultRecuit font-medium"
                                >
                                Hạn nộp hồ sơ: 12/05/2021
                                </span
                            >
                        </div>
                        <p class="text-base leading-7 text-[#363636]/60 mt-6 line-clamp-2">
                        Tham gia phát triển các dự án của công ty. Lập trình xây dựng core, 
                        front end cho các hệ thống của công ty và người dùng Thực hiện phát triển các dự án bằng ngôn ngữ React, VueJS, AngularJS, PHP...
                        </p>
                        <button
                            type="button"
                            class="mt-6"
                        >
                            <a
                                href=""
                                target="_blank"
                                class="text-lg font-semibold text-white py-4 px-[45px] bg-colorLinkDefault rounded-lg"
                            >
                            ỨNG TUYỂN
                            </a>
                        </button>
                    </div>
                </div>
            </div>
    </div>
  `,
    styles: `
    .title-new {
        position: relative;
        display: inline-block;
        &::before {
            position: absolute;
            font-weight: 500;
            font-size: 12px;
            padding: 5px 4px;
            left: -50px;

            color: #fff;
            line-height: 16px;
            bottom: 10px;
            border-radius: 8px 8px 0px 8px;
            content: 'new';
            background-color: #00cd39;
            text-transform: uppercase;
            font-weight: 600;
        }

        &::after {
            content: "";
            position: absolute;
            left: -22.5px;
            width: 0;
            height: 0;
            border-left: 9px solid transparent;
            bottom: 4px;
            border-top: 6px solid #00a32e;
        }
    }

    .title-hot {
        position: relative;
        display: inline-block;
        &::before {
            position: absolute;
            font-weight: 500;
            font-size: 12px;
            padding: 5px 4px;
            left: -44px;

            color: #fff;
            line-height: 16px;
            bottom: 10px;
            border-radius: 8px 8px 0px 8px;
            content: 'hot';
            background-color: red;
            text-transform: uppercase;
            font-weight: 600;
        }

        &::after {
            content: "";
            position: absolute;
            left: -19.5px;
            width: 0;
            height: 0;
            border-left: 9px solid transparent;
            bottom: 4px;
            border-top: 6px solid red;
        }
    }`
})
export class RecruitHomeComponent {

}
