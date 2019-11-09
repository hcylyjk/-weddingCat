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
        $('.slide_pic').eq(index).slideDown(1000, 'swing', function () {
            MySwiperSlide = swiperSlide('#' + $('.slide_pic').eq(index).find('.swiper_slide').attr('id'))
        });
    }

})
$.ajax({
    url: '../json/w_hotel.json',
    type: 'get',
    // cache: false,//不使用缓存
    // dataType: 'json',
    // jsonpCallback: 'myCallback',
    // timeout: 5000,//设置超时时间
    success: function myCallback(data) {
        for (var i = 0; i < data.length; i++) {
            $('.hotel_classify_content').each(function (index, item) {
                //寻找对应的类别
                if (data[i].classify == $(item).attr('classify')) {
                    var $thisinfo = $(item).find('.hcc_info')
                    $thisinfo.each(function (index2, item2) {
                        //根据图片大小寻找放的位置
                        if ($(item2).attr('imgSize') == data[i].imgSize) {
                            if (data[i].imgSize == '3') {
                                var $box = $(item2).children();
                                for (var k = 0; k < $box.length; k++) {
                                    var $thisbox = $($box[k])
                                    //判断是否有内容
                                    if ($thisbox.attr('haveInfo') == 'false') {
                                        $thisbox.find('dt img').attr('src', data[i].imgSrc)
                                        $thisbox.find('.hcc_hotel_name').text(data[i].hotelName)
                                        $thisbox.find('.hcc_hotel_pricenum').text(data[i].hotelPriceNum)
                                        $thisbox.attr('haveInfo', 'true')
                                        return;
                                    }
                                }
                            } else {
                                //判断是否有内容
                                if ($(item2).attr('haveInfo') == 'false') {
                                    var $thisbox = $(item2);
                                    if ($thisbox.attr('haveInfo') == 'false') {
                                        $thisbox.find('dt img').attr('src', data[i].imgSrc)
                                        $thisbox.find('.hcc_hotel_name').text(data[i].hotelName)
                                        $thisbox.find('.hcc_hotel_pricenum').text(data[i].hotelPriceNum)
                                        $thisbox.attr('haveInfo', 'true')
                                        return;
                                    }
                                }
                            }
                        }
                    })
                }
            })
        }
    },
    error: function (err) {
        alert('请求失败');
        console.log(err.status);
    },
    // complete: function (){
    //     console.log('请求完成');
    // }
});

var advert1 = new Swiper('#advert_swiper1', {
    loop: true, // 循环模式选项
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    effect: 'fade'
});
var strategy = swiperSlide('#strategy_swiper1')

// 换一换点击事件
$('.refresh').click(function () {
    var mt = $('.comment_list').css('margin-top')
    switch (mt) {
        case '0px':
            $('.comment_list').css('margin-top', '-260px')
            break;
        case '-260px':
            $('.comment_list').css('margin-top', '-520px')
            break;
        case '-520px':
            $('.comment_list').css('margin-top', '0px')
            break;
    }
})
$.ajax({
    url: '../json/w_comment.json',
    type: 'get',
    success: function myCallback(data) {
        for (var i = 0; i < data.length; i++) {
            var $comList = $('.comment_list li')
            for (var k = 0; k < $comList.length; k++) {
                var $thisbox = $($comList[k])
                //判断是否有内容
                if ($thisbox.attr('haveComInfo') == 'false') {
                    $thisbox.find('a img').attr('src',data[i].imgSrc);
                    $thisbox.find('.comment_box .comment_username').text(data[i].username);
                    $thisbox.find('.comment_box .comment_hotelname').text(data[i].hotelname);
                    $thisbox.find('.comment_box .comment_info').text(data[i].say);
                    $thisbox.attr('haveComInfo', 'true');
                    break;
                }
            }
        }
    },
    error: function (err) {
        alert('请求失败');
        console.log(err.status);
    },
});