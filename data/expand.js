//Doan code Save va Get Cookie
var expDays = 1;
var exp = new Date(); 
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
var mydomain=window.location.hostname;	
var pathname = window.location.pathname;	

function getCookieVal (offset) {  
	var endstr = document.cookie.indexOf (";", offset);  
	if (endstr == -1) { endstr = document.cookie.length; }
	return unescape(document.cookie.substring(offset, endstr));
}

function Delete_Cookie( name, path, domain ) {	
	if ( Get_Cookie( name ) ) document.cookie = name + "=" +
	( ( path ) ? ";path=" + path : "") +
	( ( domain ) ? ";domain=" + domain : "" ) +
	";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

function Set_Cookie( name, value, expires, path, domain, secure ){
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );
	/*
	if the expires variable is set, make the correct
	expires time, the current script below will set
	it for x number of days, to make it for hours,
	delete * 24, for minutes, delete * 60 * 24
	*/
	if ( expires )
	{
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );	
	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
	( ( path ) ? ";path=" + path : "" ) +
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );		
	
}

function Get_Cookie( check_name ) {
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f
	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split( '=' );
		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
		// if the extracted name matches passed check_name
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found )
	{
		return null;
	}
}

function GetCookie (name) {  
	var arg = name + "=";  
	var alen = arg.length;  
	var clen = document.cookie.length;  
	var i = 0;  
	while (i < clen) {    
		var j = i + alen;    
		if (document.cookie.substring(i, j) == arg) return getCookieVal (j);    
		i = document.cookie.indexOf(" ", i) + 1;    
		if (i == 0) break;   
	}
	return null;
}

function SetCookie (name, value) {  
	var argv = SetCookie.arguments;  
	var argc = SetCookie.arguments.length;  
	var expires = (argc > 2) ? argv[2] : null; 
	var path = (argc > 3) ? argv[3] : null;  
	var domain = (argc > 4) ? argv[4] : null;  
	var secure = (argc > 5) ? argv[5] : false;  
	document.cookie = name + "=" + escape (value) + 
	((expires == null) ? "" : "; expires=" + expires) + 
	((path == null) ? "" : "; path=" + path) +  
	((domain == null) ? "" : "; domain=" + domain) +    
	((secure == true) ? "; secure" : "");		
}



//Ket thuc Doan code Save va Get Cookie
function CatExpandMenu(spanId, target, align, boxId) {	
	// Add by SonHai	
	var expandingMenuSpand = document.getElementById(spanId);
	if(expandingMenuSpand != null) {
		var spandDisplay = "none";
		if($("#"+spanId+"").css("display") == "none") {
			spandDisplay = "";
			$.cookie("catExpandId", spanId, { expires: 3, path: '/'});
		} else {
			$.removeCookie('catExpandId', { path: '/' });
		}
		$("#"+spanId+"").css("display", spandDisplay);
	}
		
	//SetCookie('catExpandId', "");
	//SetCookie('cat_ChildId', "");
	
	return false;
}




function CatExpandMenuOpen(spanId, target, align, boxId) {
	return false;
/*	
	// Add by SonHai
	var expandingMenuSpand = document.getElementById(spanId);
	if(expandingMenuSpand != null) {
		//var spandDisplay = "none";
		var spandDisplay = "block";
		if($("#"+spanId+"").css("display") == "none") {
			spandDisplay = "block";
		}				
		$("#"+spanId+"").css("display", spandDisplay);
	}
	return false;
*/
}

function BoxExpandMenu(spanId) {
	var $span256 = $('#'+spanId+'');
	var display = "block";	
	if($span256.css('display') == 'block') {
		display = "none";
		$.removeCookie('boxExpanding', { path: '/' });
	} else {
		$.cookie("boxExpanding", spanId, { expires: 3, path: '/'});
	}
	$span256.css('display', display);	
	
/*
	var box_ex_cookie = GetCookie('boxExpanding');	
	if(box_ex_cookie != null) {
		if(document.getElementById(box_ex_cookie) != null) {
			var expandingMenu = document.getElementById(box_ex_cookie);
			if(spanId == box_ex_cookie) {							
				if (expandingMenu.style.display == 'none') {
					expandingMenu.style.display = 'block';
				}
				else {
					expandingMenu.style.display = 'none';
				}
			}
			else {
				expandingMenu.style.display = 'none';
				if(document.getElementById(spanId) != null){
					document.getElementById(spanId).style.display = 'block';
				}
			}
		}
		else {
			if(document.getElementById(spanId) != null){
				document.getElementById(spanId).style.display = 'block';
			}
		}
	}
	else {
		if(document.getElementById(spanId) != null){
			document.getElementById(spanId).style.display = 'block';
		}
	}	
	/*SetCookie('boxExpanding',spanId);	*[SHI]/
*/

}

