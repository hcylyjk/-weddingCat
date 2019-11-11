// 更多工具加载
var l_block = document.querySelector('.l_block');
var l_navToolMenu = document.querySelector('.l_nav-tool-menu');

l_block.onmouseover = function () {
    l_navToolMenu.style.display = 'block';
}
l_block.onmouseout = function () {
    l_navToolMenu.style.display = 'none';
}

// 下载APP二维码加载
var l_bannerBtnQrimg = document.querySelector('.l_banner-btn-qrimg');
var l_bannerBtnBg = document.querySelector('.l_banner-btn-bg');
l_bannerBtnBg.onmouseover = function () {
    l_bannerBtnQrimg.style.display = 'block';
}
l_bannerBtnBg.onmouseout = function () {
    l_bannerBtnQrimg.style.display = 'none';
}

// 模版层的二维码加载
var l_itemQr = document.querySelectorAll('.l_item-qr');
var l_itemQrBlack = document.querySelectorAll('.l_item1-qr-black');
var l_itemList = document.querySelectorAll('.l_item-list')
for (var i = 0, len = l_itemList.length; i < len; i++) {
    l_itemList[i].index = i;
    l_itemList[i].onmouseover = function () {
        l_itemQr[this.index].style.display = 'block';
        l_itemQrBlack[this.index].style.display = 'block';
    }
    l_itemList[i].onmouseout = function () {
        l_itemQr[this.index].style.display = 'none';
        l_itemQrBlack[this.index].style.display = 'none';
    }
}

// 点击制作
var l_qrWin = document.querySelector('.l_qr-win');
var l_download = document.querySelector('.l_banner-btn-download')
var l_close = document.querySelector('.l_background-download-close');
var l_btn = document.querySelector('#l_btn');

// var oL_btn = l_btn.getAttribute('class')
// console.log(oL_btn)
l_download.onclick = function (e) {
    var ev = e || window.event;
    l_qrWin.style.display = 'block';
};
l_close.onclick = function () {
    l_qrWin.style.display = 'none';
};

var item = setTimeout(function () {
        document.onclick = function () {
            l_qrWin.style.display = 'none';
            clearTimeout(item);
        }
}, 2000);




// $(document).ready(function () {
//     //滚动动画
//     var animateStartHeight = 300;
//     var windowHeight = $(window).height();
//     var animateDOMs = $(".block");
//     var animateItems = animateDOMs.map(function (key, item) {
//         return {elem: item, offsetTop: $(item).offset().top, outerHeight: $(item).outerHeight(), isAnimate: false};
//     });

//     $(window).scroll(function () {
//         var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//         //判断各个元素是否符合触发动画的标准，是的话触发
//         for (var i = 0; i < animateItems.length; i++) {
//             if (!animateItems[i].isAnimate && windowHeight + scrollTop - animateItems[i].offsetTop > animateStartHeight && scrollTop - animateItems[i].offsetTop - animateItems[i].outerHeight < animateStartHeight) {
//                 if($(animateItems[i].elem).find('.l_animate')){
//                     $(animateItems[i].elem).find('.l_animate').addClass("l_active");
//                 }
//                 var $imgLazys = $(animateItems[i].elem).find('img.lazy');
//                 if($(animateItems[i].elem).hasClass('lazy')){
//                     if($(animateItems[i].elem).attr('data-url')){
//                         $(animateItems[i].elem).css('background-image','url('+animateItems[i].elem.dataset.url+')').removeAttr('_url').removeClass('lazy');
//                     }
//                 }
//                 $imgLazys.each(function(index,item){
//                     if($(item).attr('_src')){
//                         $(item).attr('src',$(item).attr('_src')).removeAttr('_src').removeClass('lazy');
//                     }else if($(item).attr('_url')){
//                         $(item).css('background-image','url('+item.dataset.url+')').removeAttr('_url').removeClass('lazy');
//                     }
//                 })
//                 animateItems[i].isAnimate = true;
//             }
//         }
//     });



