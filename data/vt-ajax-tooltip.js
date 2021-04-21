var offsetxpoint = -60; //Customize x offset of tooltip
var offsetypoint = 20; //Customize y offset of tooltip
var ie = document.all;
var ns6 = document.getElementById && !document.all;
var enabletip = false;
var tipobj;

function ietruebody()
{
	return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
}

function trim(str) {
	str = str.replace(/^\s+/, '');
	for (var i = str.length - 1; i >= 0; i--) {
		if (/\S/.test(str.charAt(i))) {
			str = str.substring(0, i + 1);
			break;
		}
	}
	return str;
}

function stripHTML(oldString) {
   var newString = "";
   var inTag = false;
   for(var i = 0; i < oldString.length; i++) {   
        if(oldString.charAt(i) == '<') inTag = true;
        if(oldString.charAt(i) == '>') {
			if(oldString.charAt(i+1)=="<") {
				//dont do anything
			} else {
				inTag = false;
				i++;
			}
        }   
        if(!inTag) newString += oldString.charAt(i);
   }
   return newString;
}


function hoangsonhai(id) {
	alert('helllo');
}


function vt_HideToolTip(id) {	
	//$("div#tt"+id+"").css("display","none");
	//$("div#tt"+id+"").hide();
	current_visible = false;
	$("div.vt_div_class").hide();
	if($ul_RelationNews.find("div#tt"+id+"").length > 1) {
		$ul_RelationNews.find("div#tt"+id+"").filter(":eq(1)").remove();
	}
	if($ul_MostReadNews.find("div#tt"+id+"").length > 1) {
		$ul_MostReadNews.find("div#tt"+id+"").filter(":eq(1)").remove();
	}	
	if($ul_LatesNews.find("div#tt"+id+"").length > 1) {
		$ul_LatesNews.find("div#tt"+id+"").filter(":eq(1)").remove();
	}
	/*
	setTimeout(function(){
		//alert("ABC");
		$("div#tt"+id+"").hide();
	}, 1000);
	*/
	//alert(current_idtooltip);
}

function vt_ShowTooltip(id) {
	alert("SHOW");
	$("div#tt"+id+"").show();	
}

function vt_ShowTooltip(id, externalFile) {
/*
	if((document.readyState == "complete") || (!ie))
	{
		if(!document.getElementById('vnittTooltip'))
		{
			try {		
				// Create tooltip content div
				tipobj = document.createElement('div'); 
				tipobj.className = 'vnittTooltip';
				tipobj.id = 'vnittTooltip';		
				tipobj.style.display = 'block';
				tipobj.style.position = 'absolute';
				document.body.appendChild(tipobj);
			} catch(e) {
				return;
			}
		}
		$.ajaxSettings.cache = false;
		$.get(externalFile, function(data){								
			// process(data);	
			tipobj.style.visibility = "hidden";
			if(trim(stripHTML(data))!='') {
				tipobj.style.visibility = "visible";
				document.getElementById("vnittTooltip").innerHTML = data;
				//tipobj.style.top = 20px;
				//tipobj.style.left = 20px;
			  }
			}, "html");
		//ajax_loadContent('vnittTooltip',externalFile);		
		enabletip = true;
	}
*/
	if($("div#tt"+id+"").length == 0) {
		$.get(externalFile, function(data){
			if(trim(stripHTML(data))!='') {
				$("li#"+id+"").append(data);
			}
		}, "html");
	} else {
		//$("div#tt"+id+"").css("display","block");
		$("div#tt"+id+"").show();
	}
	return false;
}
var $ul_RelationNews;
var $ul_RelationNews_li;
var $ul_MostReadNews;
var $ul_MostReadNews_li;
var $ul_LatesNews;
var $ul_LatesNews_li;
var current_idtooltip;
var current_visible = true;

$(document).ready(function(){
	$ul_RelationNews = $("ul#ul_RelationNews");
	$ul_RelationNews_li = $ul_RelationNews.find("li");
	$ul_MostReadNews = $("ul#ul_MostReadNews");
	$ul_MostReadNews_li = $ul_MostReadNews.find("li");
	$ul_LatesNews = $("ul#ul_LatesNews");
	$ul_LatesNews_li = $ul_LatesNews.find("li");
});

