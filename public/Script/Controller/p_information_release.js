var arr = ["<li class='box1' aaa='aaa'>个户美妆</li>","<li class='box2' aaa='bbb'>个户美妆</li>","<li aaa='ccc' class='box3'>个户美妆</li>"];

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
})
