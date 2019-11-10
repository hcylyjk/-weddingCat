

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
let lis = document.querySelectorAll('.h_slides li');
let ols = document.querySelectorAll('.h_ols li');
let timer;
function carousel(delay, ins) {
    clearInterval(timer);
    timer = setInterval(function () {
        removeAll();
        addAll(ins);
        ins++;
        if (ins > lis.length - 1) {
            ins = 0;
        }
    }, delay);
    for (let i = 0, len = ols.length; i < len; i++) {
        ols[i].index = i;
        ols[i].onclick = function () {
            removeAll();
            clearInterval(timer);
            let ins = this.index;
            addAll(ins);
            setTimeout(function () {
                timer = setInterval(function () {
                    var getIns = addAll(ins);
                    removeAll();
                    addAll(ins);
                    ins++;
                    if (ins > lis.length - 1) {
                        ins = 0;
                    }
                }, delay);
            }, 2000)
        }
    }

}
carousel(5000, ins);

function removeAll() {
    for (let i = 0, len = lis.length; i < len; i++) {
        lis[i].classList.remove('h_index');
        lis[i].classList.remove('h_op');
        ols[i].classList.remove('h_active');
    }
}
function addAll(index) {
    lis[index].classList.add('h_index');
    lis[index].classList.add('h_op');
    ols[index].classList.add('h_active');
    return index;
}



