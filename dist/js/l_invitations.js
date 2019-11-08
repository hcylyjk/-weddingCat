// 更多工具加载
var l_block =document.querySelector('.l_block');
var l_navToolMenu = document.querySelector('.l_nav-tool-menu');

l_block.onmouseover = function (){
    l_navToolMenu.style.display = 'block';
}
l_block.onmouseout = function (){
    l_navToolMenu.style.display = 'none';
}

// 二维码加载
var l_bannerBtnQrimg = document.querySelector('.l_banner-btn-qrimg');
var l_bannerBtnBg = document.querySelector('.l_banner-btn-bg');
l_bannerBtnBg.onmouseover = function(){
    l_bannerBtnQrimg.style.display = 'block';
}
l_bannerBtnBg.onmouseout = function(){
    l_bannerBtnQrimg.style.display = 'none';
}



