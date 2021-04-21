//alert("display.js");

// JavaScript Document
var flagVNITT = true;
var mondayimg="images/flashimages/1.jpg";
var tuesdayimg="images/flashimages/2.jpg"; 
var wednesdayimg="images/flashimages/3.jpg"; 
var thursdayimg="images/flashimages/4.jpg"; 
var fridayimg="images/flashimages/5.jpg"; 
var saturdayimg="images/flashimages/6.jpg"; 
var sundayimg="images/flashimages/7.jpg"; 
var index = 0;

function MM_findObj(n, d) { //v4.01

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {

    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}

  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];

  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);

  if(!x && d.getElementById) x=d.getElementById(n); return x;

}

function loadImagesTopLeft()
{
	var mydate=new Date(); 
	var today=mydate.getDay();
	var obj = MM_findObj("hinhtopleft");
	if (obj!=null){
		if (today==1) obj.innerHTML = '<img src="'+mondayimg+'">';
		else if (today==2) obj.innerHTML = '<img src="'+tuesdayimg+'">';
		else if (today==3) obj.innerHTML = '<img src="'+wednesdayimg+'">';
		else if (today==4) obj.innerHTML = '<img src="'+thursdayimg+'">';
		else if (today==5) obj.innerHTML = '<img src="'+fridayimg+'">';
		else if (today==6) obj.innerHTML = '<img src="'+saturdayimg+'">';
		else obj.innerHTML = '<img src="'+sundayimg+'">';
	}
}

var start_left=1;

var start_right=1;

var start_center=1;

function showDateViet() {
	// variables declaration
	var dt = new Date(shownDate + 7*3600*1000);	
	var strMonth = new Array("1","2","3","4","5","6","7","8","9","10","11","12");
	var strDay = new Array("Ch&#7911; Nh&#7853;t","Th&#7913; Hai","Th&#7913; Ba","Th&#7913; T&#432;","Th&#7913; N&#259;m","Th&#7913; S&aacute;u","Th&#7913; B&#7843;y");
	var date=strDay[dt.getDay()] + ", ";
	var years= dt.getYear();
	if (years<1900) years+= 1900;
	date +=" " + dt.getDate() + "-" + strMonth[dt.getMonth()] + "-" + years;
	document.write (date);	
}

function showDateENG() {
	var dt = new Date(shownDate + 7*3600*1000);
	var strMonth = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
	var strDay = new Array("Sun","Mon","Tue","Wed","Thur","Fri","Sat");
	var date=strDay[dt.getDay()] + ", ";
	var years= dt.getYear();
	if (years<1900) years+= 1900;
	date +=" " + dt.getDate() + "-" + strMonth[dt.getMonth()] + "-"+years;
	document.write (date);	
}

function showDateVietG7() {
	// variables declaration
	var dt = new Date(shownDate + 7*3600*1000);	
	var strMonth = new Array("1","2","3","4","5","6","7","8","9","10","11","12");
	var strDay = new Array("Ch&#7911; Nh&#7853;t","Th&#7913; Hai","Th&#7913; Ba","Th&#7913; T&#432;","Th&#7913; N&#259;m","Th&#7913; S&aacute;u","Th&#7913; B&#7843;y");
	var giophut=dt.getHours()+":"+dt.getMinutes();	
	var date=giophut+" ,"+strDay[dt.getDay()] + ", ";
	var years= dt.getYear();
	if (years<1900) years+= 1900;
	date +=" " + dt.getDate() + "/" + strMonth[dt.getMonth()] + "/" + years;
	document.write (date);	
}

