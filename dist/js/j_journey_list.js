
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

// $(function(){
//  console.log( $(window) .scroll(function() {}))  
      
    
// })
// console.log($(document).scrollTop())
// var fixnav = document.querySelector('.j_fiednnav')
// window.onscroll = function () {
//     var html = document.documentElement || document.body;
//     if(html<=480){
//         fixnav.style.position='fixed';
//         fixnav.style.top=0;
//         fixnav.style.right=0;
//     }
//     console.log(html.scrollTop);
//   }
//   window.onscroll = function () {
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动高度
//     // console.log(scrollTop, topContent.offsetHeight);
//     if (scrollTop >= ) { // 滚动高度 > 头部内容高度
//       right.style.position = 'fixed';
//       right.style.top = 0;
//       right.style.right = 0;
//     } else {
//       right.style.position = 'initial';
//     }
//   }

//
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
//返回顶部

// $('.mod_kl').click(function(){
    
//     var rest = document.documentElement.scrollTop;
//     var tiem = setInterval(function(){
//     rest-=50;
//       if(rest<=0){
//         clearInterval(tiem);
//         rest = 0
        
//       }
//       document.documentElement.scrollTop = rest;

//     },3)
   

    
// }) 

//更多摄影师
var uls4 = document.querySelector('.j_list ul');
var oR4 = document.querySelector('.nave_right4');
var oL4 = document.querySelector('.nave_left4');
oR4.onclick = function () {
    uls4.style.left = -1200 + 'px';
    oL4.style.display = 'block';
}
oL4.onclick = function () {
    uls4.style.left = 0 + 'px';
    oL4.style.display = 'none';
};
