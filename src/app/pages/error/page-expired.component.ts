import { Component } from '@angular/core';

@Component({
  selector: 'app-page-expired',
  standalone: true,
  imports: [],
  template: `
        <div class="mx-auto container my-10 text-center">
            <div class="flex justify-center">
                <img
                    src="assets/images/pages/error/expired.png"
                    alt="banner expired"
                    width="auto"
                    height="100%"
                />
            </div>
            <h1 class="text-[36px] leading-[60px] font-extrabold capitalize mt-4">Trang liên kết đã hết hạn</h1>
            <div class="mt-8">
                <a href="/"
                    class="text-lg font-semibold text-white py-4 px-[84px] bg-colorLinkDefault rounded-[20px]">
                    Quay lại trang chủ
                </a>
            </div>
        </div>
  `,
  styles: ``
})
export class PageExpiredComponent {

}
