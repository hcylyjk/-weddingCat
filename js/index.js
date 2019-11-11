

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
})
$('.h_select li').on('mouseleave', function (e) {
    var $index = parseInt($(this).attr('z-index'));
    var img = $('.h_bg1')[$index];
    var img2 = $('.h_bg2')[$index]
    img.classList.remove('h_img');
    img2.classList.add('h_img');
})


//轮播
let ins = 0;
// let lis = document.querySelectorAll('.h_slides li');
// let ols = document.querySelectorAll('.h_ols li');
let timer;
let ob1={
    do1:document.querySelectorAll('.h_slides li'),//背景图片
    do2: document.querySelectorAll('.h_ols li'),//小方框
}
let stl1 = {
    dom1:'h_index',
    dom2:'h_op',
    dom3:'h_active',
}
//ob->元素  style-》样式添加
function done(delay,ins,dom,stl){
    //console.log(ins,dom,stl);
    carousel(delay, ins,dom,stl);
    dclick(delay,dom,stl);
}
done(5000, ins,ob1,stl1);
function carousel(delay, ins, dom , stl) {
    clearInterval(timer);
    //console.log(delay,ins,dom,stl);
    timer = setInterval(function () {
        //console.log(delay,ins,dom,stl);
        removeAll(dom,stl);
        addAll(dom,ins,stl);
        ins++;
       // console.log(ins)
        if (ins > dom.do1.length - 1) {
            ins = 0;
        }
        return ins;
    }, delay);
}
function dclick(delay,dom,stl){
    var dom1 = dom;
    //console.log(dom1);
    for (let i = 0, len = dom.do2.length; i < len; i++) {
        //console.log(dom.do1.length)
        //console.log(dom1);
        dom1.do2[i].index = i;
        dom1.do2[i].onclick = function () {
            //console.log(dom1);
            removeAll(dom1,stl);
            clearInterval(timer);
            let ins = this.index;
            addAll(dom1,ins,stl);
            setTimeout(function () {
               // console.log(dom1)
                timer = setInterval(function () {
                   // console.log(dom1);
                    ins = addAll(dom1,ins,stl);
                    removeAll(dom1,stl);
                    addAll(dom1,ins,stl);
                    ins++;
                    if (ins > dom1.do2.length - 1) {
                        ins = 0;
                    }
                }, delay);
            }, 2000)
        }
    }
}
function removeAll(dom,stl) {
    for (let i = 0, len = dom.do1.length; i < len; i++) {
        dom.do1[i].classList.remove(stl.dom1);//z-index
        dom.do1[i].classList.remove(stl.dom2);//透明度
        dom.do2[i].classList.remove(stl.dom3);//图标样式
    }
}
function addAll(dom,index,stl) {
    dom.do1[index].classList.add(stl.dom1);
    dom.do1[index].classList.add(stl.dom2);
    dom.do2[index].classList.add(stl.dom3);
    return index;
}


$('.h_pic1 span').on('mouseenter', function () {
    $('.h_pic1 span').removeClass('h_active1');
    $(this).addClass('h_active1');
});

//婚纱摄影轮播
// function h_lbAll(){
    
// }
// let h_second = 0;
// let obj2 = {
//     do1: document.querySelectorAll('.h_slides2 li'),
//     do2: document.querySelectorAll('.h_ols2 li'),
//     do3: document.querySelector('.h_leftBtn'),
//     do4: document.querySelector('.h_rightBtn'),
//     do5: document.querySelectorAll('.h_pte'),
// }
// let stl2 = {
//     dom1: 'h_bgz',//z-index
//     dom2: 'h_op2',//透明度
//     dom3: 'h_active4',
//     dom4: 'h_hidden1',//隐藏
//     dom5: 'h_show1'
// }
// let h_timer2;
// function activebl1(delay, ins, dom, stl) {

//     carousel(delay, ins, dom, stl);
//     dclick(delay, dom, stl);
//     moveText(delay, ins, dom, stl);
// }
// activebl1(4000, h_second, obj2, stl2);

// function moveText(delay, index, dom, stl) {
//     clearInterval(h_timer2);
//     console.log(delay,index,dom,stl);
    
//     h_timer2 = setInterval(function(){
//         console.log(delay,index,dom,stl);
//         for(var i =0,len = dom.do5.length; i< len;i++){
//             dom.do5[i].classList.remove(stl.dom5);
//         }
//         dom.do5[index].classList.add(stl.dom5);
//         index++
//         if(index > dom.do5.length-1){
//             index = 0;
//         }
//     },delay)
// }

// obj2.do3.onclick = function () {
//     var index = document.querySelector('.h_active4').getAttribute('data-index');
//     index--;
//     if (index < 0) {
//         index = 3;
//     }
//     getLr(index)
// }
// obj2.do4.onclick = function () {
//     var index = document.querySelector('.h_active4').getAttribute('data-index');
//     index++;
//     if (index > 3) {
//         index = 0;
//     }
//     getLr(index);
// }
// function getLr(index) {
//     removeAll(obj2, stl2);
//     addAll(obj2, index, stl2);
//     activebl1(4000, index, obj2, stl2);
// }



