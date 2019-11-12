<?php
/*
****************************************************

	method: get

	   url: w_ask.php

	  参数: qId = 问题的ID
		
	return:	{err: 0/1, msg: 文字描述信息}
			 err:
				  0	 成功——具体参考msg
				  1	 失败——具体参考msg

****************************************************
*/
$qId = $_GET['qId'];
$qId = 'question' .$qId;
// $qId = 'question1234';
// 设置响应头，防止乱码
// die($qId);
header("Content-type:text/html;charset=utf8");

error_reporting(0);//关闭错误报告

$link = mysqli_connect('','root','');//连接数据库

mysqli_set_charset( $link, "utf8" );//设置编码

if (mysqli_connect_error($link)){//连接数据库失败
    die("连接失败：".mysqli_connect_error());
}

mysqli_query($link, 'CREATE DATABASE questionList');//创建数据库

mysqli_query($link, 'use questionList');//选择数据库

// sql语句，创建user表，添加字段
$sql= <<< END
CREATE TABLE `$qId` (
`ID` INT NOT NULL PRIMARY KEY ,
`username` VARCHAR( 30 ) NOT NULL ,
`userid` VARCHAR( 30 ) NOT NULL,
`answer` VARCHAR( 500 ) NOT NULL,
`time` VARCHAR( 30 ) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_general_ci
END;


mysqli_query($link, $sql);//执行sql语句，创建表并添加字段
// die($sql);

$sql = "select * from {$qId}";
// die($sql);
$res = mysqli_query($link,$sql);
		
$row = [];
while($arr = mysqli_fetch_assoc($res)){
    $rows[] = $arr;
}
$arrLen = count($rows);
if($arrLen > 0){//有数据
    echo json_encode($rows,JSON_UNESCAPED_UNICODE);//把数组转成json字符串，返回
} else {// 没有数据
    echo '你查询的数据没有!';
}
?>