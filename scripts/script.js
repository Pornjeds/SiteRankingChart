var ar_server2 = [
"http://seocheki1.gob.jp/",
"http://seocheki2.gob.jp/",
"http://seocheki3.gob.jp/",
"http://seocheki5.gob.jp/",
"http://seocheki6.gob.jp/",
"http://seocheki7.gob.jp/",
"http://seocheki9.gob.jp/",
"http://seocheki10.gob.jp/",
"http://seocheki12.gob.jp/",
"http://seocheki13.gob.jp/",
"http://seocheki14.gob.jp/",
"http://seocheki15.gob.jp/",
"http://seocheki16.gob.jp/",
"http://seocheki17.gob.jp/",
"http://seocheki18.gob.jp/",
"http://seocheki19.gob.jp/",
"http://seocheki20.gob.jp/"
];

//var url = $("#url0").val();

var url = 'http://www.japan-tour.jp';
var sv_cnt = ar_server2.length;
var eurl = encodeURIComponent(url);

var sv_alexa = ar_server2[Math.floor(Math.random()*sv_cnt)];
$.ajax({
	dataType: "jsonp",
	url: sv_alexa + "get-pralexa.php?m=alexa&url=" + eurl,
	success: function(data) { $("#today_rank").html('<a href="http://www.alexa.com/siteinfo/' + url + '" target="_blank">' + data.val + '</a>'); }
});