/*
	function CatLink(catId, target, align) {
		SetCookie('selectedCat',"cat" + catId);
		SetCookie('boxAlign', align);		
		SetCookie('expires',exp);
		SetCookie('path',pathname);
		SetCookie('domain',mydomain);	
		window.location = target;
	}
*/

function CatLink(catId, target, align) {
	SetCookie('selectedCat',"cat" + catId);
	SetCookie('boxAlign', align);		
	SetCookie('expires',exp);
	SetCookie('path',pathname);
	SetCookie('domain',mydomain);	
	window.location = target;
}

function CatLink(boxId, catId) {
	SetCookie('cat_ParentId', boxId);
	SetCookie('cat_ChildId', catId);
}


$(document).ready(function(){
	loadPageExpand();
});


function loadPageExpand() {
	
	if($.cookie("boxExpanding") != undefined) {
		$('#'+$.cookie("boxExpanding")+'').css('display', 'block');
	}
	
	if($.cookie("catExpandId") != undefined) {
		$('#'+$.cookie("catExpandId")+'').css('display', 'block');
	}

	var cat_ParentId = GetCookie("cat_ParentId");
	var cat_ChildId = GetCookie("cat_ChildId");

/*	
	if(cat_ParentId != null && cat_ParentId != "") {
		$("#"+cat_ParentId+"").css("display","block");
	}
*/
	
	if(cat_ChildId != null && cat_ChildId != "") {						
		$("#cat"+cat_ChildId+"").removeAttr('class');
		//$("#cat"+cat_ChildId+"").removeClass("catalogue_right_child");
		$("#cat"+cat_ChildId+"").toggleClass("kg_sub_cat_active");
	}

}









// ******************SonHai****Remove********************************
function loadPage2() {	
	var cat_ex_cookie = GetCookie('catExpanding');
	var box_ex_cookie = GetCookie('boxExpanding');
	var cat_selected_cookie = GetCookie('selectedCat');
	var selectedAlignCookie = GetCookie('boxAlign');	
	if(cat_ex_cookie != null) {
		if(document.getElementById(cat_ex_cookie) != null) {
			var expandingMenu = document.getElementById(cat_ex_cookie);
			expandingMenu.style.display='block';
		}		
	}		
	if(box_ex_cookie != null) {
		if(document.getElementById(box_ex_cookie) != null) {
			var expandingMenu = document.getElementById(box_ex_cookie);
			expandingMenu.style.display='block';
		}		
	}	
	if(cat_selected_cookie != null) {
		if(document.getElementById(cat_selected_cookie) != null) {
			var selectedCat = document.getElementById(cat_selected_cookie);
			//selectedCat.className='menu_selected';
			if(selectedAlignCookie==1)
				selectedCat.className='menu_selected_top';
			if(selectedAlignCookie==2)
				selectedCat.className='menu_selected_left';
			if(selectedAlignCookie==3)
				selectedCat.className='menu_selected_right';
			if(selectedAlignCookie==4)
				selectedCat.className='menu_selected_bottom';
		}
	}	
}

function OpenRss(host){
	
}

function CatExpandMenuOpen2(spanId, target, align, boxId) {	
	var catId = spanId;	
	var cat_ex_cookie = GetCookie('catExpanding');
	var selectedCatCookie = GetCookie('selectedCat');
	var selectedAlignCookie = GetCookie('boxAlign');
	var box_ex_cookie = GetCookie('boxExpanding');
	//dhxhnv
	cat_ex_cookie = null;
	selectedCatCookie = null;
	box_ex_cookie = null;	
	//dhxhnv	
	if(cat_ex_cookie != null) {
		if(document.getElementById(cat_ex_cookie) != null) {
			var expandingMenu = document.getElementById(cat_ex_cookie);
			if(spanId == cat_ex_cookie) {							
				if (expandingMenu.style.display == 'none') {
					expandingMenu.style.display = 'block';
				}
				else {
					//expandingMenu.style.display = 'none';
				}
			}
			else {
				//expandingMenu.style.display = 'none';
			}
		}
	}	
	if(selectedCatCookie != null) {
		if(document.getElementById(selectedCatCookie) != null) {
			var selectedCat = document.getElementById(selectedCatCookie);
			if(selectedAlignCookie==1) {
				//selectedCat.className='catalogue_top';
			}				
			if(selectedAlignCookie==2) {
				//selectedCat.className='catalogue_left';
			}				
			if(selectedAlignCookie==3) {
				//selectedCat.className='catalogue_right';
			}
			if(selectedAlignCookie==4) {
				//selectedCat.className='catalogue_bottom';
			}	
		}
	}	
	if(box_ex_cookie != null) {
		if(box_ex_cookie != boxId){
			if(document.getElementById(box_ex_cookie) != null) {
				var expandingMenu = document.getElementById(box_ex_cookie);
				expandingMenu.style.display='none';
			}
			if(document.getElementById(boxId) != null) {
				var expandingMenu = document.getElementById(boxId);
				expandingMenu.style.display='block';
			}
		}				
	}	
	/* dhxhnv
	SetCookie('catExpanding',spanId);
	SetCookie('selectedCat',"cat" + catId);
	SetCookie('boxAlign', align);
	SetCookie('boxExpanding',boxId);		
	SetCookie('expires',exp);
	SetCookie('path',pathname);
	SetCookie('domain',mydomain);	
	*/	
	if (target != "") {
		window.location = target;
	}
	else {
		if(spanId != cat_ex_cookie) {
			// Repair by SonHai
			var expandingMenuSpand = document.getElementById(spanId);
			if(expandingMenuSpand != null) {
				//var spandDisplay = "none";
				var spandDisplay = "block";
				if($("#"+spanId+"").css("display") == "none") {
					spandDisplay = "block";
				}				
				$("#"+spanId+"").css("display", spandDisplay);
			}
		}		
		if(document.getElementById("cat" + catId) != null) {
			var selectedCat = document.getElementById("cat" + catId);
			//selectedCat.className='menu_selected';
			if(align==1) {
				//selectedCat.className='menu_selected_top';
			}
			if(align==2){
					//selectedCat.className='menu_selected_left';				
				}				
			if(align==3) {
				//selectedCat.className='menu_selected_right';
			}
			if(align==4) {
				//selectedCat.className='menu_selected_bottom';
			}
		}
	}	
	return false;
}

