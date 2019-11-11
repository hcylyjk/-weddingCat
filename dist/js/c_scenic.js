$(function () {
    // 图片懒加载
    $(window).scroll(function () {
        for (var i = 0; i < $('.spotcontentcon').length; i++) {
            if ($('.spotcontentcon').eq(i).offset().top <= ($(this).scrollTop() + $(this).height() - 200)) {
                var oSrc = $('.spotcontentcon').eq(i).find('.positionimg img').attr('data-src')
                $('.spotcontentcon').eq(i).find('.positionimg img').attr('src', oSrc)
            }
        }
    })

    




})