function showLeftAds()
{						
	if (leftAds.length>=leftCount[start_left-1]*1)	{
		//document.write('<table cellspacing=0 cellpadding=0 border=0 align=center width=100%>');	
		//var endcount=leftCount[start];	
		for(count= leftCount[start_left-1]*1; count< leftCount[start_left]*1; count++) {
			document.write('<div><a href="http://',leftAds[count][3],'" target="_blank"><img width="100%" src="', leftAds[count][0], '" onclick=ajaxClickAds(\"',leftAds[count][2],'\"); border=0 style="border:1px solid #0066CC;margin-bottom:5"></a></div>')
			/*
				document.write('<tr><td><a href="http://',leftAds[count][3],'" target="_blank"><img width="100%" src="', leftAds[count][0], '" onclick=ajaxClickAds(\"',leftAds[count][2],'\"); border=0 style="border:1px solid #0066CC;margin-bottom:5"></a></td></tr>');
				//document.write('<tr><td><a href="?cmd=160&ads=',leftAds[count][2],'&url=',leftAds[count][1],'&hit=',leftAds[count][3],'" target="_blank"><img width="100%" src="', leftAds[count][0], '" border=0 style="border:1px solid #0066CC;margin-bottom:5"></a></td></tr>');
			*/
		}
		//document.write('</table>');
		start_left++;
	}
}

function showRightAds()
{
	if (rightAds.length>=rightCount[start_right-1]*1)	{
		//document.write('<table cellspacing=0 cellpadding=0 align=center width=100%>');	
		//var endcount=startcount + rightCount[start];		
		for(count= rightCount[start_right-1]*1; count< rightCount[start_right]*1; count++) {
			document.write('<div><a href="http://',rightAds[count][1],'" target="_blank"><img width="100%" src="', rightAds[count][0], '" onclick=ajaxClickAds(\"',rightAds[count][2],'\"); border=0 style="border:1px solid #0066CC;margin-bottom:5"></a></div>')
			/*
				document.write('<tr><td><a href="http://',rightAds[count][1],'" target="_blank"><img width="100%" src="', rightAds[count][0], '" onclick=ajaxClickAds(\"',rightAds[count][2],'\"); border=0 style="border:1px solid #0066CC;margin-bottom:5"></a></td></tr>');
				//document.write('<tr><td><a href="?cmd=160&ads=',rightAds[count][2],'&url=',rightAds[count][1],'&hit=',rightAds[count][3],'" target="_blank"><img width="100%" src="', rightAds[count][0], '" border=0 style="border:1px solid #0066CC;margin-bottom:5"></a></td></tr>');
			*/
		}	
		//document.write('</table>');
		start_right++;	
	}
}

function showCenterAds()
{	
	if (centerAds.length>=centerCount[start_center-1]*1)	{				
		//document.write('<table cellspacing=0 cellpadding=0 border=0 align=center width=100%>');
		//document.write('<div>');
		for(count = centerCount[start_center-1]*1; count < centerCount[start_center]*1; count++) {
			document.write('<div><a href="http://',centerAds[count][1],'" target="_blank"><img width="100%" src="', centerAds[count][0], '" onclick=ajaxClickAds(\"',centerAds[count][2],'\"); border=0"></a></div>');
			/*
				document.write('<tr><td align="center"><a href="http://',centerAds[count][1],'" target="_blank"><img width="100%" src="', centerAds[count][0], '" onclick=ajaxClickAds(\"',centerAds[count][2],'\"); border=0"></a></td></tr>');
				//document.write('<tr><td align="center"><a href="?cmd=160&ads=',centerAds[count][2],'&url=',centerAds[count][1],'&hit=',centerAds[count][3],'" target="_blank"><img width="100%" src="', centerAds[count][0], '" border=0"></a></td></tr>');
			*/
		}
		//document.write('</div>');
		//document.write('</table>');
		start_center++;	
	}
}



