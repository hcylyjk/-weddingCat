
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

$('.mod_kl').click(function(){
    
    var rest = document.documentElement.scrollTop;
    var tiem = setInterval(function(){
    rest-=50;
      if(rest<=0){
        clearInterval(tiem);
        rest = 0
        
      }
      document.documentElement.scrollTop = rest;

    },3)
   

    
})


var nav = document.querySelector('.j_fiednnav');
// var rect = nav.getBoundingClientRect();
// var inse = document.captureEvents('div');
// nav.parentNode.replaceChild(inse,nav);
// inseDiv.appendChild(nav);
// inse.style.height = rect.height+'px';
// var navTop = nav.offsetTop;
// var h2s = document.querySelectorAll('.j_nav_ietm');
// var titop=document.documentElement.scrollTop
// document.onscroll=function(){
//     var btop = document.body.scrollTop||document.documentElement.scrollTop;
//     if (btop > 480) {
//         //为导航条设置fixed
//         nav.className = "fixed";
// }else {
//         //移出fixed
//         nav.className = "";
// }
// }
