hmd.extend(hmd.service,{
	getJson : function(callback){
		hmd.getJSON('./Script/JSON/default.json',callback);
	},
	// getLineData : function(callback){
	// 	hmd.ws('ws://139.162.32.175:8000/world',callback);
	// },
	// getMapData : function(callback){
	// 	hmd.ws('ws://139.162.32.175:8000/world',callback);
	// },
	// getCircleData : function(callback){
	// 	hmd.ws('ws://139.162.32.175:8000/ratio',callback);
	// }



	oRegister : function(callback){
			var obj = {
			            url:hmd.port+"/register",
									type:'POST',
									data:{
										email:$('.Oemail').val(),
										nickname:$('.Oname').val(),
										password:$('.Opassword').val()
									},
									dataType:'json'}
		hmd.send(obj,callback);
	},
	oLogin : function(callback){
			var obj = {
			            url:hmd.port+"/login",
									type:'POST',
									data:{
										email:$('.login_email').val(),
										password:$('.login_password').val()
									},
									dataType:'json'}
		hmd.send(obj,callback);
	}
});
