
// 焦点图
(function(){
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
})()



$(function(){
    // 优秀摄影师作品 Tab切换
    $('.photographynav').on('mouseenter','li',function(){
        var index = $(this).index();
        $(this).css('color','#fff').siblings().css('color','#ccc');
        $('.informationcon').eq(index).removeClass('active').siblings().addClass('active')
    })

    // 客户评价 右移
    $('.evaluate').on('click','.next',function(){
        $('.evaluatemassagecon').css('transform','translateX(-1180px)')
        $('.evaluatemassagecon').css('transition','.5s')
        $(".next").css('display','none')
        $(".prev").css('display','block')

    })

    // 客户评价 左移
    $('.evaluate').on('click','.prev',function(){
        $('.evaluatemassagecon').css('transform','translateX(0)')
        $('.evaluatemassagecon').css('transition','.5s')
        $(".prev").css('display','none')
        $(".next").css('display','block')
    })













})


























