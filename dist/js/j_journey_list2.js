
//三亚旅拍照
var uls3 = document.querySelector('.j_list_warp ul');
var oR3 = document.querySelector('.nave_right3');
var oL3 = document.querySelector('.nave_left3');
oR3.onclick = function () {
    uls3.style.left = -1200 + 'px';
    oL3.style.display = 'block';
}
oL3.onclick = function () {
    uls3.style.left = 0 + 'px';
    oL3.style.display = 'none';
};

//返回顶部

// $('.mod_kl').click(function () {

//     var rest = document.documentElement.scrollTop;
//     var tiem = setInterval(function () {
//         rest -= 50;
//         if (rest <= 0) {
//             clearInterval(tiem);
//             rest = 0

//         }
//         document.documentElement.scrollTop = rest;

//     }, 3)



// })



var nav_list = document.querySelector('.j_intentions');
var nav = document.querySelector('.j_navw');
var h2s = document.querySelectorAll('.j_nav_item');
console.log(h2s)
document.onscroll = function () {
    var btop = document.body.scrollTop || document.documentElement.scrollTop;
    if (btop >= 480) {
        //为导航条设置fixed
       
        nav.style.position = 'fixed';
        nav.style.top = 0;
        nav.style.left = 0;
        nav.style.width = 100 + '%';
        nav_list.style.display = 'block';
       
    } else if (btop <= 480) {
        nav.style.position = 'initial';
        nav_list.style.display = 'none';
    }
}


// 更多摄影师
var uls5 = document.querySelector('.j_list ul');
var oR5 = document.querySelector('.nave_right5');
var oL5 = document.querySelector('.nave_left5');
oR5.onclick = function () {
    uls5.style.left = -1200 + 'px';
    oL5.style.display = 'block';
}
oL5.onclick = function () {
    uls5.style.left = 0 + 'px';
    oL5.style.display = 'none';
};