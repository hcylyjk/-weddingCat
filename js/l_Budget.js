// 个人中心
var l_btn = document.querySelector('.l_header-btn');
var l_wrap = document.querySelector('.l_customer-center-wrap');
l_btn.onmouseover = function () {
    l_wrap.style.display = 'block';
};
l_btn.onmouseout = function () {
    l_wrap.style.display = 'none';
};

// 全部服务
var l_nav = document.querySelector('.l_header-nav');
var l_title = document.querySelector('.l_header-nav-select')
var l_list = document.querySelector('.l_header-select-list');
l_title.onmouseover = function () {
    l_list.style.display = 'block';
};
l_nav.onmouseout = function () {
    l_list.style.display = 'none';
};

// 计算

$('.l_budget_submit').click(function () {
    var zys = $('#l_total_budget').val();
    var zs = $('#l_table_count').val();
    if (!zys || !zs) {
        alert('请输入数字')
    } else if (zys < 100000){
            var hlZys = zys * 30 / 100;
            var dg = zys * 3 / 100;
            var hlf = zys * 13 / 100;
            var hj = zys * 14 / 100;
            var xt = zys * 2 / 100;
            var sp = zys * 2 / 100;
            var sy = zys * 12 / 100;
            var kp = zys * 2 / 100;
            var ld = zys * 10 / 100;
            var ph = zys * 10 / 100;
            var qt = zys * 2 / 100;

            $('#l_totalParty').html(hlZys + '￥');
            $('#l_price').html(hlZys / zs + '￥');
            $('#l_pie').html(dg + '￥');
            $('#l_dress').html(hlf + '￥');
            $('#l_ring').html(hj + '￥');
            $('#l_sweet').html(xt + '￥');
            $('#l_dressup').html(sp + '￥');
            $('#l_camera').html(sy + '￥');
            $('#l_card').html(kp + '￥');
            $('#l_music').html(ld + '￥');
            $('#l_flower').html(ph + '￥');
            $('#l_other').html(qt + '￥');
            $('#l_myBudget').html(zys + '￥');
        } else if(zys>=100000){
            var hlZys = zys * 50 / 100;
            var dg = zys * 2 / 100;
            var hlf = zys * 10 / 100;
            var hj = zys * 10 / 100;
            var xt = zys * 4 / 100;
            var sp = zys * 2 / 100;
            var sy = zys * 8 / 100;
            var kp = zys * 4 / 100;
            var ld = zys * 3 / 100;
            var ph = zys * 4 / 100;
            var qt = zys * 3 / 100;

            $('#l_totalParty').html(hlZys + '￥');
            $('#l_price').html(hlZys / zs + '￥');
            $('#l_pie').html(dg + '￥');
            $('#l_dress').html(hlf + '￥');
            $('#l_ring').html(hj + '￥');
            $('#l_sweet').html(xt + '￥');
            $('#l_dressup').html(sp + '￥');
            $('#l_camera').html(sy + '￥');
            $('#l_card').html(kp + '￥');
            $('#l_music').html(ld + '￥');
            $('#l_flower').html(ph + '￥');
            $('#l_other').html(qt + '￥');
            $('#l_myBudget').html(zys + '￥');
        }
});
