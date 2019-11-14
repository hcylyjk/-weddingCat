
$(function(){
	
	$(document).on('click','.online .send',function(){//点击发送按钮
		getNews()
	})

	$(document).keyup(function(e){//按下回车发送消息
		if($('.online_inner .input').val().length==0){
			return false
		}else if(e.which==13&&$('.online_inner .input').val().length>0){
			getNews()
		}
	})

	
function getNews(){//ajax获取远程信息
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
	

	$(document).on('click','.online_top .icon-sort_desc-copy',function(){//显示隐藏
		if($('.online').css('top')=='250px'){//隐藏
			$('.online_bottom').toggle( );
			$('.online').css('top','600px')
		}else{
			$('.online_bottom').toggle( );//显示
			$('.online').css('top','250px')
		}
	})



	
var getdata=function(){
	// 请求数据图片和信息
			$.ajax({
				url: '../json/online.json',
				type: 'get',
				dataType: 'json',
				cache: 'false',
				success: function (data) {
					// console.log(data.length);
					var num=Math.floor(Math.random()*data.length)
					console.log(data[num].b);
					var onews=data[num].a
					var oimgs=data[num].b
					addnews(onews,oimgs)
				}
			})
				
}
getdata()//请求数据图片和信息
	var taggle_num=0
	function addnews(onews,oimgs){//随机添加图片和信息
		taggle_num++
		console.log('我又执行随机添加了')
		if(taggle_num<2){//只在页面第一次加载才进去
			var timeone=setTimeout(function(){
				$('.online_inner .show').css({
					'background-image':oimgs
				})
				var oLil=$('<li class="left">'+onews+'</li>')
				$('.online_inner .show ul').append(oLil)
				$('.online_bottom').toggle( );
				$('.online').css('top','600px')
				clearTimeout(timeone)
			},100)
		}else{//第二次执行该函数进去
			var oLil=$('<li class="left">'+onews+'</li>')
		$('.online_inner .show ul').append(oLil)
		$('.online_inner .show').css({
			'background-image':oimgs
		})
		}	
	}
	

	var time_show=setTimeout(function(){//设定时间自己显示
	$('.online_bottom').toggle( );
	$('.online').css('top','250px')
	clearTimeout(time_show)
	},2000)

	var arr_text=['你干嘛清空人家，好讨厌','叫你不要清了，你还清','能听话不','你好无聊','我不理你了']
	var conts=-1;
	$(document).on('click','.online .clear',function(){//清空数据
		$('.online .show ul').html('')
		$('.online_inner .input').val('')
		conts++;
		if(conts>=4){
			conts=4;
		}
		var oLir=$('<li class="left">'+arr_text[conts]+'</li>')
		$('.online_inner .show ul').append(oLir)
		getdata()
	})
})



		
	