// Add by SonHai - 08-11-2012 (12:11 PM)
function ajaxClickAds(adsId) {
	$.ajax(
			{
				// Dong bo hay khong - false : Dong bo  | true : Khong dong bo .Default : true
				async : false,
				// Xác định việc trình duyệt có nên cache trang được request hay không. 
				//Nhận vào giá trị true hoặc false. Mặc định là true.
				//cache : true,
				//Chỉ ra loại nội dùng mà được dùng để gửi tới server. Mặc định là application/x-www-form-urlencoded
				// ngoài ra có thể xác định 1 số loại khác như application/xml, application/js, application/json,text/xml...
				contentType: "application/x-www-form-urlencoded",
				url : "AdvertiseServlet",
				type : "post",
				//data : "userName=DKhiro&password=Dearking&type=ajax",
				data : { "ads" : adsId },
				dataType : "html",
			 	//error: function (objError, status, error) { },
			    //beforeSend: function () { },
				//success : function(data) { },
				//complete: function (objComplete,status) { },
			    // Thời gian tất request mili giây
			    timeout : 5000
			}
		);
}

function showCounter(){
	document.write("<span id='counter' class='counter'>" + counter + "</span>");
}

function showCounterDay() {
	document.write("<span id='counter_By_Day' class='counter'>" + counter_By_Day + "</span>");
}

function showUserOnline() {
	document.write("<span id='useronline' class='counter'>" + useronline + "</span>");
}

/***** SEARCH *******/
function search_google() {
	$("#q").val($("#textsearch").val());
	$("#frm_search_google").submit();
}

function search_3cms() {
	var strTextSearch = $("#textsearch").val();
	if(strTextSearch.length >= 3) {
		if($("#txt_search").length != 0) {
			$("#txt_search").val(strTextSearch);
		}
		$("#search_3cms").submit();
	}
}

function search_3cms_detail(){
	var obj = document.getElementById("txt_searchDetail");	
	var sPara = "";	
	
	if(obj && obj.value!=""){
		sPara = "&txt_search=" + obj.value;		
	}
	obj = document.getElementById("txt_search_title");
	if(obj && obj.value!=""){
		sPara = sPara + "&txt_search_title=" + obj.value;		
	}
	obj = document.getElementById("txt_search_summary");
	if(obj && obj.value!=""){
		sPara = sPara + "&txt_search_summary=" + obj.value;		
	}
	obj = document.getElementById("txt_search_content");
	if(obj && obj.value!=""){
		sPara = sPara + "&txt_search_content=" + obj.value;		
	}
	obj = document.getElementById("txt_search_starttime_form");
	if(obj && obj.value!=""){
		sPara = sPara + "&txt_search_starttime_form=" + obj.value;		
	}
	obj = document.getElementById("txt_search_starttime_to");
	if(obj && obj.value!=""){
		sPara = sPara + "&txt_search_starttime_to=" + obj.value;		
	}
	obj = document.getElementById("txt_search_endtime");
	if(obj && obj.value!=""){
		sPara = sPara + "&txt_search_endtime=" + obj.value;		
	}
	obj = document.getElementById("search_site");
	if(obj && obj.value!=""){
		sPara = sPara + "&search_site=" + obj.value;		
	}
	if(sPara!="") window.location = "/3cms?cmd=140"+sPara;
	
}

function switchSearch(){
	var obj = document.getElementById("rdo_search");
	try {
		if(obj.checked){
			search_3cms();
		}
		else {
			search_google();
		}		
	} catch(e) {
		search_3cms()
	}
	return false;
}

function switchSearch1(){
	var obj = document.getElementById("rdo_search1");
	if(obj.checked){
		search_3cms();	
	}
	else {
		search_google();
	}	
	return false;
}

function switchSearchIn(){	
	search_3cms();		
	return false;
}
/***** SEARCH *******/


function change_website_songanh(form) {
	var selected_item = form.select_songanh.selectedIndex;
	if(selected_item != 0)
	{
		form.action = form.select_songanh[selected_item].value;
		form.submit();
	}
}

function change_baodientu(form) {
	var selected_item = form.select_baodientu.selectedIndex;
	if(selected_item != 0)
	{
		form.action = form.select_baodientu[selected_item].value;
		form.submit();
	}
}

