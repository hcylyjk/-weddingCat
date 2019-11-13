
$(function(){
	$('.online .online_inner .send').on('click',function(){//点击发送按钮
		getNews()
	})


	$(document).keyup(function(e){//按下回车发送消息
		if($('.online_inner .input').val().length==0){
			return false
		}else if(e.which==13&&$('.online_inner .input').val().length>0){
			getNews()
		}
	})

	
function getNews(){//ajax获取信息
	if($('.online_inner .input').val().length==0){
		return
	}else{
		var oLir=$('<li class="right">'+$('.online_inner .input').val()+'</li>')
		$('.online_inner .show ul').append(oLir)
		$('.online_inner .show')[0].scrollTop=10000;
		$.ajax({
			url: 'https://api.ownthink.com/bot',
			type: 'get',
			data: 'spoken='+$('.online_inner .input').val()+'&appid=xm&userid=cui',
			success: function (data) {
				var oLil=$('<li class="left">'+data.data.info.text+'</li>')
				$('.online_inner .show ul').append(oLil)
				$('.online_inner .show')[0].scrollTop=10000;
			},
			failed: function (status) {
				alert('请求失败');
			}
		});
		$('.online_inner .input').val('')
	}
}
	
	
	$('.online_top .icon-sort_desc-copy').click(function(){//显示隐藏
		if($('.online').css('top')=='250px'){//隐藏
			$('.online_bottom').toggle( );
			$('.online').css('top','600px')
		}else{
			$('.online_bottom').toggle( );//显示
			$('.online').css('top','250px')
		}
	})



	$('.online_bottom').css('display','none')
	$('.online').css('top','600px')
	setTimeout(function(){//设定时间自己显示
	$('.online_bottom').css('display','block')
	$('.online').css('top','250px')
	},5000)

	
		
})




		
	