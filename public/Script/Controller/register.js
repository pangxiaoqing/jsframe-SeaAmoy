;!function(){
  var url_arr = [
    '../Script/Libs/jqueryUI.js',
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
    hmd.require(url_arr,function(){
    	/*
    	 * 登录注册页面tab切换
    	 * pxq 2017-07-20
    	 * */
    	$(".p_triangle_reg").show();
     	$(".p_regcont").show();
     $("#p_log_reg").click(function(e){
     	var _target = e.target;
     	if(_target.id === "p_login_page"){
     		$(".p_logcont").show();
     		$(".p_triangle_log").show();
     		$(".p_triangle_reg").hide();
     		$(".p_regcont").hide();
     	}
     	if(_target.id === "p_reg_page"){
     		$(".p_logcont").hide();
     		$(".p_triangle_log").hide();
     		$(".p_triangle_reg").show();
     		$(".p_regcont").show();
     	}
     });
     /*
      
      * 注册弹框
      * pxq 2017-07-20
      * */
     $(".p_close").click(function(){
     	hmd.methods.maskLayerObj.close();
     	$('#register_email').val("");
     	$('#register_nickname').val("");
     	$('#register_password').val("");
     	$('#register_password2').val("");
     })
     /*
      
      * 注册接口
      * pxq 2017-07-21
      * */
     $("#p_reg_btn").click(function(){
     	service.oRegister(function(data){
	      console.log(data.msg);
	      console.log(data.code);
	      if(data.code === 1){
	      	hmd.methods.operateLayer({$obj:$('#p_reg_mask')},function(){});
	      }
	      if(data.code === 0&&data.msg ==="该用户已注册"){
	      	$('#p_reg_maskerror').append("<h4>您已注册</h4><div class='p_goemil'><a href='login.html'>请去登陆吧</a></div>");
	      	hmd.methods.operateLayer({$obj:$('#p_reg_maskerror')},function(){});
	      }
	      if(data.code === 0){
	      	$('#p_reg_maskerror').append("<h4>"+data.msg+"</h4><p>请重新注册！</p>");
	      	hmd.methods.operateLayer({$obj:$('#p_reg_maskerror')},function(){});
	      }
	    })
     })
     /*
      
      * 去邮箱激活
      * pxq 2017-07-21
      * */
     $("#p_goemil").click(function(){
     	var emil = $('#register_email').val();
     	var emil_sub = emil.substring(emil.indexOf("@"));
//   	var reg = new RegExp(emil_sub);
//   	var emil_href = emil.replace(reg,"mail");
//   	console.log(emil_href);
     	window.location.href="mail"+emil_sub;
     })
     
     
     
     
    })
}();
