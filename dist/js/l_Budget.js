// 个人中心
var l_btn = document.querySelector('.l_header-btn');
var l_wrap = document.querySelector('.l_customer-center-wrap');
l_btn.onmouseover = function() {
    l_wrap.style.display = 'block';
};
l_btn.onmouseout = function() {
    l_wrap.style.display = 'none';
};

// 全部服务
var l_nav = document.querySelector('.l_header-nav');
var l_title = document.querySelector('.l_header-nav-select')
var l_list = document.querySelector('.l_header-select-list');
l_title.onmouseover = function() {
    l_list.style.display = 'block';
};
l_nav.onmouseout = function() {
    l_list.style.display = 'none';
};

// 计算

$('.l_budget_submit').click(function(){
       var zys = $('#l_total_budget').val();
       var zs = $('#l_table_count').val();
       var hlZys = zys * 3/10
       $('#l_totalParty').html(hlZys + '￥');
       $('#l_price').html(hlZys/zs + '￥')
    //    console.log( hlZys/zs);
});