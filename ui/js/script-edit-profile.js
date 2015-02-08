jQuery(document).ready(function(){
/*Popup - Edit profile-----------------------------------------------------------------*/
	//
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();

	var output =  ((''+day).length<2 ? '0' : '') + day   + '/' +
	    ((''+month).length<2 ? '0' : '') + month + '/' +
	  	 d.getFullYear();

	var age = $("#age-profile").text();
	var age_values = age.split("/");
	var age_user = d.getFullYear();

	if($('age-profile').text() !== '0'){
		var dif = parseInt(age_user) - parseInt(age_values[2]);
		$("#years-profile").text("0");
	}
	
 	 
	$("#edit-profile").click(function() {
		$("#profile-edit").fadeIn(500);//.css("display","block");
			var name = $('#name-profile').text();
			console.log(name);
			$('#new-name').val(name);

			var age = $("#age-profile").text();
			console.log(age);
			//$('#new-age').val(age);
			$( "#datepicker" ).datepicker({ 
	   			minDate: '-100Y',
	   			maxDate: "0",
	   			changeMonth: true,
	      		changeYear: true,
	      		dateFormat: "dd/mm/yy",
	      		 
   			 });
 			$("#datepicker").datepicker('setDate', age);


			var gender = $('#gender-profile').text();
			console.log(gender);
			$('#gender-new').val(gender);


			if(gender === "fem"){
				$("#new-fem").attr('checked', 'checked');
			}else {
				$("#new-masc").attr('checked', 'checked');
			}

			var religion = $("#religion-profile").text();
			//console.log(religion);
			var true_religion ="";
			$("#new-religion").find('option').each(function()
			{
			    // add $(this).val() to your list
			    if($(this).val() === religion){
			    	//console.log($(this).val()+"---- "+ religion);
			    	$("#new-religion").val(religion);
			    	
			    	true_religion =  religion; 
			    }
			    	
			});


			$("#done-edit").click(function() {
				var name_new_value = $("#new-name").val();
				$("#name-profile").text(name_new_value);

				var birthday_new_value= $("#datepicker").datepicker().val();
				$("#age-profile").text(birthday_new_value);

				var religion_new_value = $("#new-religion").val();
				$("#religion-profile").text(religion_new_value);

				var gender_new_value ="";
				if($('#new-fem').is(':checked')){
					gender_new_value = "fem";

				}else {
					gender_new_value = "masc";

				}


				/*Creez un obiect Json si in adaug in Parse*/
				var d = new Date();
				var month = d.getMonth()+1;
				var day = d.getDate();

				var output =  ((''+day).length<2 ? '0' : '') + day   + '/' +
				    ((''+month).length<2 ? '0' : '') + month + '/' +
				  	 d.getFullYear();

				var age = $("#age-profile").text();
				var age_values = age.split("/");
				var age_user = d.getFullYear();

				//if()
				if($('age-profile').text() !== '...'){
						
					var dif = parseInt(age_user) - parseInt(age_values[2]);
					$("#years-profile").text(dif);
				}
				var jsonValue = {};
				jsonValue = {
						'name': name_new_value,
						'birthday' : birthday_new_value,
						'age':  dif,
						'gender' : gender_new_value,
						'religion' : $("#new-religion").val() 

				};
				//console.log(jsonValue);
				/*Add new row in parse -------------------------------------------------------- */
				var Users = Parse.Object.extend("Users");
				var query = new Parse.Query(Users);

				var email_login = $.cookie("email");
				query.equalTo("email", email_login);
					query.find({
					  success: function(results){
					    // Do something with the returned Parse.Object value
					    //console.log(results);
					    results[0].set('information', jsonValue);
					    results[0].save();
					   
						 $("#profile-edit").fadeOut(500);//.css("display","none"); 
						 $('#update_info').removeClass().addClass('alert alert-success').html('Informations have been successfully updated.');
						 $("#update_info").fadeOut(7000);

					  },
					  error: function(error) {
					    $('#update_info').removeClass().addClass('alert alert-error').html('Error');
					     $("#update_info").fadeOut(7000);
					  }
				});

			//location.reload();
		});
	


	});
	
	/*User information taked from parse ---------------------------------------------------------------------------------*/
	var Users = Parse.Object.extend("Users");
	var query = new Parse.Query(Users);
	var email_login = $.cookie("email");
	query.equalTo("email", email_login);
		query.find({
			success: function(results) {
					 
				if(results.length>0 &&  results[0].get('information')){ 
						result_information = results[0].get('information');
						console.log(result_information);
						//console.log(result_information["age"]);
						$("#name-profile").text(result_information["name"]);	
						$("#age-profile").text(result_information["birthday"]);

						//if(result_information["age"])
						//	$("#years-profile").text(01/01/2015);
						//else 
						$("#years-profile").text(result_information["age"]);
						$("#gender-profile").text(result_information["gender"]);
						$("#religion-profile").text(result_information["religion"]);
						
						//location.reload();
				}
					   
				},
				error: function(error) {
						   alert("Error - update information");
				}
	});


	$(".close-button").click(function() {
		$("#profile-edit").fadeOut(500);//.css("display","none"); 
		
	});
	

});	