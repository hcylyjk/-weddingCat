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
    dataType: 'json',
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
    dataType: 'json',
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

//选项卡
var now = 0
tabGo();
var tabTimer = setInterval(tabGo,4000)
$('.nav_tab').mouseenter(function(){
    now = $(this).index();
    $('.nav_tab').removeClass('nav_tab_on')
    $(this).addClass('nav_tab_on')
    console.log($(this).index());
    $('.hot_hotel').css('display','none')
    $('.hot_hotel').eq($(this).index()).css('display','block')
})
function tabGo(){
    if(now>2){
        now = 0
    }
    $('.nav_tab').removeClass('nav_tab_on');
    $('.nav_tab').eq(now).addClass('nav_tab_on');
    $('.hot_hotel').css('display','none');
    $('.hot_hotel').eq(now).css('display','block');
    now++;
}




// 底部提交框
function offset(dom){
    var l = 0;
    var t = 0;
    var bdl = dom.clientLeft;//元素的左边框
    var bdt = dom.clientTop;//元素的上边框
    while(dom){
        l = l + dom.offsetLeft + dom.clientLeft;
        t = t + dom.offsetTop + dom.clientTop;
        dom = dom.offsetParent;
    }
    return {
        left:l-bdl,
        top:t-bdt
    };
}
window.onload = function () {
    // 头部加载
    $('.mod_hun p').text('深圳婚宴酒店')
    $('.mod_hun span').text('WEDDING HOTEL')
    $('.mod_bottom_right ul li:nth-of-type(3) a').addClass('mod_active');
    $('.mod_bottom_right ul li:nth-of-type(3) i').addClass('mod_first');

    // 尾部加载
    var modLis = ["福田婚宴酒店", "罗湖婚宴酒店", "南山婚宴酒店", "宝安婚宴酒店", "龙岗婚宴酒店", "龙华婚宴酒店", "盐田婚宴酒店", "大鹏婚宴酒店", "光明新区婚宴酒店", "坪山婚宴酒店", "广州婚宴酒店", "合肥婚宴酒店", "北京婚宴酒店", "厦门婚宴酒店", "兰州婚宴酒店", "贵阳婚宴酒店", "三亚婚宴酒店", "石家庄婚宴酒店", "郑州婚宴酒店", "哈尔滨婚宴酒店", "武汉婚宴酒店", "长沙婚宴酒店", "长春婚宴酒店", "南京婚宴酒店", "南昌婚宴酒店", "沈阳婚宴酒店", "包头婚宴酒店", "济南婚宴酒店", "太原婚宴酒店", "西安婚宴酒店", "上海婚宴酒店", "成都婚宴酒店", "天津婚宴酒店", "乌鲁木齐婚宴酒店", "昆明婚宴酒店", "杭州婚宴酒店", "重庆婚宴酒店"]
    var modLisHtml = ''
    modLis.forEach(function (value, index, arr) {
        // console.log(value);
        modLisHtml += '<li><a href="javascript:" target="_blank">' + value + '</a></li>'
    })
    $('.footer .mod_place').html(`
        <a href="javascript:" class="mod_hot">热门区域</a>
        <a href="javascript:">友情链接</a>
    `);
    $('.footer .mod_lis').html(`<ul>${modLisHtml}</ul>`);
    $('.footer .mod_lis a').css('font-size', '14px');
    $('.footer .mod_lis ul li').css('display','inline-block');
    $('.footer .mod_lis ul li a').css('margin-right','5px');

    // 浮动加载
    var max = $('body').height()-$('.footer').height()-$(window).height();
    var scrollTop = $('html').scrollTop()
    if(scrollTop>max){
        $('.footer_frame_box').css('position','relative')
    }else{
        $('.footer_frame_box').css('position','fixed')
    }
    $('.footer_frame_box').slideDown(1000, 'swing',function(){
        $('.close_ffb_box').click(function(){
            $('.footer_frame').css('display','none')
        })
        var hotelPosition = $('#hotel_position').find('.active').text();
        var hotelMoney = $('#hotel_money').find('.active').text();
        var hotelDesk = $('#hotel_desk').find('.active').text();
        // console.log(hotelPosition);
        // console.log(hotelMoney);
        // console.log(hotelDesk);
        $('#hotel_position ul li').click(function(){
            $('#hotel_position ul li').removeClass('active');
            $(this).addClass('active')
            hotelPosition = $(this).text();
        })
        $('#hotel_money ul li').click(function(){
            $('#hotel_money ul li').removeClass('active');
            $(this).addClass('active')
            hotelMoney = $(this).text();
        })
        $('#hotel_desk ul li').click(function(){
            $('#hotel_desk ul li').removeClass('active');
            $(this).addClass('active')
            hotelDesk = $(this).text();
        })
        $('.ffb_sub_btn').click(function(){
            // console.log(hotelPosition,hotelMoney,hotelDesk);
            submit(hotelPosition,hotelMoney,hotelDesk);
        })
    })
    window.onscroll = function(){
        var scrollTop = $('html').scrollTop()
        if(scrollTop>max){
            $('.footer_frame_box').css('position','relative')
        }else{
            $('.footer_frame_box').css('position','fixed')
        }
    }
}
function submit(hotelPosition,hotelMoney,hotelDesk){
    $.ajax({
        url: '../php/w_query.php',
        type: 'get',
        data: 'hp='+hotelPosition+'&hm='+hotelMoney+'&hd='+hotelDesk,
        // dataType: 'json',
        cache: false,//不使用缓存
        success: function myCallback(json) {
            console.log(json);
            
            alert('查询结果为:'+json.hp+json.hm+json.hd+json.hn);
        },
        error: function (err) {
            alert('请求失败');
            console.log(err.status);            
        },
    });
}
