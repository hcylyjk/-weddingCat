
$('.h_self').on('mouseenter',function(){
    $('.h_get').css('display','block');
});
$('.h_self').on('mouseleave',function(){
    $('.h_get').css('display','none');
});
$('.h_list li').hover(function(){
    var $lis = $('.h_list li');
    for(var i=0,len=$lis.length;i<len;i++){
        $lis[i].style.background='#fff';
    }
    $(this).css('background','#efecec');
});


// 结婚流程-图片转换
$('.h_select li').on('mouseenter', function (e) {
    var $index = parseInt($(this).attr('z-index'));
    var img = $('.h_bg1')[$index];
    var img2 = $('.h_bg2')[$index]
    img.classList.add('h_img');
    img2.classList.remove('h_img');
});
$('.h_select li').on('mouseleave', function (e) {
    var $index = parseInt($(this).attr('z-index'));
    var img = $('.h_bg1')[$index];
    var img2 = $('.h_bg2')[$index]
    img.classList.remove('h_img');
    img2.classList.add('h_img');
});

//婚宴酒店

  //滚动事件
  window.onscroll = function () {
    //console.log(document.documentElement.scrollTop);
    var allText = document.querySelectorAll('.h_nav_text');//获取所有文字
    //console.log(scrollHeight)
    var allPic = document.querySelectorAll('.h_nav_pic');//获取所有图标
    var hNav = document.querySelector('.h_nav_item');
    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    var wrap = 1207;
    var fixWrap = 600;
    if (scrollHeight < 520) {
        hNav.classList.remove('h_nav_fixed');
        hNav.classList.add('h_nav_position');
    } else {
        hNav.classList.remove('h_nav_position');
        hNav.classList.add('h_nav_fixed');
    }
    if (scrollHeight < wrap) {
        hClearText(allText);
        hClearpic(allPic);
        allText[0].classList.remove('h_nav_hidden');
        allPic[0].classList.add('h_nav_hidden')
        return;
    }
    if (scrollHeight > wrap && scrollHeight < wrap + fixWrap) {
        hClearText(allText);
        hClearpic(allPic);
        allText[1].classList.remove('h_nav_hidden');
        allPic[1].classList.add('h_nav_hidden');
    }
    if (scrollHeight > wrap + fixWrap && scrollHeight < wrap + fixWrap * 2) {
        hClearText(allText);
        hClearpic(allPic);
        allText[2].classList.remove('h_nav_hidden');
        allPic[2].classList.add('h_nav_hidden');
    }
    if (scrollHeight > wrap + fixWrap * 2 && scrollHeight < wrap + fixWrap * 3) {
        hClearText(allText);
        hClearpic(allPic);
        allText[3].classList.remove('h_nav_hidden');
        allPic[3].classList.add('h_nav_hidden');
    }
    if (scrollHeight > wrap + fixWrap * 3 && scrollHeight < wrap + fixWrap * 4) {
        hClearText(allText);
        hClearpic(allPic);
        allText[4].classList.remove('h_nav_hidden');
        allPic[4].classList.add('h_nav_hidden');
    }
    if (scrollHeight > wrap + fixWrap * 4 && scrollHeight < wrap + fixWrap * 4 + 300) {
        hClearText(allText);
        hClearpic(allPic);
        allText[5].classList.remove('h_nav_hidden');
        allPic[5].classList.add('h_nav_hidden');
    }
    if (scrollHeight > wrap + fixWrap * 5 && scrollHeight < wrap + fixWrap * 5 +400) {
        hClearText(allText);
        hClearpic(allPic);
        allText[6].classList.remove('h_nav_hidden');
        allPic[6].classList.add('h_nav_hidden');
    }
}
function hClearText(dom) {//所有文字隐藏
    for (var i = 0, len = dom.length; i < len; i++) {
        dom[i].classList.add('h_nav_hidden');
    }
}
function hClearpic(dom) {//所有图标显示
    for (var i = 0, len = dom.length; i < len; i++) {
        dom[i].classList.remove('h_nav_hidden');
    }
}

// 免费结婚工具

$('.h_lisss li').on('mouseenter', function () {
    var index = $(this).attr('data-index');
    var sel = $('.h_bgjg')[index];
    $('.h_lisss li').removeClass('h_activebg');
    $('.h_bgjg').removeClass('h_b');
    $('.h').removeClass('h_b');
    $(this).addClass('h_activebg');
    $('.h_activebg .h').addClass('h_b');
    sel.classList.add('h_b');
});

//文字添加固定的样式
$('.h_pic1 span').on('mouseenter', function () {
    $('.h_pic1 span').removeClass('h_active1');
    $(this).addClass('h_active1');
});

