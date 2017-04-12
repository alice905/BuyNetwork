// 定义工具方法
define([],function(){
   // 定义一个对象
  var Unit = {
       // 发送异步请求 
       // URL表示请求的地址
       // 表示请求的回调函数
       Ajax : function(url,fn){
           // 创建xhr对象
           var xhr = new XMLHttpRequest();
           // 监听事件
           xhr.onreadystatechange = function(){
           	   // 监听状态
           	   if(xhr.readyState === 4){
           	   	   if(xhr.status === 200){
           	   	   	   var data = JSON.parse(xhr.responseText);
           	   	   	   // 执行回调函数
           	   	   	   fn && fn(data);
           	   	   };
           	   };
           };
           // 打开请求
           xhr.open('GET',url,true);
           // 发送数据
           xhr.send(null);
       },
       // 获取模板内容
       tpl : function(id){
       	   return document.getElementById(id).innerHTML;
       }
   };

    // 暴露接口
    return Unit;
})