$(function () {
    // 图片懒加载
    $(window).scroll(function () {
        for (var i = 0; i < $('.spotcontentcon').length; i++) {
            if ($('.spotcontentcon').eq(i).offset().top <= ($(this).scrollTop() + $(this).height())) {
                var oSrc = $('.spotcontentcon').eq(i).find('.positionimg img').attr('data-src')
                $('.spotcontentcon').eq(i).find('.positionimg img').attr('src', oSrc)
            }
        }
    })

    // 导航条定位
    $(window).scroll(function () {
        if ($(this).scrollTop() <= $('.header').height()) {
            $('#headnav').removeAttr('style')
        }
        else if ($('#headnav').offset().top <= $(this).scrollTop()) {
            $('#headnav').css('position', 'fixed')
            $('#headnav').css('left', '0')
            $('#headnav').css('top', '0')
            $('#headnav').css('z-index', '99999999')
            $('#headnav').css('overflow', 'hidden')
        }
    })

    // 请求数据
    $(window).scroll(function () {
        if ($(document).height() - $(this).scrollTop() - $(this).height() <= 1300) {
            $.ajax({
                url: '../json/c_scenic.json',
                type: 'get',
                dataType: 'json',
                cache: 'false',
                success: function (data) {
                    console.log(data)
                    for (var i = 1; i < 16; i++) {
                        var oSpot = `
                                <div class="spotcontentcon">
                                <div class="positionimg">
                                    <img data-src=${data[i].img_src} alt="">
                                    <div class="positionmassage">
                                        <p>推荐理由</p>
                                        <span>${data[i].massage}</span>
                                        <p>推荐指数 <i class="iconfont icon-pingjia1"></i><i class="iconfont icon-pingjia1"></i><i
                                                class="iconfont icon-pingjia1"></i><i class="iconfont icon-pingjia1"></i><i
                                                class="iconfont icon-pingjia1"></i></p>
                                    </div>
                                    <div class="aaa"></div>
                                    <div class="bbb"></div>
                                </div>
                                <div class="clearcontent clearfix">
                                    <div class="spantext">作品<span>${data[i].spannum}</span></div>
                                    <h2>${data[i].address}</h2>
                                    <div class="description">
                                        <p>拍摄场景</p>
                                        <span><a href="javascript:">城堡</a> / <a href="javascript:">教堂</a> / <a
                                                href="javascript:">欧式街道...</a></span>
                                    </div>
                                </div>
                                </div>
                                `
                        $('.spotcontent').append(oSpot)
                    }
                }
            })
        }




    })



})