//var cellColorScheme = "ocean_blue";

var cellColorScheme = "ocean_blue";

jQuery(document).ready(function() {
	
/*	
	if($('#cellColorScheme').length != 0) {
		cellColorScheme = $('#cellColorScheme').val();
	}
*/
		
	g_globalObject = new JsDatePick({
		useMode:1,
		isStripped:true, // [X]		
		target:"dvJsCalendar560",
		cellColorScheme : cellColorScheme,
		yearsRange:[2000,2015],
		/*
		selectedDate:{				This is an example of what the full configuration offers.
			day:5,					For full documentation about these settings please see the full version of the code.
			month:9,
			year:2006
		},
		yearsRange:[1978,2020],
		limitToToday:false,
		cellColorScheme:"beige",
		dateFormat:"%m-%d-%Y",
		imgPath:"img/",
		weekStartDay:1
		*/
	});
	
	g_globalObject.setOnSelectedDelegate(function(){
		//alert("Selected");
		var obj = g_globalObject.getSelectedDay();
		$(location).attr('href', "/3cms/lich-lam-viec.htm?day=" + obj.day + "/" + obj.month + "/" + obj.year);
		//alert("a date was just selected and the date is : " + obj.day + "/" + obj.month + "/" + obj.year);
		//document.getElementById("div3_example_result").innerHTML = obj.day + "/" + obj.month + "/" + obj.year;
	});
	
	g_globalObject.setRepopulationDelegate(function(){
		//alert("Change");
	});	
	
	//$("#dvJsCalendar560").append('<p class="pTitleCalendar">›› Chọn ngày để xem lịch</p>');	
	//$("#dvJsCalendar560").append('<a class="pViewCalendar235" href="/3cms/lich-tuan-so.htm">Tải lịch tuần</a>');
	
});
