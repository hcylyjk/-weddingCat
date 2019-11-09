

$('.h_self').on('mouseenter',function(){
    $('.h_get').css('display','block');
});
$('.h_self').on('mouseleave',function(){
    $('.h_get').css('display','none');
});
$('.h_list li').hover(function(){
    var $lis = $('.h_list li');
    console.log($lis);
    for(var i=0,len=$lis.length;i<len;i++){
        $lis[i].style.background='#fff';
    }
    $(this).css('background','#efecec');
});

// 二维码显示
$('.h_enter').on('hover',function(){
    $('.h_erw').css('z-index','320');
    $('.h_hidden').css('z-index','50');
    $('.h_li').css('z-index','50');
    $('.h_carousel').css('z-index','50');
})
$('.h_erw').on('mouseleave',function(){
    $('.h_erw').css('z-index','100');
    $('.h_hidden').css('z-index','200');
    $('.h_li').css('z-index','300');
    $('.h_carousel').css('z-index','300');
})


