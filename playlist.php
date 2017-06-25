<?php

function get_file_names ($dir) {
	$arr = [];
	foreach (glob($dir . '/*') as $file) {
		if (is_dir($file)) {
			$arr[dealWithHebOnWindows($file)] = get_file_names($file);
		} else {
			array_push($arr, dealWithHebOnWindows(basename($file)));
		}
	}
	return $arr;
}

function dealWithHebOnWindows($str) {
	return preg_replace_callback("/([\xE0-\xFA])/", function ($matches) {
		chr(215).chr(ord($matches[0])-80);
	}, $str);
}

$filenames = get_file_names('data');
header("Content-type:application/json; charset=utf-8");
echo json_encode($filenames, JSON_UNESCAPED_UNICODE);