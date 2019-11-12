
// 焦点图
(function () {
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
    })
})()

$(function () {
    // 优秀摄影师作品 Tab切换
    $('.photographynav').on('mouseenter', 'li', function () {
        var index = $(this).index();
        $(this).css('color', '#fff').siblings().css('color', '#ccc');
        $('.informationcon').eq(index).removeClass('active').siblings().addClass('active')
    })

    // 二级菜单Tab切换
    $('.sidenav .list').on('mouseenter', '.kongzhi', function () {
        if ($('.listbox').width() != 660) {
            $(this).siblings('.listbox').css('display', 'block')
            $(this).parent().find('.listbox').animate({
                width: 660
            }, 500)
            $(this).css('background', '#fff').siblings().css('background', 'rgba(0,0,0,.6)')
            $(this).css('border-left', '4px solid #FF7385').siblings().css('border-left', 'none')

            $(this).css('color', '#000').siblings().css('color', '#fff')
            $(this).parent().find('.listbox .listbox_inner').css('display', 'block')
            $(this).parent().find('.listbox .listbox_inner').css('background', '#fff')
            var index = $(this).index();
            $('.list .listbox .listboxcon').eq(index).removeClass('active').siblings().addClass('active')

        } else {
            $(this).siblings('.listbox').css('display', 'block')

            $(this).css('background', '#fff').siblings().css('background', 'rgba(0,0,0,.6)')
            $(this).css('color', '#000').siblings().css('color', '#fff')
            $(this).css('border-left', '4px solid #FF7385').siblings().css('border-left', 'none')

            $(this).parent().find('.listbox .listbox_inner').css('background', '#fff')
            $(this).parent().find('.listbox .listbox_inner').css('display', 'block')
            var index = $(this).index();
            $('.list .listbox .listboxcon').eq(index).removeClass('active').siblings().addClass('active')
        }
    })
    $('.sidenav').on('mouseleave', '.list', function () {
        $(this).find('.listbox .listbox_inner').css('background', '#fff')
        $(this).find('.listbox').animate({
            width: 0
        }, 200)
        $(this).children('.kongzhi').css('background', 'rgba(0,0,0,.6)')
        $(this).children('.kongzhi').css('border-left', 'none')
        $(this).children('.kongzhi').css('color', '#fff')
    })

    // 每月客照 右移
    $('.entertop').on('click', '.next3', function () {
        $('.ma_enterpicture').css('transform', 'translateX(-1180px)')
        $('.ma_enterpicture').css('transition', '.5s')
        $(".next3").css('display', 'none')
        $(".prev3").css('display', 'block')

    })

    // 每月客照 左移
    $('.entertop').on('click', '.prev3', function () {
        $('.ma_enterpicture').css('transform', 'translateX(0)')
        $('.ma_enterpicture').css('transition', '.5s')
        $(".prev3").css('display', 'none')
        $(".next3").css('display', 'block')
    })

    // 客户评价 右移
    $('.evaluate').on('click', '.next', function () {
        $('.evaluatemassagecon').css('transform', 'translateX(-1180px)')
        $('.evaluatemassagecon').css('transition', '.5s')
        $(".next").css('display', 'none')
        $(".prev").css('display', 'block')

    })

    // 客户评价 左移
    $('.evaluate').on('click', '.prev', function () {
        $('.evaluatemassagecon').css('transform', 'translateX(0)')
        $('.evaluatemassagecon').css('transition', '.5s')
        $(".prev").css('display', 'none')
        $(".next").css('display', 'block')
    })

    // 导航侧栏切换
    $(function () {
        var arr = ['品质优先', '高性价比', '价格优先'];
        var _index = 0;
        $(function () {
            var index = _index;
            $('.sidenav .listbox .hobbychoosefirst:eq(0)').on('click', '.next', function () {
                var self = $(this)
                $(self).parent().find('span:eq(1)').html(arr[index])
                $(self).closest('.listbox').siblings('li:eq(0)').find('div i').html(arr[index])
                index++
                if (index > arr.length - 1) {
                    index = 0
                }
                _index = index
            })
        })
        $(function () {
            var index1 = _index;
            $('.sidenav .listbox .hobbychoosefirst:eq(0)').on('click', '.prev', function () {
                var self = $(this)
                $(self).parent().find('span:eq(1)').html(arr[index1])
                $(self).closest('.listbox').siblings('li:eq(0)').find('div i').html(arr[index1])

                index1--
                if (index1 < 0) {
                    index1 = arr.length - 1
                }
                _index = index1
            })
        })
    })

    $(function () {
        var arr1 = ['6个月内', '一年内', '一年后', '待定', '3个月内'];
        var _index3 = 0;
        $(function () {
            var index4 = _index3;
            $('.sidenav .listbox').on('click', '.next1', function () {

                var _self = $(this);
                $(_self).parent().find('span:eq(1)').html(arr1[index4])
                $(_self).closest('.listbox').siblings('li:eq(0)').find('div span').html(arr1[index4])
                index4++
                if (index4 > arr1.length - 1) {
                    index4 = 0
                }
                _index3 = index4

            })
        })
        $(function () {
            var index5 = _index3;
            $('.sidenav .listbox').on('click', '.prev1', function () {
                var self = $(this);
                $(self).parent().find('span:eq(1)').html(arr1[index5])
                $(self).closest('.listbox').siblings('li:eq(0)').find('div span').html(arr1[index5])

                index5--
                if (index5 < 0) {
                    index5 = arr1.length - 1
                }
                _index3 = index5
            })
        })


    })

    // 导航栏Time切换
    $(function () {
        var _num = $('.sidenav .listbox .timetopbox span:eq(1)').html()
        var num = _num - 0 + 1;
        $('.sidenav .listbox').on('click', '.reduce', function () {

            var content = num--;
            $('<span>' + content + '</span>').replaceAll('.timetopbox span:eq(1)')
        })
        $('.sidenav .listbox').on('click', '.add', function () {
            var content = num++;
            $('<span>' + content + '</span>').replaceAll('.timetopbox span:eq(1)')

        })
    })

    $(function () {
        var _num = $('.sidenav .listbox .timebottombox span:eq(1)').html()
        var num = _num - 0 + 1;
        $('.sidenav .listbox').on('click', '.reduce1', function () {
            var content = num--;
            $('<span>' + content + '</span>').replaceAll('.timebottombox span:eq(1)')
        })
        $('.sidenav .listbox').on('click', '.add1', function () {
            var content = num++;
            $('<span>' + content + '</span>').replaceAll('.timebottombox span:eq(1)')

        })
    })

    //隐藏二级菜单
    $('.listbox').on('click', '.close', function () {
        $(this).closest('.listbox').css('display', 'none')
    })

    // 底部固定条
    $('#fixednav').on('click', 'span', function () {
        $('#fixednav').css("display", 'none')
    })

    // 固定条显示隐藏
    $(window).scroll(function () {
        if ($(this).scrollTop() < 700) {
            $('#fixednav').css('height', '0')
        }
        if ($(this).scrollTop() > 700) {
            $('#fixednav').css('height', '150px')
            $('#fixednav').css('transition', '.5s')
        }
    })
})

























