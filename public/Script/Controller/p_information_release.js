/*var arr = ["<li class='box1' aaa='aaa'>个户美妆</li>","<li class='box2' aaa='bbb'>个户美妆</li>","<li aaa='ccc' class='box3'>个户美妆</li>"];

!function(){
	
	for (var i = 0; i < arr.length; i++) {
		$("#p_infor_title").append(arr[i]);
	}
	
}();

$("#p_infor_title li").click(function(){
	console.log($(this));
	console.log($(this).attr("aaa"));
	if($(this).attr("aaa") === "aaa"){
		$("#p_infor_cont").empty();
		$("#p_infor_cont").append("<li>双肩包</li><li>双肩包</li><li>双肩包</li><li>双肩包</li><li>双肩包</li>")
	}
	if($(this).attr("aaa") === "bbb"){
		$("#p_infor_cont").empty();
		$("#p_infor_cont").append("<li>电冰箱</li><li>电冰箱</li><li>电冰箱</li><li>电冰箱</li><li>电冰箱</li>")
	}
	if($(this).attr("aaa") === "ccc"){
		$("#p_infor_cont").empty();
		$("#p_infor_cont").append("<li>电脑配件</li><li>电脑配件</li><li>电脑配件</li><li>电脑配件</li><li>电脑配件</li>")
	}
	$(this).siblings().removeClass("p_infor_title_cur");
	$(this).addClass("p_infor_title_cur");
})*/

;!function(){
	$.ajax({
		url:"/information",
		type:"post",
		success:function(res){
			var data = res.data;
			//console.log(data);
			for(key in data){
				$("#p_infor_title").append("<li name='"+key+"'>"+data[key].name+"</li>");
			}
			$("#p_infor_title li").eq(0).addClass("p_infor_title_cur");
			
			$("#p_infor_title").on("click","li",function(){
				//console.log(111,$(this)[0]);
				$(this).addClass("p_infor_title_cur");
				$(this).siblings().removeClass("p_infor_title_cur");
				var attr_name = $(this).attr("name"),
					information_cont = data[attr_name].classification;
				$("#p_infor_cont").empty();
				//$("#p_infor_cont li")[0].append();
				//$("#p_infor_cont li").remove();
				//var cont_li = $("#p_infor_cont").append("<li></li>");
				for(key in information_cont){
					$("#p_infor_cont").append("<li>"+information_cont[key]+"</li>");
					
					//$("#p_infor_cont li").append("<span>"+information_cont[key]+"</span>");
				}
			});
			
			console.log(data);
			for(key in data){
				console.log(data[key]);
			}
			//$("#p_infor_cont").append("<li>"+information_cont[key]+"</li>");
		},
		error:function(e){
			console.log(e);
		}
	});

}();
