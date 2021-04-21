$(document).ready(function(){
	if($("#div_news_update_article").length < 1) {
		$("#tab_news_kg").css("width", "100%");
	}
	if($("#txtHiArticleCatalogue").length > 0) {
		$(".img_big").remove();
	}
	
	// Event when key press enter in Input Search
	$("input#textsearch").keypress(function(e) {
        if(e.which == 13) {
			var str = $("#textsearch").val();	
			if(str.length >= 3){			
				$("#txt_search").val(str);		
				$("#search_3cms").submit();
			}
        }
    });
	//alert(myIP());
});



function myIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
    xmlhttp.send();
    hostipInfo = xmlhttp.responseText.split("\n");
    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }
    return false;
}