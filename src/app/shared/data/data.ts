import { ContactInfo, ItemMenu } from "../../types/menu";

export const Menu: ItemMenu[] = [
    { title: 'Trang chủ', link: '/' },
    { title: 'Chúng tôi', link: '/chung-toi' },
    { title: 'Tuyển dụng', link: 'tuyen-dung' },
    { title: 'Liên hệ', link: 'lien-he' },
];

export const ContactsInfo: ContactInfo[] = [
    { title: 'Mã số thuế: 012345678', icon: 'assets/images/pages/footer/ic_tax.svg' },
    { title: '+84 123 456 789', icon: 'assets/images/pages/footer/ic_phone.svg' },
    { title: 'Contact@pion.tech', icon: 'assets/images/pages/footer/ic_mail.svg' },
    { title: 'Khuất Duy Tiến, Thanh Xuân, Hà Nội', icon: 'assets/images/pages/footer/ic_location.svg' },
];