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
    	$(".p_triangle_log").show();
    	$(".p_logcont").show();
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
     $("#p_log_btn").click(function(){
     	hmd.methods.operateLayer({$obj:$('#p_reg_mask')},function(){});
     })
     $("#p_close").click(function(){
     	hmd.methods.maskLayerObj.close();
     })
    })
}();
