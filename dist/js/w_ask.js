
window.onload = function(){
    var qId = $('.question_header').attr('questionId')
    getAnswerList(qId);
}
// 选项卡
$('.recmd_title_item').mouseenter(function(){
    $('.recmd_title_item').removeClass('active');
    $(this).addClass('active');
    $('.recmd_info_item').removeClass('active');
    $('.recmd_info_item').eq($(this).index()).addClass('active');
})
// 加载问题描述标题
$.ajax({
    url: '../json/w_ask.json',
    type: 'get',
    dataType: 'json',
    success: function myCallback(data) {
        $('title').text(data.title);
        $('q_title').text(data.title);
        $('.question_header').attr('questionId',data.questionId);
        $('.question_header_content .title').text(data.title);
        $('.detailed_box .detailed').text(data.detailed);
        $('.content_info_right .questioner').text('提问者: '+data.questioner);
        $('.content_info_right .time').text('发布时间: '+data.time);
    },
    error: function (err) {
        alert('请求失败');
        console.log(err.status);
    },
});
// 获取回答列表
function getAnswerList(qId){
    $.ajax({
        url: '../php/w_ask.php',
        type: 'get',
        data: 'qId='+qId,
        dataType: 'json',
        cache: false,//不使用缓存
        success: function myCallback(json) {
            var answerList = ''
            for(var i = 0,len = json.length;i<len;i++){
                var pList = json[i].answer.split('$$')
                var answerInfo = `
                <div class="answer_info">
                <span class="answer_username">回答者：${json[i].username}</span>
                <span class="answer_time">发布于：${json[i].time}</span>
                </div>
                </li>
                `;
                var htmlList = '<li class="answer_item">'
                pList.forEach(function(value,index,arr){
                    htmlList +='<p>'+value+'</p>'
                });
                htmlList +=answerInfo;
                answerList +=htmlList;
            }
            console.log(json.length);
            $('.answer_count').text(json.length);
            $('.answer_list').html(answerList);
        },
        error: function (err) {
            alert('请求失败');
            console.log(err.status);            
        },
    });
}