function CatExpandMenuOpen2(spanId, target, align, boxId) {	
	var catId = spanId;	
	var cat_ex_cookie = GetCookie('catExpanding');
	var selectedCatCookie = GetCookie('selectedCat');
	var selectedAlignCookie = GetCookie('boxAlign');
	var box_ex_cookie = GetCookie('boxExpanding');
	//dhxhnv
	cat_ex_cookie = null;
	selectedCatCookie = null;
	box_ex_cookie = null;	
	//dhxhnv	
	if(cat_ex_cookie != null) {
		if(document.getElementById(cat_ex_cookie) != null) {
			var expandingMenu = document.getElementById(cat_ex_cookie);
			if(spanId == cat_ex_cookie) {							
				if (expandingMenu.style.display == 'none') {
					expandingMenu.style.display = 'block';
				}
				else {
					//expandingMenu.style.display = 'none';
				}
			}
			else {
				//expandingMenu.style.display = 'none';
			}
		}
	}	
	if(selectedCatCookie != null) {
		if(document.getElementById(selectedCatCookie) != null) {
			var selectedCat = document.getElementById(selectedCatCookie);
			if(selectedAlignCookie==1) {
				//selectedCat.className='catalogue_top';
			}				
			if(selectedAlignCookie==2) {
				//selectedCat.className='catalogue_left';
			}				
			if(selectedAlignCookie==3) {
				//selectedCat.className='catalogue_right';
			}
			if(selectedAlignCookie==4) {
				//selectedCat.className='catalogue_bottom';
			}	
		}
	}	
	if(box_ex_cookie != null) {
		if(box_ex_cookie != boxId){
			if(document.getElementById(box_ex_cookie) != null) {
				var expandingMenu = document.getElementById(box_ex_cookie);
				expandingMenu.style.display='none';
			}
			if(document.getElementById(boxId) != null) {
				var expandingMenu = document.getElementById(boxId);
				expandingMenu.style.display='block';
			}
		}				
	}	
	/* dhxhnv
	SetCookie('catExpanding',spanId);
	SetCookie('selectedCat',"cat" + catId);
	SetCookie('boxAlign', align);
	SetCookie('boxExpanding',boxId);		
	SetCookie('expires',exp);
	SetCookie('path',pathname);
	SetCookie('domain',mydomain);	
	*/	
	if (target != "") {
		window.location = target;
	}
	else {
		if(spanId != cat_ex_cookie) {
			// Repair by SonHai
			var expandingMenuSpand = document.getElementById(spanId);
			if(expandingMenuSpand != null) {
				//var spandDisplay = "none";
				var spandDisplay = "block";
				if($("#"+spanId+"").css("display") == "none") {
					spandDisplay = "block";
				}				
				$("#"+spanId+"").css("display", spandDisplay);
			}
		}		
		if(document.getElementById("cat" + catId) != null) {
			var selectedCat = document.getElementById("cat" + catId);
			//selectedCat.className='menu_selected';
			if(align==1) {
				//selectedCat.className='menu_selected_top';
			}
			if(align==2){
					//selectedCat.className='menu_selected_left';				
				}				
			if(align==3) {
				//selectedCat.className='menu_selected_right';
			}
			if(align==4) {
				//selectedCat.className='menu_selected_bottom';
			}
		}
	}	
	return false;
}