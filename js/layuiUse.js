// layui.use('laydate', function(){
//  	var laydate=layui.laydate;
// 	lay('.test-item').each(function(){
// 	    laydate.render({
// 	      elem: this
// 	      ,trigger: 'click'
// 	    });
// 	  });
//  })


lay('.test-item').each(function(){
laydate.render({
  elem: this
  ,trigger: 'click'
});
});