
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
// var lis = document.querySelector('.mod_kl');
// console.log(lis)
// lis.onclick = function () {
//     document.documentElement.scrollTop = 0
// };

var nav = document.querySelector('.j_fiednnav');
console.log(nav)
var h2s = document.querySelectorAll('.j_nav_ietm');
var titop=document.documentElement.scrollTop
document.onscroll=function(){
    console.log(titop)
    if (document.documentElement.scrollTop==480){
       alert(666);
    }
}
