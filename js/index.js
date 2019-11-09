

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

$('.h_txt').on('mouseenter',function(){
    $('.h_li').css('z-index','11');
    $('.h_carousel').css('z-index','44')
});
$('.h_txt').on('mouseleave',function(){
    $('.h_li').css('z-index','666');
    $('.h_hidden').css('z-index','220');
    $('.h_carousel').css('z-index','228');
});

