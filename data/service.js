/*************************************************************************
  dw_viewport.js
  free code from dyn-web.com
  version date: mar 2008
*************************************************************************/

var dw_Viewport = {
    getWinWidth: function () {
        this.width = 0;
        if (window.innerWidth) 
            this.width = window.innerWidth - 18;
        else if (document.documentElement && document.documentElement.clientWidth) 
            this.width = document.documentElement.clientWidth;
        else if (document.body && document.body.clientWidth) 
            this.width = document.body.clientWidth;
        return this.width;
    },
  
    getWinHeight: function () {
        this.height = 0;
        if (window.innerHeight) 
            this.height = window.innerHeight - 18;
        else if (document.documentElement && document.documentElement.clientHeight) 
            this.height = document.documentElement.clientHeight;
        else if (document.body && document.body.clientHeight) 
            this.height = document.body.clientHeight;
        return this.height;
    },
  
    getScrollX: function () {
        this.scrollX = 0;
        if (typeof window.pageXOffset == "number") 
            this.scrollX = window.pageXOffset;
        else if (document.documentElement && document.documentElement.scrollLeft)
            this.scrollX = document.documentElement.scrollLeft;
        else if (document.body && document.body.scrollLeft) 
            this.scrollX = document.body.scrollLeft; 
        else if (window.scrollX) 
            this.scrollX = window.scrollX;
        return this.scrollX;
    },
    
    getScrollY: function () {
        this.scrollY = 0;    
        if (typeof window.pageYOffset == "number") 
            this.scrollY = window.pageYOffset;
        else if (document.documentElement && document.documentElement.scrollTop)
            this.scrollY = document.documentElement.scrollTop;
        else if (document.body && document.body.scrollTop) 
            this.scrollY = document.body.scrollTop; 
        else if (window.scrollY) 
            this.scrollY = window.scrollY;
        return this.scrollY;
    },
    
    getAll: function () {
        this.getWinWidth(); this.getWinHeight();
        this.getScrollX();  this.getScrollY();
    }
  
}

function getDocHeight(doc) {
    doc = doc || document;
    // from http://stackoverflow.com/questions/1145850/get-height-of-entire-document-with-javascript
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

function setHeightIframe() {
	document.getElementById("iframeService").height = 0;
}

function setAndShowIframe(width, height) {

/*
	var F = document.getElementById("iframeService");
	var h1;
	if(F.contentDocument) {
		h1 = F.contentDocument.documentElement.scrollHeight+30; //FF 3.0.11, Opera 9.63, and Chrome
	} else {
		h1 = F.contentWindow.document.body.scrollHeight+30; //IE6, IE7 and Chrome
	}
	
	alert("Height1 : " + h1);
	
	//alert("A : " + F.contentDocument.documentElement.scrollHeight);
	//alert("B : " + F.contentWindow.document.body.scrollHeight);

	var h = 1;
	var ifrm = document.getElementById('iframeService');
    if (ifrm) {		
        var winHt = dw_Viewport.getWinHeight();		
		alert("Height2 : " + Math.round( h * winHt ));		
        //ifrm.style.height = Math.round( h * winHt ) + "px";
        //ifrm.style.marginTop = Math.round( ( winHt - parseInt(ifrm.style.height) )/2 ) + "px";
    }

	var ifrm = document.getElementById('iframeService');
    var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
	alert("Height 3 : " + getDocHeight(doc));
	
	//document.getElementById("iframeService").height = height;
	//alert(height);
*/	

/*
	var iFrame = $('iframe')[0]; // this will return the DOM element
    var strHash = iFrame.contentDocument.location.hash;
	alert(strHash);
*/
	
/*	
	var h = .8;
	var ifrm = document.getElementById('iframeService');
    if (ifrm) {
        var winHt = dw_Viewport.getWinHeight();		
		alert("Height2 : " + Math.round( h * winHt ));
        //ifrm.style.height = Math.round( h * winHt ) + "px";
        //ifrm.style.marginTop = Math.round( ( winHt - parseInt(ifrm.style.height) )/2 ) + "px";
    }
*/	

	
	
	document.getElementById("iframeService").height = height;
	//$('#iframeService').height(height);
	$('#iframeService').width($("#divService").width() - 4);
	$('#divService').css("background","");
	$('#divServiceHidden').remove();
	
	
}


function setHeightIframesClick() {
    var cerceveIci = document.getElementById("iframeService").contentWindow.document.body;
    setHeight(cerceveIci);	
/*
	$("#iframeService").click(function(){
		setHeight(cerceveIci);
	});	
	$("#iframeService").change(function(){
		setHeight(cerceveIci);
	});	
	$("#iframeService").mouseover(function(){
		setHeight(cerceveIci);
	});	
*/
/*
    if (cerceveIci.addEventListener) { //if not IE
        cerceveIci.addEventListener('click', function () {  // resize
			setHeight(cerceveIci);			
			//setTimeout(setHeight(cerceveIci), 10);
        }, false);
    }
    else if (cerceveIci.attachEvent) { //if IE
        cerceveIci.attachEvent('onclick', function () { // onresize
            setHeight(cerceveIci);
			//setTimeout(setHeight(cerceveIci), 10);
        });
    }
*/
}

function setHeight(cerceveIci) {	
	//SHI
/*
	var F = document.getElementById("iframeService");
	var the_height = 0;
	var the_height1 = F.contentDocument.documentElement.scrollHeight + 30; // Chrome
	var the_height2 = F.contentWindow.document.body.scrollHeight + 30; // FireFox	
	the_height = the_height1 > the_height2 ? the_height2 : the_height1;
    document.getElementById("iframeService").height = the_height; // + 20
*/	
}

