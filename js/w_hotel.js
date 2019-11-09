var mySwiper = new Swiper('#mySwiper', {
    loop: true, // 循环模式选项
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    effect: 'fade',
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
});
//服务特色
// var mySwiper1 = swiperSlide('#slide_swiper1');
// var mySwiper2 = swiperSlide('#slide_swiper2');
// var mySwiper3 = swiperSlide('#slide_swiper3');
// var mySwiper4 = swiperSlide('#slide_swiper4')
function swiperSlide(id) {
    return new Swiper(id, {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        effect: 'fade',
        // 前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

var MySwiperSlide
//服务特色板块切换
// $('.service_dec1').click(function(){
//     $('.slide_pic').css('display','none');
//     $('.slide_pic_header1').parent().css('display','block');
// })
// $('.slide_pic').css('display','none');
$('.service_dec').click(function () {
    var index = $(this).index();
    // MySwiperSlide = swiperSlide('#'+$('.slide_pic').eq(index).find('.swiper_slide').attr('id'))
    if ($('.slide_pic').eq(index).css('display') == 'block') {
        $('.slide_pic').eq(index).slideUp(1000, 'swing');
    } else {
        $('.slide_pic').css('display', 'none');
        $('.slide_pic').eq(index).slideDown(1000, 'swing',function(){
            MySwiperSlide = swiperSlide('#'+$('.slide_pic').eq(index).find('.swiper_slide').attr('id'))
        });
    }

})