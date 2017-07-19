;!function(){
  var url_arr = [
    '../Script/Libs/jqueryUI.js',
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
    hmd.require(url_arr,function(){
      $('.login_btn').click(function(){
        service.oLogin(function(data){
          console.log(data)
        })
      });
      var arr = [12,4,5,6];
      hmd.each(arr,function(index,element){
        console.log(index);
        console.log(element);
        console.log(this);
      });
      var oDiv = document.createElement("div");
      document.body.appendChild(oDiv);
      hmd.data(oDiv,"key","Hello World");
      console.log("data方法key，value： "+hmd.data(oDiv,"key"));

      console.log("数组元素最大值是： "+hmd.max(arr));
      console.log("数组元素最小值是： "+hmd.min(arr));

      var obj = {a:1};
      console.log("判断对象是不是空对象(布尔) "+hmd.isEmptyObject(obj));
      var str = 12
      console.log(hmd.type(str));

      var arr2=[1,2,4,67,7,7,8,9,9,0];
      var arr3 = [{"a":123,"b":12},{"a":123,"b":1},{"a":12,"b":12}];
      console.log(typeof(arr3[0].b)+arr3[0].b);
      console.log(hmd.single(arr3,'b'));

      /*var arr = [{"a":123,"b":12},{"a":123,"b":1},{"a":12,"b":12}];
      function aa(arr,index) {//debugger
        var hash = {},
          ret = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          var item = arr[i],
            oindex = item[index],
            temp = (typeof oindex) + oindex;
          if (hash[temp] !== 1) {
            hash[temp] = 1;
            ret.push(item);
          }
        }
      }
      aa(arr,"b");*/
    })

}();
