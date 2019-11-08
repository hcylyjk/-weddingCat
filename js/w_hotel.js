var mySwiper = new Swiper('#mySwiper', {
    loop: true, // 循环模式选项
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    effect : 'fade',
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})