function check_binhchon(form, poll_id) {
	//alert(poll_id);
	//return false;
	var poll_option_id = 0;
	for(var i = 0; i < form.poll_option.length; i++)
	{
		if (form.poll_option[i].checked)
			poll_option_id = form.poll_option[i].value;
	}	
	window.open("Binh-chon-506.htm?poll_id=" + poll_id + "&poll_option_id=" +poll_option_id, "myWindow","toolbar=no,status = 0, height = 300, width = 550, resizable = 0");
	//window.open( "?cmd=150&windowState=1&poll_id=" + poll_id + "&poll_option_id=" +poll_option_id, "myWindow","toolbar=no,status = 0, height = 300, width = 550, resizable = 0");
}

/*
function check_binhchon(form, poll_id) {
	var poll_option_id = 0;
	for(var i = 0; i < form.poll_option.length; i++)
	{
		if (form.poll_option[i].checked) {
			poll_option_id = form.poll_option[i].value;
		}
	}
	window.open( "?cmd=150&poll_id=" + poll_id + "&poll_option_id=" +poll_option_id, "myWindow","toolbar=no,status = 0, height = 300, width = 550, resizable = 0" );
}
*/

function openFormMail(url,name) {
	var options = "width=550,height=600,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no";		
	new_window = window.open(url, name, options);		
	window.self.name = "main";
	new_window.focus();		
}

function openform(url,width,height,view) {	
	var options;		
	if(width==""){
		width = "500" ;
	}
	if(height==""){
		height = "300" ;
	}
	options = "width=" + width + ",height=" + height + ",";
	if(view==1){
		options = options + "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no";
	}	
	new_window = window.open(url,"openform", options);
	window.self.name = "main";
	new_window.focus();
}

function openWithSelfMain(url,name,width,height) {
	var options = "width=" + width + ",height=" + height + "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no";
	new_window = window.open(url, name, options);
	window.self.name = "main";
	new_window.focus();
}

/*
function vnitt_changeTheme2(defaultskin,str){
	var savecookie=str;
	var mydomain=window.location.hostname;				
	var pathname = window.location.pathname;					
	if(Get_Cookie("cookie_theme"+savecookie) == null && defaultskin=="1")
	{ 					
		
	}				
	else if(Get_Cookie("cookie_theme"+savecookie) != null && defaultskin=="1")
	{			
		str=Get_Cookie("cookie_theme"+savecookie);					
	}						
	if(Get_Cookie("cookie_theme"+savecookie)!=str){
		Delete_Cookie( "cookie_theme"+savecookie, "/3cms", "" );
	}			
	var themeName  = "css/"+str+".css";			
	Set_Cookie("cookie_theme"+savecookie,str,0,"/3cms",mydomain,"");			
	fileref = document.createElement("link");
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", themeName);
	document.getElementsByTagName("head").item(0).appendChild(fileref);
}
*/
	
function Open_URL(url, vWidth, vHeight) 
{

	winDef = 'status=no,resizable=yes,scrollbars=yes,toolbar=no,location=no,fullscreen=no,titlebar=no,copyhistory=no,directories=no,height='.concat(vHeight).concat(',').concat('width=').concat(vWidth).concat(',');
	winDef = winDef.concat('top=').concat((screen.height - vHeight)/2).concat(',');
	winDef = winDef.concat('left=').concat((screen.width - vWidth)/2);
	newwin = open(url, '_blank', winDef);
}

function Open_Popup(url, vWidth, vHeight) 
{
	winDef = 'status=no,resizable=no,scrollbars=yes,toolbar=no,location=no,fullscreen=no,titlebar=no,height='.concat(vHeight).concat(',').concat('width=').concat(vWidth).concat(',');
	winDef = winDef.concat('top=').concat((screen.height - vHeight)/2).concat(',');
	winDef = winDef.concat('left=').concat((screen.width - vWidth)/2);
	newwin = open(url, '_blank', winDef);
}

