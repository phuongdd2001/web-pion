import { Component } from '@angular/core';
import { BannerStartPageComponent } from '@shared/components/banner-start-page/banner-start-page.component';

@Component({
    selector: 'app-recruit-detail',
    standalone: true,
    imports: [BannerStartPageComponent],
    templateUrl: './recruit-detail.component.html',
    styleUrl: './recruit-detail.component.scss'
})
export class RecruitDetailComponent {
    des: string = '<h3>Mô tả công việc</h3><ul><li><span style="background-color:#ffffff;color:#000000;">Định hướng phát triển cho game theo timeline</span></li><li><span style="background-color:#ffffff;color:#000000;">Hỗ trợ PM về quản lí đầu việc và tiến độ vận hành.</span></li><li><span style="background-color:#ffffff;color:#000000;">Lên ý tưởng và thiết kế kịch bản game</span></li><li><span style="background-color:#ffffff;color:#000000;">Thiết kế các tài liệu chi tiết (GDD, Wireframe, IA map…).</span></li><li><span style="background-color:#ffffff;color:#000000;">Thiết kế màn chơi cho game.</span></li><li><span style="background-color:#ffffff;color:#000000;">Phối hợp với bộ phận Artist, Developer và MKT để phát triển, hoàn thiện và nâng cao chất lượng game.</span></li></ul>'

    contactsInfo: { icon: string, title: string, link: string }[] = [
        { icon: 'assets/images/pages/recruit/ic_phone.svg', title: '+84 123 456 789', link: 'tel:+84 867.468.845' },
        { icon: 'assets/images/pages/recruit/ic_mail.svg', title: 'Tuyendung@Pion.tech', link: 'mailto:tuyendung@volio.vn' },
        { icon: 'assets/images/pages/recruit/ic_fb.svg', title: 'Facebook.com/Pion.tech', link: 'https://www.facebook.com/profile.php?id=100089142523230' },
        { icon: 'assets/images/pages/recruit/ic_location.svg', title: 'Khuất Duy Tiến, Thanh Xuân Trung, Thanh Xuân, Hà Nội ', link: 'https://maps.app.goo.gl/1uccHB4a7ycRboxFA' }
    ]

    workDays: string[] = ['T2', 'T3', 'T4', 'T5', 'T6'];
    workNoDays: string[] = ['T7', 'CN'];

    scrollToId() {
        const element = document.getElementById('form');
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
    }
}
