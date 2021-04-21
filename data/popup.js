// JavaScript Document
var countPopup;
var namePopup;
var idPopup;

function initPopup(name,id){
	namePopup=name;
	idPopup=id;
}

function openForm(url,name,width,height,count) {
	var options = "width=" + width + ",height=" + height + ",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no";		
	new_window = window.open(url, name, options);		
	window.self.name = "main";
	new_window.focus();	
	countPopup=count;
}

function openFormView(url,name,width,height) {
	var options = "width=" + width + ",height=" + height + ",toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=no,copyhistory=no";		
	new_window = window.open(url, name, options);		
	window.self.name = "main";
	new_window.focus();		
}
function openwebsitetinh(width,height) {
	var options = "width=" + width + ",height=" + height + ",toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=no,copyhistory=no";		
	new_window = window.open("www/popupsitetinh.jsp", "listweb", options);		
	window.self.name = "main";
	new_window.focus();		
}

function openwebsitetrongnuoc(width,height) {
	var options = "width=" + width + ",height=" + height + ",toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=no,copyhistory=no";		
	new_window = window.open("www/popupsitenews.jsp", "listweb", options);		
	window.self.name = "main";
	new_window.focus();		
}
function getData(name,id){
	//var count=document.getElementById("htxtPopUp").value
	obj=document.getElementsByName(namePopup+countPopup)
	obj1=document.getElementsByName(idPopup+countPopup)
	if(obj.length>0) {
		for(i=0; i<obj.length;i++){
			obj[i].value=name
			obj1[i].value=id			
		}
	}
	else{
		obj.value=name
		obj1.value=id
	}
	//document.getElementById(namePopup + countPopup).value=name
	//document.getElementById(idPopup + countPopup).value=id
}