function hidenForm(idDiv)
{
	if(document.getElementById(idDiv).style.display=="none")
	{
		document.getElementById(idDiv).style.display="block";
	}
	else
	{
		document.getElementById(idDiv).style.display="none";
	}
}

// danh cho phan textbox search
function checkTextSearch(obj)
{
	if(obj.value == "" || obj.value=="Tìm kiếm...")
	{
		obj.value ="Tìm kiếm..."
	}
}

function submitenter(e)
{
	var rdo_search = document.getElementById("search_3cms");
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;
	
	if (keycode == 13)
	   {
		switchSearchIn();
	   //rdo_search.submit();
	   return false;
	   }
	else
	   return true;
}


function checkFocus(obj) {
	obj.value="";
}

function searchMartyr(){		
		if(document.getElementById("radiosearchmartyr1").checked){		
			frmsearch.submit();
		}
		if(document.getElementById("radiosearchmartyr2").checked)
		{
			frm_searchmartyr.name.value=radiosearchmartyr=document.getElementById("hotenls").value;		
			frm_searchmartyr.unit.value=radiosearchmartyr=document.getElementById("Donvils").value;
			frm_searchmartyr.birthplace.value=radiosearchmartyr=document.getElementById("quequanls").value;
			frm_searchmartyr.deathplace.value=radiosearchmartyr=document.getElementById("noimatls").value;	
			frm_searchmartyr.cemeteries.value=0;		
			frm_searchmartyr.submit();			
		}	
}



/*** Hoàng Sơn Hải (SHI) ***/
jQuery(document).ready(function() {

	/***** Login *******/
	$("#btnLoginPortal").click(function() {
		$("#dangnhap").submit()
	});

	
	/***** Tin Video *******/
	$('a[id="link_video_catalogue"]').click(function(){
		jQuery.cookie("urlVideo", $(this).attr("video"), { expires: 3, path: '/'});
		jQuery.cookie("urlImage", $(this).attr("images"), { expires: 3, path: '/'});
	});
	
	if(jQuery.cookie("urlVideo") != undefined) {
		setTimeout(function(){
			replayVideo_Non_Ajax($.cookie("urlVideo"), $.cookie("urlImage"));
			$.removeCookie('urlVideo', { path: '/' });
		}, 150);
	}
	
	/***** Mục tin Tabs *******/
	/*var $tab_a = $('.news-box-title-tab a');	
	$tab_a.eq(0).addClass("tab-hover");	
	$tab_a.click(function(){
		var boxId = $(this).attr('boxId');
		var catId = $(this).attr('catId');
		$('.boxAjax' + boxId).css('display', 'none');
		$('a[boxId="'+boxId+'"]').removeClass("tab-hover");
		$('#catAjax' + catId).css('display', '');				
		$('a[catid="'+catId+'"]').addClass("tab-hover");
	});*/
	var $tab_a = $('.news-box-title-tab a'); 
	$tab_a.eq(0).addClass("tab-hover");
	$tab_a.eq(4).addClass("tab-hover");
	$tab_a.click(function(){
		var boxId = $(this).attr('boxId');
		var catId = $(this).attr('catId');
		$('.boxAjax' + boxId).css('display', 'none');
		$('a[boxId="'+boxId+'"]').removeClass("tab-hover");
		$('#catAjax' + catId).css('display', '');    
		$('a[catid="'+catId+'"]').addClass("tab-hover");
	});
	
	/***** Giữa trạng thái menu *******/
	var indexStoreLink = $.cookie("indexStoreLink");
	var $StoreLink = $(".top_menu:first a").eq(indexStoreLink);
	$(".top_menu:first a").click(function() {
		var index = $(".top_menu:first a").index(this);
		$.cookie("indexStoreLink", index, { expires: 3, path: "/"});
	});
	//$StoreLink.remove();
	$StoreLink.addClass("top-menu-activate");
	//$StoreLink.parent("div").addClass("div123_hover");
	
	if(organizationid == "35001" && $('.catalogue-change-font').length != 0 && $('#tblPrint_Date61').length != 0) {
		$('span#spanHomeCat4167').append('<span class="change-font-size">Xem với cỡ chữ : <a href="javascript:zoominLetter();">A</a><a href="javascript:zoomoutLetter();">a</a></span>');
	}

});


