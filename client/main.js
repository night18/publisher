import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.buytoken.onCreated(function helloOnCreated() {
  
});

Template.buytoken.helpers({
  
});

Template.buytoken.events({
	'click #saved': function(){
		if($('#address').val().length != 42){
			alert("Please input your Ethereum address");
		}else{
			$('#saved').prop("disabled",true);
			$('#saved span').text('Saved!');
			$('#usr_addr').text($('#address').val());
			$('#step2').removeClass('hidden');
		}
	}
});
