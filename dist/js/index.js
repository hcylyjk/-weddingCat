

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


