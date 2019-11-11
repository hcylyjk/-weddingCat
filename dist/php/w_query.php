<?php
	$hp=$_GET['hp'];
	$hm=$_GET['hm'];
	$hd=$_GET['hd'];
    header('Content-type:text/json');
    echo '{"hp":"'.$hp.'","hm":"'.$hm.'","hd":"'.$hd.'","hn":"佳宁娜（福田店）"}'
?>