//封装清除样式 elem->需要清除的列表  stl->需要清除的样式
function hClear(elem, stl, value) {
    for (var i = 0, len = elem.length; i < len; i++) {
        elem[i].classList.remove(stl[value]);
    }
}
    //封装添加样式 index->需添加的下标 elem->需添加的列表 value->stl的值
    function hAdd(elem, index, stl, value) {
        // console.log(stl[value])
        elem[index].classList.add(stl[value]);
    }
    var stl2 = {
        dom1: 'h_bgz',//z-index
        dom2: 'h_op2',//透明度
        dom3: 'h_active4',
        dom4: 'h_hidden1',//隐藏
        dom5: 'h_show1'
    };
    var st = {
        dom1: 'h_index',
        dom2: 'h_op',
        dom3: 'h_active'
    };


    //结婚服务轮播
    var h_ele1 = document.querySelectorAll('.h_olsn1 li');//获取所有圆点
    var h_ele2 = document.querySelectorAll('.h_slidesn2 li');//所有图片
    var h_allTex = document.querySelectorAll('.h_ps1');//获取所有文本
    var h_left12 = document.querySelector('.h_left12');//获取左键
    var h_right12 = document.querySelector('.h_right12');
    //console.log(h_allTex)
    function hMove1(delay) {
        clearInterval(timer);
        var timer;
        var times = delay;
        var index = 0;
        timer = setInterval(function () {
            hClear(h_ele1, stl2, 'dom3');
            hClear(h_ele2, stl2, 'dom1');
            hClear(h_ele2, stl2, 'dom2');
            hClear(h_allTex, stl2, 'dom5');
            if (index > h_ele1.length - 1) {
                index = 0;
            }
            // console.log(index);
            hAdd(h_ele1, index, stl2, 'dom3');
            hAdd(h_ele2, index, stl2, 'dom1');
            hAdd(h_ele2, index, stl2, 'dom2');
            hAdd(h_allTex, index, stl2, 'dom5');
            index++;
        }, delay);
        for (var i = 0, len = h_ele1.length; i < len; i++) {
            h_ele1[i].index = i;
            h_ele1[i].onclick = function () {
                clearInterval(timer);
                hClear(h_ele1, stl2, 'dom3');
                hClear(h_ele2, stl2, 'dom1');
                hClear(h_ele2, stl2, 'dom2');
                hClear(h_allTex, stl2, 'dom5');
                var ins = this.index;
                hAdd(h_ele1, ins, stl2, 'dom3');
                hAdd(h_ele2, ins, stl2, 'dom1');
                hAdd(h_ele2, ins, stl2, 'dom2');
                hAdd(h_allTex, index, stl2, 'dom5');
            }
        }
        h_left12.onclick = function () {
            clearInterval(timer);
            var index = document.querySelector('.h_olsn1 .h_active4').getAttribute('data-index');
            index--;
            if (index < 0) {
                index = h_ele1.length - 1;
            }
            hClear(h_ele1, stl2, 'dom3');
            hClear(h_ele2, stl2, 'dom1');
            hClear(h_ele2, stl2, 'dom2');
            hClear(h_allTex, stl2, 'dom5');
            var ins = this.index;
            hAdd(h_ele1, ins, stl2, 'dom3');
            hAdd(h_ele2, ins, stl2, 'dom1');
            hAdd(h_ele2, ins, stl2, 'dom2');
            hAdd(h_allTex, ins, stl2, 'dom5');
        }
        h_right12.onclick = function () {
            clearInterval(timer);
            var index = document.querySelector('.h_olsn1 .h_active4').getAttribute('data-index');
            index++;
            if (index > h_ele1.length - 1) {
                index = 0;
            }
            hClear(h_ele1, stl2, 'dom3');
            hClear(h_ele2, stl2, 'dom1');
            hClear(h_ele2, stl2, 'dom2');
            hClear(h_allTex, stl2, 'dom5');
            var ins = this.index;
            hAdd(h_ele1, ins, stl2, 'dom3');
            hAdd(h_ele2, ins, stl2, 'dom1');
            hAdd(h_ele2, ins, stl2, 'dom2');
            hAdd(h_allTex, ins, stl2, 'dom5');
        }
    }

    hMove1(3000);
//主页大图轮播
var h_bigl = document.querySelectorAll('.h_slides li');//大图
var h_big2 = document.querySelectorAll('.h_ols li')
function hMovey(delay) {
    clearInterval(timer);
    var timer;
    var times = delay;
    var index =0;
    timer = setInterval(function () {
        hClear(h_bigl, st, 'dom1');
        hClear(h_bigl, st, 'dom2');
        hClear(h_big2, st, 'dom3');
        if (index > elem1.length - 1) {
            index = 0;
        }
        //console.log(index);
        hAdd(h_bigl, index, st, 'dom1');
        hAdd(h_bigl, index, st, 'dom2');
        hAdd(h_big2, index, st, 'dom3');
        index++;
    }, delay);
    for(var i = 0,len=h_big2.length; i< len;i++){
        h_big2[i].index = i;
        h_big2[i].onclick = function(){
            clearInterval(timer);
            hClear(h_bigl, st, 'dom1');
            hClear(h_bigl, st, 'dom2');
            hClear(h_big2, st, 'dom3');
            var ins = this.index;
            hAdd(h_bigl, ins, st, 'dom1');
            hAdd(h_bigl, ins, st, 'dom2');
            hAdd(h_big2, ins, st, 'dom3');
        }
    }

}
hMovey(5000);



// 新浪轮播
var stl4 = {
    'dom1': 'h_olactive',
    'dom2': 'h_b'
}
var elem1 = document.querySelectorAll('.h_circles li');//所有li
var elem2 = document.querySelectorAll('.h_7');//所有要显示的块
function hMove(delay) {
    clearInterval(timer);
    var timer;
    var times = delay;
    var index =0;
    timer = setInterval(function () {
        hClear(elem1, stl4, 'dom1');
        hClear(elem2, stl4, 'dom2');
        if (index > elem1.length - 1) {
            index = 0;
        }
        //console.log(index);
        hAdd(elem1, index, stl4, 'dom1');
        hAdd(elem2, index, stl4, 'dom2');
        index++;
    }, delay);
    for(var i = 0,len=elem1.length; i< len;i++){
        elem1[i].index = i;
        elem1[i].onclick = function(){
            clearInterval(timer);
            hClear(elem1, stl4, 'dom1');
            hClear(elem2, stl4, 'dom2');
            var ins = this.index;
            hAdd(elem1, ins, stl4, 'dom1');
            hAdd(elem2, ins, stl4, 'dom2');
        }
    }

}
hMove(2000)






















 


