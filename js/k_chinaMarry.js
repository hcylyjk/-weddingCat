$('.tab_nav .nav li').click(function(){
	var index=$(this).index()
	console.log(index)
	show_l(index)
})

function show_l(index){//出现长红条
	$('.tab_nav .nav li .l').css('display','none')
	$('.tab_nav .nav li').css('background','#F0F0F0')
	$('.tab_nav .nav li .l').eq(index).css('display','block')
	$('.tab_nav .nav li').eq(index).css('background','#ffffff')
}