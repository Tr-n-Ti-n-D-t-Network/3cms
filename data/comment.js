function checkEmptyComment() {
	var objFCKContent = FCKeditorAPI.GetInstance('content');
	var valueFCKContent = objFCKContent.GetHTML(true);
	$("#content").val(valueFCKContent);
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if($("#sendername").val() == "") {
		alert("Nhập vào họ và tên !");
		return false;
	}
	var email = $("#senderemail").val();
	if(email == "")
	{						
		alert("Nhập vào email");
		return false;
	} else if(!email.match(filter)) {
		alert("Email không hợp lệ !");
		return false;
	}
	if($("#content").val() == "") {
		alert("Nhập vào nội dung comment! ");
		return false;
	}
	if($("#verifycode").val() == "") {
		alert("Nhập vào mã xác nhận ! ");		
		return false;
	}	
	var URLpage = $(location).attr('href');	
	var url3CMS = URLpage.split("3cms")[0] + "3cms/";
	if(confirm( "Bạn có muốn gởi comment không ?" )){		
		$.get(url3CMS + "?cmd=496&ajax=1&"+$("#fComment").serialize(),function(data){
			processAddcomment(data);
			refreshImage();
		}, "html");
	}
	return false;
}
		
function processAddcomment(data){
	if(data == "verifycode") {
		$("#resultComment").html("Mã bảo mật không trùng khớp");
		$("#verifycode").val("");
	} else if(data == "success") {
		$("#resultComment").html("Thêm ý kiến thành công. Ý kiến của bạn sẽ được kiểm duyệt và hiển thị trong thời gian tới !");
		$("#sendername").val("");
		$("#senderemail").val("");
		$("#verifycode").val("");
		FCKeditorAPI.GetInstance('content').SetData("");
		//FCKeditorAPI.GetInstance('content').SetHTML("");
	}
	else {
		$("#resultComment").html("Hệ thống đang bận xin vui lòng thử lại sau !");
	}
}

$(document).ready(function(){
	$("#sendername").focus(function(){
		$("#resultComment").html("");
	});	
	$("#aComment").toggle(function() {
		$("#divComment").fadeIn();
		$("#sendername").focus();
	}, function() {
		$("#divComment").fadeOut();
	});	
});

function refreshImage(){
	var now = new Date();             
	var image = document.getElementById("imageverify"); 
	if(image != null)
		image.src = 'verify.png?' + now.getTime(); 
}

function pageComment(cmdValue, parameter, page) {
	$("#divListComment").css("background","url(/3cms/image/loading.gif) no-repeat center center");
	$.post("?cmd="+cmdValue + parameter +"&page="+page+"",function(data){
			processPageComment(data);
		}, "html");
}

function processPageComment(data) {
	$("#divListComment").html(data);
	$("#divListComment").css("background","url()");
}

/*
function showComment() {
	var divComment = $("#divComment");
	var displayValue = "block";
	if(divComment.css("display") == "block")
		displayValue = "none";
	divComment.css("display", displayValue);		
}
*/