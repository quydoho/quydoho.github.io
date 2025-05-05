// Feedback Data
const testimonials = [
    {
        name: "Thế Việt Bùi",
        location: "Hồ Xuân Hương, Đà Lạt",
        rating: 5,
        comment: "Ngay vị trí này có bãi đỗ xe máy & ô tô 4-7chỗ, đối diện cũng có bãi đỗ xe tới 29 chỗ được. Bờ hồ có các tiểu cảnh chụp ảnh, view hồ đẹp - nhất là lúc hoàng hôn. Đối diện có chùa Quan Âm có thể tham quan, đi vệ sinh.",
        image: "../assets/images/user1.png"
    },
    {
        name: "Tùng Lương",
        location: "Quảng Trường Lâm Viên, Đà Lạt",
        rating: 4.9,
        comment: "Đi du lịch Đà Lạt thì đương nhiên phải ghé chỗ này checkin đầu tiên r, ghé vô chụp trái atiso đăng làm ảnh nền fb thì ai cũng biết luôn. Đi tầm chiều tối cho nó mát chứ ban ngày nóng lắm.",
        image: "../assets/images/user2.png"
    },
    {
        name: "Phong Nguyen",
        location: "Thác Datanla, Đà Lạt",
        rating: 4.8,
        comment: "Khu du lịch thác rất tuyệt vời, không khí mát mẻ.Thích hợp cho các hoạt động khám phá núi rừng. Trò chơi zipline xuyên rừng, máng trượt được thiết kế rất hay",
        image: "../assets/images/user3.png"
    },
    {
        name: "Anh Khoa",
        location: "Thác Cam Ly, Đà Lạt",
        rating: 4.7,
        comment: "Thác Cam Ly mang đến một góc nhìn yên bình và thơ mộng giữa lòng Đà Lạt. Với dòng thác chảy nhẹ nhàng, nơi đây là địa điểm lý tưởng cho những ai muốn thư giãn và tận hưởng không khí trong lành.",
        image: "../assets/images/user1.png"
    },
    {
        name: "Thuc Trieu",
        location: "Thác Cam Ly, Đà Lạt",
        rating: 4.8,
        comment: "Thác Cam Ly tự nhiên , thiếu đầu tư nên nhìn cảnh quan củ xưa . Chụp hình lên lung linh hơn ngoài . Có cho thuê ngựa, thuê đồ dân tộc.",
        image: "../assets/images/user2.png"
    },
    {
        name: "Na Nguyen Phan Le",
        location: "Hồ Tuyền Lâm, Đà Lạt",
        rating: 4.7,
        comment: "Hồ đẹp, nước trong xanh. Tuy nhiên chưa được quy hoạch xứng đáng. Thiếu sân sinh hoạt cho du khách muốn hóng mát ở hồ, không có lối đi bộ ",
        image: "../assets/images/user3.png"
    },
    {
        name: "Phương Triệu",
        location: "Nhà ga Đà Lạt, Đà Lạt",
        rating: 4.8,
        comment: "Kiến trúc nhà ga và đoàn tàu đều hoài cổ, chụp hình đẹp nhưng không nhiều góc chụp, nếu không mua vé đi tàu mà chỉ vào chụp ảnh hoặc uống cf mấy quán trong đó thì phải mua vé vào cổng là 50k/khách (quá đắt).",
        image: "../assets/images/user1.png"
    }
];

// Initialize Swiper
const swiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make pagination clickable
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// Generate testimonial slides
function generateTestimonials() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <div class="p-8 border-2 border-black rounded-2xl hover:border-blue-500 transition-all">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                        <div>
                            <h4 class="font-medium text-lg">${testimonial.name}</h4>
                            <p class="text-gray-600">${testimonial.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-medium">${testimonial.rating}</span>
                        <img src="../assets/images/star.png" alt="star" class="w-4 h-4">
                    </div>
                </div>
                <p class="text-black">"${testimonial.comment}"</p>
            </div>
        `;
        
        swiperWrapper.appendChild(slide);
    });
}
document.addEventListener('DOMContentLoaded', generateTestimonials);