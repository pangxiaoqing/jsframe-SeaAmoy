;!function(){
  var url_arr = [
    '../Script/Libs/jqueryUI.js',
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
    hmd.require(url_arr,function(){
      $('.btn').click(function(){
        service.oRegister(function(data){
          console.log(data)
        })
      })

    })
}();
