$('.tab_nav .nav li').click(function(){
	var index=$(this).index()
	console.log(index)
	show_l(index)
	showTab(index)
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
		$(this).parent().prev().find('span').css('background','transparent')
		$(this).parent().prev().find('a').css('color','#666464')
		console.log($(this).parent().prev().find('span').html())
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

	$('.left_nav span').click(function(){
		$(this).parent().next().children().removeClass('rr_color')
		$(this).parent().next().children().find('a').css('color','#666464')
		$(this).css('background','#ff7385')
		$(this).find('a').css('color','#ffffff')
	})

	// 初始化选项卡1
	$('.left_nav span').eq(2).css('background','#ff7385')
	$('.left_nav span').eq(2).find('a').css('color','#ffffff')
function start(){
		for(var i=1;i<5;i++){
			$('.new').eq(i).find('span').css('background','#ff7385')
			$('.new').eq(i).find('span').find('a').css('color','#ffffff')
		}
}
start()


	// 选项卡切换

	function showTab(index){
		$('.new').css('display','none');
		$('.new').eq(index).css('display','block');
	}
	showTab(0)


	// 图片划过变长框
	$('.imgs').hover(function(){
		
		$(this).find('.bottom_text').css('height','120')
	},function(){
		$('.bottom_text').css('height','80')
	})


	//分页
	
	function page(index){
		$('.pag span').eq(index).css('background','#4d4b4b')
		$('.pag span').eq(index).find('a').css('color','#ffffff')
	}
	page(0)


	//图片展示选项卡
	$('.r_item li').click(function(){
		var index=$(this).index()
		tap_img(index)
	})

// tab套餐商家作品切换
function tap_img(index){
	$('.r_item li').find('a').css('color','#808080')
	$('.r_item li').css('border','1px solid #808080')
	$('.r_item li').eq(index).find('a').css('color','#ff7385')
	$('.r_item li').eq(index).css('border','1px solid #ff7385')
	$('.img_show_list').eq(index).removeClass('tabShow')
	$('.img_show_list').eq(index).siblings().addClass('tabShow')
	if(index==2){
		index=0;
		$('.img_show_list').eq(index).removeClass('tabShow')
		$('.img_show_list').eq(index).siblings().addClass('tabShow')
	}
}
tap_img(0)



$('.r_right_text span').click(function(){
	var index=$(this).index()
	tap_price(index)
})
function tap_price(index){
	$('.r_right_text span').find('a').css('color','#808080')
	$('.r_right_text span').eq(index).find('a').css('color','#ff7385')
}
tap_price(0)


