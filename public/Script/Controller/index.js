;!function(){
	var service = hmd.service;
	/*hmd.getPlugin('jqueryUI',function(plugin){
		$('#datepicker').datepicker();
	});
	hmd.getService('AppCommonService',function(service){
		$('#btn').click(function(){
			service.getJson(function(response){
				var odiv = $('#odiv'),
					arr = ['<ul>'];
				this(response).each(function(index,element){
					arr.push('<li>'+index+': '+element+'</li>');
				});
				arr.push('</ul>');
				odiv.html(arr.join(''));
			});
		});
	});
	hmd.getMethods('AppCommonMethods',function(method){
		$('#btnII').click(function(){
			var msg = method.getMethods('中国的特种兵');
			console.log(msg);
		});
	});*/
	// hmd.serveice.get
	var url_arr = [
		'./Script/Libs/jqueryUI.js',
		'./Script/Services/AppCommonService.js',
		'./Script/Methods/AppCommonMethods.js',
		'./Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
		$('#datepicker').datepicker();
		var data = [{name:'Lili',age:25,weight:'47kg'},{name:'Jhon',age:26,weight:'46kg'},{name:'wanghua',age:27,weight:'43kg'}];
		hmd.operateTemplateByScript('id',data);

    hmd.operateTemplateByHTML();
    //console.log($("#odiv"));//数组下标可以把jquery对象转为DOM对象
    //console.log($("#odiv")[0]);
		//var attr = $("#attr").attr("aaa");
    hmd.getElementByAttr('data-repeat',$("#attr"));

	});
}();