function AjaxLink(urlLink) {
	//alert(urlLink);
	//$("#boxCenter").html("<img style='position:relative;top:80px;left:395px' src='/3cms/image/loading.gif'>");	
	var $ObjAjaxLink = $("a[href=\"javascript:AjaxLink('"+urlLink+"')\"]");	
	if($ObjAjaxLink.parents("#tdLeftBox").length > 0) {
		$("#tdRightBox").remove();
	} else if($ObjAjaxLink.parents("#tdRightBox").length > 0) {
		$("#tdLeftBox").remove();
	}
	$("#tdLeftBox").remove();
	$("#boxCenter").html("<iframe id='iframeService' frameborder='0' src='"+urlLink+"' width='100%' height='1300px' scrolling='auto'></iframe>");
}



function replayVideo_Non_Ajax(urlVideo, urlImage) {
	
	if($("#myElementVideoVN").length != 0) {
		$('#myElementVideoVN').html('');
		if(urlVideo.indexOf("youtube.com") != -1) { // If link video from youtube
			urlVideo = urlVideo.substring(urlVideo.indexOf('/Flash/') + 7, urlVideo.length);
			$('#myElementVideoVN').html('<iframe width="450" class="iframe-content-video" height="315" src="//'+urlVideo+'" frameborder="0" allowfullscreen></iframe>');
			return;
		}
		jwplayer('myElementVideoVN').setup({
			file: urlVideo,
			image : urlImage,
			autostart : true
		});
	}
	
	if($("#myElementVideoEN").length != 0) {
		$('#myElementVideoEN').html('');
		if(urlVideo.indexOf("youtube.com") != -1) { // If link video from youtube
			urlVideo = urlVideo.substring(urlVideo.indexOf('/Flash/') + 7, urlVideo.length);
			$('#myElementVideoEN').html('<iframe width="450" class="iframe-content-video" height="315" src="//'+urlVideo+'" frameborder="0" allowfullscreen></iframe>');
			return;
		}
		jwplayer('myElementVideoEN').setup({
			file: urlVideo,
			image : urlImage,
			autostart : true
		});
	}
	
}



function replayVideo_Ajax(urlVideo, urlImage, artID) {

	if(jQuery("#myElementVideoVN").length != 0) {
		$('#myElementVideoVN').html('');
		if(urlVideo.indexOf("youtube.com") != -1) { // If link video from youtube
			urlVideo = urlVideo.substring(urlVideo.indexOf('/Flash/') + 7, urlVideo.length);
			$('#myElementVideoVN').html('<iframe class="iframe-content-video" width="450" height="315" src="//'+urlVideo+'" frameborder="0" allowfullscreen></iframe>');
		} else {
			jwplayer('myElementVideoVN').setup({
				file: urlVideo,
				image : urlImage,
				autostart : true
			});
		}
	}
	
	if(jQuery("#myElementVideoEN").length != 0) {		
		$('#myElementVideoEN').html('');
		if(urlVideo.indexOf("youtube.com") != -1) { // If link video from youtube		
			urlVideo = urlVideo.substring(urlVideo.indexOf('/Flash/') + 7, urlVideo.length);
			$('#myElementVideoEN').html('<iframe class="iframe-content-video" width="450" height="315" src="//'+urlVideo+'" frameborder="0" allowfullscreen></iframe>');
		} else {
			jwplayer('myElementVideoEN').setup({
				file: urlVideo,
				image : urlImage,
				autostart : true
			});
		}
	}
	
	
	var $mycarouselVideo_parent = jQuery('#mycarouselVideo_parent');
	$mycarouselVideo_parent.children("div").remove();
	$mycarouselVideo_parent.append('<ul id="mycarouselVideo" class="jcarousel-skin-tango list_video_lien_quan2"><ul>');
	var $mycarouselVideo = jQuery("#mycarouselVideo");
	$mycarouselVideo.html("<img style='position:relative;top:80px;left:395px' src='/3cms/image/loading.gif'>");	
	setTimeout(function() {
		jQuery.ajax(
			{
				async : true, cache : true, contentType: "application/x-www-form-urlencoded",
				url : "/3cms?cmd=600&windowState=1&artID=" + artID,
				type : "post",
				dataType : "html",
				success : function(data) {
					if(data.length != 0) {
						$mycarouselVideo.html(data);
						jQuery('#mycarouselVideo').jcarousel();	
					} else {
						$mycarouselVideo.html("");
					}
				}
				//timeout : 5000,				
			}
		);	
	}, 1000);
	
}




