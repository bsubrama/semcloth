jQuery(document).ready(function(){
	/*Filters*/

	$('#events').change(function() {
		if(this.checked) {
			$(".list-events").fadeIn(300);	
		}else {
			$(".list-events").fadeOut(300);
		}
	});
	$('#style').change(function() {
		if(this.checked) {
			$(".list-pref").fadeIn(300);	
		}else {
			$(".list-pref").fadeOut(300);
		}
	});
	//weather
	$('#weather').change(function() {
		if(this.checked) {
			$(".ws-pref").fadeIn(300);	
		}else {
			$(".ws-pref").fadeOut(300);
		}
	});
	
	//season
	$('#season').change(function() {
		if(this.checked) {
			$(".list-season").fadeIn(300);	
		}else {
			$(".list-season").fadeOut(300);
		}
	});

	//material
	$('#material').change(function() {
		if(this.checked) {
			$(".list-material").fadeIn(300);	
		}else {
			$(".list-material").fadeOut(300);
		}
	});

	//religion
	$('#religions').change(function() {
		if(this.checked) {
			$(".list-religions").fadeIn(300);	
		}else {
			$(".list-religions").fadeOut(300);
		}
	});

	//gender
	$('#gender').change(function() {
		if(this.checked) {
			$(".list-gender").fadeIn(300);	
		}else {
			$(".list-gender").fadeOut(300);
		}
	});

	/*list-weatherConditions*/
	$('#weatherConditions').change(function() {
		if(this.checked) {
			$(".list-weatherConditions").fadeIn(300);	
		}else {
			$(".list-weatherConditions").fadeOut(300);
		}
	});

	/*----------------------------------------------------------------*/

	/*Populare garderoba ---- events */
	$.ajax({
	    type: "GET",
	    url: "http://localhost/wade-ui/restEndpoint.php?endpoint=events&method=GET",//"http://riquack-n61vn:9000/events",
	   	dateType: "json",
	    success: function(data){
		var datAsString = JSON.stringify(data);//(new XMLSerializer()).serializeToString(json);
		var ev = 0; 
		 $.each(data.results.bindings,  function(index) {
		 	//console.log(this.label.value);
		 	$("#grand-list-events").append("<div><input type='radio' name='events' id='ev-"+ev+"' value="+ this.event.value+"><label for='ev-"+ev+"'>" + this.label.value + "</label></div>" );
		 	ev++;

		 });
	  },
	  error: function(error) {
	    alert("An error occurred while processing XML file." + error);
	  }
	});


	/*Populare garderoba ---- clothingStyle */
	$.ajax({
	    type: "GET",
	    url: "http://localhost/wade-ui/restEndpoint.php?endpoint=clothingStyles&method=GET",//"http://riquack-n61vn:9000/events",
	   	dateType: "json",
	    success: function(data){
		var datAsString = JSON.stringify(data); 
		var count_extra =0; 
		 $.each(data.results.bindings,  function(index) {
		 	//console.log(this.label.value);
		 	$("#grand-list-pref").append("<div><input type='radio' name='style-pref' id='style-pref-"+count_extra+"' value="+this.dressingStyle.value+"><label for='style-pref-"+count_extra+"' title='"+this.comment.value+"'>" + this.label.value + "</label></div>" );
		 	count_extra++;
		 });
	  },
	  error: function(error) {
	    alert("An error occurred while processing XML file." + error);
	  }
	});

	/*------------------------------------------------------------------*/


	/*Populare garderoba ----  religions*/
	$.ajax({
	    type: "GET",
	    url: "http://localhost/wade-ui/restEndpoint.php?endpoint=religions&method=GET",//"http://riquack-n61vn:9000/events",
	   	dateType: "json",
	    success: function(data){
		var datAsString = JSON.stringify(data);//(new XMLSerializer()).serializeToString(json);
		var count_rel = 0; 
		 $.each(data.results.bindings,  function(index) {
		 	//console.log(this.label.value);
		 	$("#grand-list-religions").append("<div><input type='radio' name='religions' id='rel-"+count_rel+"' value="+this.religion.value+"><label title='"+this.comment.value+"' for='rel-"+count_rel+"'>" + this.label.value + "</label></div>" );
		 	//$("#new-religion").append("<option value='"+this.religion.value+"'>"+this.label.value +"</option>");

		 	count_rel++;
		 });
	  },
	  error: function(error) {
	    alert("An error occurred while processing XML file." + error);
	  }
	});

	/*------------------------------------------------------------------*/

	/*Populare garderoba ----   seasons*/
	$.ajax({
	    type: "GET",
	    url: "http://localhost/wade-ui/restEndpoint.php?endpoint=seasons&method=GET",//"http://riquack-n61vn:9000/events",
	   	dateType: "json",
	    success: function(data){
		var datAsString = JSON.stringify(data);//(new XMLSerializer()).serializeToString(json);
		var count_sea = 0; 
		 $.each(data.results.bindings,  function(index) {
		 	//console.log(this.label.value);
		 	$("#grand-list-season").append("<div><input type='radio' name='season' id='seas-"+count_sea+"' value="+this.season.value+"><label title='"+ ( this.comment === undefined ? '' : this.comment.value )+"' for='seas-"+count_sea+"'>" + this.label.value + "</label></div>" );
			count_sea++;

		 });
	  },
	  error: function(error) {
	    alert("An error occurred while processing XML file." + error);
	  }
	});


	/*------------------------------------------------------------------*/

	/*Populare garderoba ----   weatherConditions*/
	$.ajax({
	    type: "GET",
	    url: "http://localhost/wade-ui/restEndpoint.php?endpoint=weatherConditions&method=GET",//"http://riquack-n61vn:9000/events",
	   	dateType: "json",
	    success: function(data){
		var datAsString = JSON.stringify(data);
		var weather = 0 ;
		 $.each(data.results.bindings,  function(index) {
		 	//console.log(this.label.value);
			
		 	$("#grand-list-weatherConditions").append("<div><input type='radio' name='weatherConditions' id='wea-"+weather+"' value="+this.weatherCondition.value+"><label title='"+ ( this.comment === undefined ? '' : this.comment.value )+"' for='wea-"+weather+"'>" + this.label.value + "</label></div>" );
			weather++;

		 });
	  },
	  error: function(error) {
	    alert("An error occurred while processing XML file." + error);
	  }
	});



	/*Populare garderoba ----   clothingMaterials */
	$.ajax({
	    type: "GET", //clothingMaterials
	    url: "http://localhost/wade-ui/restEndpoint.php?endpoint=clothingMaterials&method=GET",//"http://riquack-n61vn:9000/events",
	   	dateType: "json",
	    success: function(data){
		var datAsString = JSON.stringify(data);
		var clmat = 0;
		 $.each(data.results.bindings,  function(index) {
		 	//console.log(this.label.value);
		 	//$("#grand-list-clothingMaterials").append("<div><input type='radio' name='clothingMaterials' id='cl-"+clmat+"' value="+ this.clothingMaterial.value+"><label for='cl-"+clmat+"'>" + this.clothingMaterial.value + "</label></div>" );
			
		 	$("#grand-list-clothingMaterials").append("<input type='checkbox' name='clothingMaterials' id='cl-"+clmat+"' value="+ this.clothingMaterial.value+"><label title='"+this.comment.value+"' for='cl-"+clmat+"'>" + this.label.value + "</label><br/>" );
			
			clmat++;
		});
	  },
	  error: function(error) {
	    alert("An error occurred while processing XML file." + error);
	  }
	});



	/*
	$( "#filters-group" ).submit(function( event ) {

		var events_select = $('#events').is(':checked');  
		var style_select = $('#style').is(':checked');  
		var season_select = $('#season').is(':checked');  
		var material_select = $('#material').is(':checked');
		var weather	= $('#weather').is(':checked');
		var religions = $('#religions').is(':checked');
		var weatherConditions = $('#weatherConditions').is(':checked');
	
		if (events_select == true &&  style_select == true
				 &&  season_select == true &&  material_select == true
				 && weather == true && religions = true && weatherConditions == true) {
			return;
		}
		
		if (events_select == false ){
			$("#manufacturer").css("border", "2px solid red");
		}
 
		
		
		event.preventDefault();



		

	});	*/

	

 
  
var smat = [];
var gmat= [];
	//Colect all filters
	$( "#app-filters" ).click(function() {
		$( ".list-w li" ).each(function( index ) {
				$(this).fadeIn(50);
		});

		/*Get selected events --------------------------------- */

		var result = "events:";
		if($('#events').is(':checked')) { /*events*/
			result += $('.filters-item :radio:checked').val();
		}else{
			result += "no";
		}

		

		/*Get selected style --------------------------------- */
		result += "|style:";
		if($('#style').is(':checked')) { /*style*/
			var ok = 0; 
			$('.list-pref input[type="checkbox"]:checked').each(function() {
			    result += ($(this).attr('value'))+", ";
			    ok++;
			});
			
			if(ok==0)
				result += "no";
			 
		}else {
			result += "no";
		}


		/*Get weather --------------------------------- */
		result = result.substring(0, result.length-2);
		result += "|";

		if($('#weather').is(':checked')) { /*Weather*/
			result += 'weather:yes';
		}else {
			result  += 'weather:no';
		}

		result += "|";

		/*Season-----------------------------------------------*/
		result += "season:";
		if($('#season').is(':checked')) { /*season*/
			result += $('.list-season :radio:checked').val();
		}else {
			result += 'no';
			$('list-season').fadeOut();
		}


		result += "|";
		/*Material-----------------------------------------------*/
		result += "material:";
		if($('#material').is(':checked')) { /*material*/
			result += $('.list-material :radio:checked').val();
		}else {
			result += 'no';
			$('list-material').fadeOut();
		}


		/*Json Filter ---------------------------------------------------------------*/
		var jsonResultFilter = {}; 
    	var count_limit_1 = 0 ;
		var events ="no"; 
		if($('#events').is(':checked')) { /*events*/
			events = $('.list-events :radio:checked').val();
			count_limit_1++;
			 
		} 

		var pref = "no";
		if($('#style').is(':checked')) {
			 pref = $('.list-pref :radio:checked').val();
			 count_limit_1++;
			 
		}
		
		var season = "no";
		if($('#season').is(':checked')) { /*season*/
			season = $('.list-season :radio:checked').val();
			count_limit_1++;
			 
		}

		var material = "no";
		
		if($('#material').is(':checked')) {
		  //	material = $('.list-material :radio:checked').val();
		  //-------------------------------------------------------------------------------------------------------
			$('.list-material input:checked').each(function() {
			    smat.push(accLink($(this).val()));	 
			});
			material = "yes";	
		  	count_limit_1++;
		}


		var gender = "no";
		if($('#gender').is(':checked')) {
		  	$('.list-gender input:checked').each(function() {
			    gmat.push(accLink($(this).val()));	 
			});
			gender = "yes";	
		  	count_limit_1++;
		  	 
		}



		/*var weather = "no";
		if($('#weather').is(':checked')) {
			weather = "yes";
		}*/

		var religions = "no";
		if($('#religions').is(':checked')) {
		  	religions = $('.list-religions :radio:checked').val();
		  	count_limit_1++;
		  	 
		}

		
		var weatherConditions = "no";
		if($('#weatherConditions').is(':checked')) {
		  	weatherConditions = $('.list-weatherConditions :radio:checked').val();
		  	count_limit_1++;
		  	 
		}




		var name = $("#name-profile").text();
		var birthday = $("#age-profile").text();
		var age = $("#years-profile").text();
		var gender = $("#gender-profile").text();
		var religion = $("#religion-profile").text();

		if(count_limit_1>0) { /*daca e selectat macar un filtru*/
				
				jsonResultFilter = { 	// toate datele si filtere
					"preferences":  { }
				};

				if(name!="")
					jsonResultFilter.preferences.name = name;
				if(age!=="")
					jsonResultFilter.preferences.age = age;
				if(birthday!=="")
					jsonResultFilter.preferences.birthday = birthday;
				//if(religion!=="")
				//	jsonResultFilter.preferences.religion = religion;
				if(events!=="no")
					jsonResultFilter.preferences.events = accLink(events);
				if(pref!=="no")
					jsonResultFilter.preferences.stylePref = accLink(pref);
				//if(weather!=="no")
				//	jsonResultFilter.preferences.weather = accLink(weather);
				if(season!=="no")
					jsonResultFilter.preferences.season = accLink(season);
				
				if(material!=="no"){
					jsonResultFilter.preferences.material = JSON.stringify(smat); //accLink(material);
				}
					
				if(religions!=="no")
					jsonResultFilter.preferences.religions = accLink(religions);
				
				if(weatherConditions!=="no")
					jsonResultFilter.preferences.weatherConditions = accLink(weatherConditions);


				if(gender!=="no"){
					jsonResultFilter.preferences.gender = JSON.stringify(gmat); //accLink(material);
				}
					

				console.log(jsonResultFilter);



				//alert(result);
				//console.log(result);

			
				console.log("--------------------------------------------");

		}else {
			 
				$("#error-filters").fadeIn(5000);
				$("#error-filters").removeClass().addClass('alert alert-error').html("At least one field must be checked.");
				$("#error-filters").fadeOut(5000);
		}
		

	}); /* --------------------- end of click button*/

	/*Reset filters --------------------------------------- */
	$('#reset-filters').click(function() {
		 location.reload(500);
		 $("html, body").animate({ scrollTop: 0 }, "slow");
 		// return false;
	});


});


function accLink(link){
	var string_link = "<" +  link + ">";
	return  string_link; 
} 



function labelLink(link){
	var string_link = link;
	var arr_str = string_link.split("/");
	return arr_str[arr_str.length-1];
}