function vt_ShowTooltip(id, externalFile, type) {
	current_idtooltip = id;
	current_visible = true;
	if(type == 1) {
		if($ul_RelationNews.find("div#tt"+id+"").length == 0) {
			$.get(externalFile, function(data){
				if(trim(stripHTML(data))!='') {					
					$ul_RelationNews_li.filter("#"+id+"").append(data);
					if(id == current_idtooltip && current_visible == true) {
						$ul_RelationNews_li.find("div#tt"+id+"").show();
					}
				}
			}, "html");
		} else {
			$ul_RelationNews.find("div#tt"+id+"").show();
		}
	}
	if(type == 2) {
		if($ul_MostReadNews.find("div#tt"+id+"").length == 0) {
			$.get(externalFile, function(data){
				if(trim(stripHTML(data))!='') {
					$ul_MostReadNews_li.filter("#"+id+"").append(data);
					if(id == current_idtooltip && current_visible == true) {
						$ul_MostReadNews_li.find("div#tt"+id+"").show();
					}
				}
			}, "html");
		} else {
			$ul_MostReadNews.find("div#tt"+id+"").show();
		}
	}
	if(type == 3) {
		if($ul_LatesNews.find("div#tt"+id+"").length == 0) {
			$.get(externalFile, function(data){
				if(trim(stripHTML(data))!='') {
					$ul_LatesNews_li.filter("#"+id+"").append(data);
					if(id == current_idtooltip && current_visible == true) {
						$ul_LatesNews.find("div#tt"+id+"").show();
					}
				}
			}, "html");
		} else {
			$ul_LatesNews.find("div#tt"+id+"").show();
		}
	}
	return false;
}


// Hide Tooltip
/*
function vnitt_HideTooltip(id) {
	if ((ns6||ie) && (tipobj)) {
		enabletip = false;		
		tipobj.style.visibility = "hidden";
		tipobj.style.left = "-1000px";
		tipobj.style.backgroundColor = '';
		tipobj.style.width = '';
	}
}
*/



// Positioning Tooltip
/*
function vnitt_PositionTooltip(e)
{
	if (enabletip)
	{
		var curX = (ns6) ? e.pageX : event.clientX+ietruebody().scrollLeft;
		var curY = (ns6) ? e.pageY : event.clientY+ietruebody().scrollTop;		
		//Find out how close the mouse is to the corner of the window
		var rightedge  = ie&&!window.opera ? ietruebody().clientWidth-event.clientX-offsetxpoint : window.innerWidth-e.clientX-offsetxpoint-20;
		var bottomedge = ie&&!window.opera ? ietruebody().clientHeight-event.clientY-offsetypoint : window.innerHeight-e.clientY-offsetypoint-20;
		var leftedge = (offsetxpoint<0) ? offsetxpoint*(-1) : -1000;
		//if the horizontal distance isn't enough to accomodate the width of the context menu
		if (rightedge < tipobj.offsetWidth) {
			//move the horizontal position of the menu to the left by it's width
			tipobj.style.left = ie ? ietruebody().scrollLeft + event.clientX-tipobj.offsetWidth + "px" : window.pageXOffset + e.clientX - tipobj.offsetWidth + "px";
		} else if (curX < leftedge) {
			tipobj.style.left = "5px";
		}
		else {
			//position the horizontal position of the menu where the mouse is positioned
			tipobj.style.left = curX + offsetxpoint + "px";
		}
		//same concept with the vertical position
		if (bottomedge < tipobj.offsetHeight) {
			tipobj.style.top = ie ? ietruebody().scrollTop + event.clientY-tipobj.offsetHeight - offsetypoint + "px" : window.pageYOffset + e.clientY - tipobj.offsetHeight - offsetypoint + "px";
		} else {
			tipobj.style.top = curY + offsetypoint + "px";
		}
		//tipobj.style.visibility = "visible";
	}
}
*/

//document.onmousemove = vnitt_PositionTooltip;