function cacheArticleVideo(urlVideo, urlImage) {
	$.cookie("urlVideo", urlVideo, { expires: 3, path: '/'});
	$.cookie("urlImage", urlImage, { expires: 3, path: '/'});
}


function vnitt_changeTheme(defaultskin, skinName) {

//	alert(skinName);
/*
	if(defaultskin == "1") {
		if($.cookie("cookie_theme") != undefined) { //undefined
			skinName = $.cookie("cookie_theme");
		}
	}
	$.cookie("cookie_theme", skinName, { expires: 3, path: '/'});
	switchStyleSheet(skinName);
*/
	//$("link[title=changeTheme]").remove();
	//alert(skinName);	
	if(defaultskin == 1) {
		var skinNameTEMP = skinName;
		if($.cookie("cookie_theme" + organizationid) != undefined) { //undefined
			skinName = $.cookie("cookie_theme" + organizationid);
		}
		if(skinNameTEMP == skinName) {
			$.cookie("cookie_theme" + organizationid, skinName, { expires: 3, path: '/'});
			return;
		}
	}

	//$.cookie("cookie_theme", skinName, { expires: 3, path: '/'});
	$.cookie("cookie_theme" + organizationid, skinName, { expires: 3, path: '/'});
	var themeName  = "css/"+skinName+".css?cssid=" + organizationid;
		
	fileref = document.createElement("link");
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", themeName);
	fileref.setAttribute("title", "changeTheme");
	document.getElementsByTagName("head").item(0).appendChild(fileref);
	
	//$.cookie('sonhai', 'sonhais');
	//alert($.cookie('sonhai'));
}

function switchStyleSheet(title) {
	var links = document.getElementsByTagName("link");	
	var lenLink = links.length;
	for(var i=0;i<lenLink;i++) {
		var rel = links[i].getAttribute("rel");
		var linkTitle = links[i].getAttribute("title");
		var pattern = /^stylesheet$/;
		if(pattern.test(rel) && linkTitle != null || linkTitle != "") {
			links[i].disabled = true;
			if(linkTitle == title) {;
				links[i].disabled = false;
			}
		}
	}
}


function getCookieValues(key) {
	return jQuery.cookie(key);
}

// ham js danh cho phan dang tin bo may to chuc trang HDND
function changecontent(value)
{
	$("#bio0").hide();
	$("#bio1").hide();
	$("#bio2").hide();
	$("#bio3").hide();
	$("#bio4").hide();
	$("#bio5").hide();
	$("#bio6").hide();
	var str="#bio"+value;
	$(str).show();
}


var min=8;
var max=18;

