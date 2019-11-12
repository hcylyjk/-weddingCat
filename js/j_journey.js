

//城市客照

var uls = document.querySelector('.j_cityBlist ul');
var oR = document.querySelector('.nave_right');
var oL = document.querySelector('.nave_left');
oR.onclick = function () {
    uls.style.left = -1200 + 'px';
    oL.style.display = 'block';
}
oL.onclick = function () {
    uls.style.left = 0 + 'px';
    oL.style.display = 'none';
}

//每月客照
var uls1 = document.querySelector('.j_month_list ul');
var oR1 = document.querySelector('.nave_right1');
var oL1 = document.querySelector('.nave_left1');
oR1.onclick = function () {
    uls1.style.left = -1200 + 'px';
    oL1.style.display = 'block';
}
oL1.onclick = function () {
    uls1.style.left = 0 + 'px';
    oL1.style.display = 'none';
}

//摄影师
var oA = document.querySelectorAll('.j_teamr a')
var oSpan = document.querySelectorAll('.j_teamr a span');
