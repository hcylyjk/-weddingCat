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

// 模版、简介、评价展示
$(window).scroll(function(){
    console.log($(window).scrollTop())
    if($(window).scrollTop() > 350){//这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.l_animater').addClass('l_active')
    }
    if($(window).scrollTop() > 1500){
        $('.l_firstGroup').addClass('l_activer')
		$('.l_secoundGroup').addClass('l_activer')
		$('.l_thirldGroup').addClass('l_activer')
    }
    if($(window).scrollTop() > 3600){
		$('.l_appraise-img').addClass('active')
	}
});











