function getParameter(url) {
	var theRequest = {};
	if (url.indexOf("?") != -1) {   
		var str = url.substr( url.indexOf("?")+1 );   
		strs = str.split("&");   
		for(var i = 0; i < strs.length; i ++) {   
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
		}   
	}
	return theRequest;
}
var oHeight = document.documentElement.clientHeight;
// console.log(oHeight);
$('.right_nav_icon').click(function() {
	$('.nav_wrapper').css({'left': '0px'});
})
$('.close').click(function() {
	$(this).parent('.nav_wrapper').css({'left': '750px'});
})
$('.nav_wrapper').css({'min-height': oHeight + 'px','max-height': oHeight + 'px'});
$('.parent').click(function() {
	$(this).next('.children').fadeToggle();
	$(this).children('.iconfont').toggleClass('drop');
})
window.onload = function() {
	// $.ajax({ //bannerajax数据获取
	// 	url: 'http://183.230.198.142:8090/zzstzCms/document/findDocumentByCategroy?categroyId=7&pageSize=5',
	// 	method: 'get',
	// 	async: false,
	// 	success: function(bannerData) {
	// 		var bannerStr = '';
	// 		bannerData = JSON.parse(bannerData);
	// 		var bannerHdStr = '';
	// 		 //console.log(bannerData);
	// 		for(let i=0,len=bannerData.rows.length; i<len; i++) {
	// 			bannerHdStr += ` 
	// 				<li></li>
	// 			`;
	// 			bannerStr += `
	// 				<li><a href="./news.html?id=${bannerData.rows[i].id}"><img src="http://183.230.198.142:8090/zzstzCms/${bannerData.rows[i].headerimage}" alt=""></a></li>
	// 			`;
	// 		}
	// 		$('#index_banner .bd').html(bannerStr);
	// 		$('#index_banner .hd').html(bannerHdStr);	
	// 	}
	// });
}