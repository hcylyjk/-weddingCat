
$('.k_show').mouseenter(function(){//鼠标进去右边nav
	var index = $(this).index()
	// $('.k_top').eq(index).find('.iconfont').css('color','#FF7385')
	$('.k_pull').eq(index).css('display','block')
	$('.k_flg').eq(index).css('display','block');
	$('.k_top').eq(index).css('color','#ff7385')
	$('.k_show').css('border-right','none')//每次清空之前的
	for(var i=0;i<5;i++){
		if(index==i){
			continue
		}
		$('.k_show').eq(i).css('border-right','1px solid #000000')
	}


	$('.k_pull').mouseenter(function(){//鼠标进去弹出界面
		$('.k_pull').eq(index).css('display','block')
		
		
		$('.k_flg').css('display','none');
		$('.k_flg').eq(index).css('display','block');
		$('.k_show').css('border-right','none')//每次清空之前的
		for(var n=0;n<5;n++){
			if(index==n){
				continue
			}
			$('.k_show').eq(n).css('border-right','1px solid #000000')
		}
	
		for(var k=0;k<5;k++){
			$('.k_top').eq(k).css('color','#999999')
		}
		$('.k_top').eq(index).css('color','#ff7385')
	})


	$('.k_pull').mouseleave(function(){//鼠标离开弹出界面
		index=0;
		$('.k_pull').css('display','none')
		$('.k_top').css('color','#999999')
		$('.k_flg').css('display','none');
		$('.k_show').css('border-right','none')//每次清空之前的
	})

})



$('.k_show').mouseleave(function(){//鼠标离开右边nav
	$('.k_pull').css('display','none')
	$('.k_show').css('border-right','none')
	$('.k_top').css('color','#999999')
	$('.k_flg').css('display','none');
})




