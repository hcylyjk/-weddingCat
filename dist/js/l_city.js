// 个人中心
var l_btn = document.querySelector('.l_header-btn');
var l_wrap = document.querySelector('.l_customer-center-wrap');
l_btn.onmouseover = function() {
    l_wrap.style.display = 'block';
}
l_btn.onmouseout = function() {
    l_wrap.style.display = 'none';
}
