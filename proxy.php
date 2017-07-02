<?php

$ifixit_api_endpoint = 'https://www.ifixit.com/api/2.0';

$user_request = $_SERVER['REQUEST_URI'];

$url_parts = explode('proxy.php', $user_request);

$url = $ifixit_api_endpoint . $url_parts[1];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 1);
$curl_scraped_page = curl_exec($ch);
curl_close($ch);

echo $curl_scraped_page;

