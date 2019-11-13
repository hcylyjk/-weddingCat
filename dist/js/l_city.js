// 个人中心
var l_btn = document.querySelector('.l_header-btn');
var l_wrap = document.querySelector('.l_customer-center-wrap');
l_btn.onmouseover = function() {
    l_wrap.style.display = 'block';
}
l_btn.onmouseout = function() {
    l_wrap.style.display = 'none';
}

// 点击城市进去首页
var cityChoose = document.querySelectorAll('.city--choose-item');
var hotCity = document.querySelectorAll('.hot--city-link');

for(var i = 0,len=cityChoose.length;i<len;i++){
    cityChoose[i].index = i;
    cityChoose[i].onclick = function(ev){
        var e = ev || window.event;
        // console.log(this.text);
        setCookie('city',this.text,7);
    }
}

for(var i = 0,len=hotCity.length;i<len;i++){
    hotCity[i].index = i;
    hotCity[i].onclick = function(ev){
        var e = ev || window.event;
        // console.log(this.text);
        setCookie('city',this.text,7);
    }
}

// 设置cookie
function setCookie(key,val,day) {
    if(val == '进入深圳站'){
        val = '深圳';
        if (day) {
            var d = new Date();
            d.setDate(d.getDate() + day);
            // escape  编码
            document.cookie = key + '=' + escape(val) + '; expires=' + d;
        } else {
            document.cookie = key + '=' + escape(val);
        }
    }else{
        if (day) {
            var d = new Date();
            d.setDate(d.getDate() + day);
            // escape  编码
            document.cookie = key + '=' + escape(val) + '; expires=' + d;
        } else {
            document.cookie = key + '=' + escape(val);
        }
    }
}

// 获取cookie
function getCookie(key) {
    var arr1 = document.cookie.split('; ');
    for (var i = 0; i < arr1.length; i++){
        var arr2 = arr1[i].split('=');
        if (arr2[0] == key) {
            // unescape  解码
            return unescape(arr2[1]);
        }
    }
    return '';
}
console.log(getCookie('city'));

// 删除cookie
function removeCookie(key) {
    setCookie(key,'123',-2);//设置为过期
}
