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

show_l(0)

$('.cirle_color li').mouseenter(function(){//圆球的颜色
	var index=$(this).index()
	cirle(index)
})

$('.cirle_color li').mouseleave(function(){//离开圆球
	var index=$(this).index()
	$('.cirle_color li').eq(index).find('a div').detach()
})
//圆球提示框
var arr_color=['红色','玫红','粉红','橙色','黄色','薄荷绿','墨绿','Tiffany蓝','天蓝','宝蓝','褐色','浅紫色','深紫色','金色','裸色','灰色','白色','黑色','彩虹色','珊瑚色','糖果色','水彩色']
function cirle(index){//生成提示框
	var cir_title=$(`<div class="color_title"><img src="../img/k_image/chinaMarriage/c01.png" alt=""><span>`+arr_color[index]+`</span></div>`)
	$('.cirle_color li').eq(index).find('a').append(cir_title)
}
	



$('.tab_show .new .news li').click(function(){//婚礼策划主题类型
	// var index=$(this).index()
	$(this).siblings().removeClass('rr_color')
	if($(this).parent().parent().attr('data')==222){
		$(this).siblings().removeClass('rr_color')
	}else{
		$(this).addClass('rr_color')
		$(this).siblings().find('a').css('color','#666464')
		$(this).find('a').css('color','#ffffff')
	}
})

function marry_type(index){//结婚主题类型
	$('.tab_show .new .news  li').removeClass('rr_color')
	$('.tab_show .new .news li').eq(index).addClass('rr_color')
	$('.tab_show .new .news li').eq(index).find('a').css('color','#ffffff')
}
marry_type(1)



//li划过变色
	$('.news li').hover(function(){
		// console.log($(this).hasClass('rr_color'));
		
		if($(this).hasClass('rr_color')){
			$(this).find('a').css('color','#ffffff')
			
		}else{
			$(this).find('a').css('color','#ff7385')
		}
	},function(){
			$('.news li').find('a').css('color','#666464')
			$('.rr_color').find('a').css('color','#ffffff')
		
	})