function zoominLetter() {
	//var p = document.getElementsByTagName("p");
	var strong = document.getElementsByClassName("article_summary_detail");
	var content = document.getElementsByClassName("article_content");
	/*for(i=0;i<p.length;i++) {
		if(p[i].style.fontSize) {
			var s = parseInt(p[i].style.fontSize.replace("px",""));
		} else {
			var s = 12;
		}
		if(s!=max) {
			s += 1;
		}
			p[i].style.fontSize = s+"px"
	}*/
	for(i=0;i<content.length;i++) {
	    if(content[i].style.fontSize) {
			var s = parseInt(content[i].style.fontSize.replace("px",""));
		} else {
			var s = 12;
		}
		if(s!=max) {
			s += 1;
		}
		content[i].style.fontSize = s+"px";
	}
	for(i=0;i<strong.length;i++) {
		if(strong[i].style.fontSize) {
			var s = parseInt(strong[i].style.fontSize.replace("px",""));
		} else {
			var s = 12;
		}
		if(s!=max) {
			s += 1;
		}
			strong[i].style.fontSize = s+"px";
	}
}

function zoomoutLetter() {
	//var p = document.getElementsByTagName("p");
	var strong = document.getElementsByClassName("article_summary_detail");
	var content = document.getElementsByClassName("article_content");
	/*for(i=0;i<p.length;i++) {
		if(p[i].style.fontSize) {
			   var s = parseInt(p[i].style.fontSize.replace("px",""));
		} else {
			var s = 12;
		}
		if(s!=min) {
			s -= 1;
		}
		p[i].style.fontSize = s+"px"
	}*/
	for(i=0;i<strong.length;i++) {
		if(strong[i].style.fontSize) {
			   var s = parseInt(strong[i].style.fontSize.replace("px",""));
		} else {
			var s = 12;
		}
		if(s!=min) {
			s -= 1;
		}
		strong[i].style.fontSize = s+"px";
	}
	for(i=0;i<content.length;i++) {
		if(content[i].style.fontSize) {
			   var s = parseInt(content[i].style.fontSize.replace("px",""));
		} else {
			var s = 12;
		}
		if(s!=min) {
			s -= 1;
		}
		content[i].style.fontSize = s+"px";
	}
}



jQuery(document).ready(function(){	
	if($('.text-to-speech').length != 0) {		
		var artId = $('a.article_print_mail_link').attr('href').split('art=')[1];	
		
		$('td.article_date').append('<td id="txTts"></td>');		
		$('<img src="./image/speaker.gif" border="0" id="imgSpeaker">' 
			+ '<a href="javascript:textToSpeech('+artId+')">Nghe &nbsp;&nbsp;</a></img>  &nbsp;&nbsp;&nbsp; ').insertBefore('.article_print_mail_link:first');
	}	
});

function textToSpeech(articleId) {
	
	// alert(articleId);
	$('#txTts').html("<img src='./image/loading.gif' border='0' id='imgSpeaker'>");
	var fullHostName = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
	
	// fullHostName = fullHostName.replace('http', 'https');
	// alert(fullHostName);
	
	jQuery.ajax(
		{
			async : true, cache : true, contentType: "application/x-www-form-urlencoded",
			url : "/3cms/text-to-speech.htm?articleId=" + articleId,
			type : "post",
			dataType : "html",
			success : function(data) {
				
				// alert(data);
				$('#txTts').html(data);
				document.getElementById('audioSpeaker').play();
			}
			
			//timeout : 5000,
		}
	);
	
}



/*
	<script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-40383166-1']);
	  _gaq.push(['_trackPageview']);
	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
	
	
	/******Location*****
	//alert(window.location.pathname); /3cms/demo-example1.htm
	//alert(window.location.href.toString().split(window.location.host)[1]); /3cms/demo-example1.htm
	//.host
	//.hostname
	//.protocol
	//.pathname
	
	
	$.getScript("scripts/tthc.js")
	.done(function(script, textStatus) {
		alert("Success");
	})
	.fail(function(jqxhr, settings, exception) {
		alert(jqxhr);
		alert(settings);
		alert(exception);
	});
	
*/
