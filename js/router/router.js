// 定义路由
define(['modules/app'],function(app){
      // 封装函数
      function router(){
         // 获得hash
         var hash = location.hash;
         // 把hash中的"#"去掉
         hash = hash.slice(1);
         // 把hash中的"/"去掉
         hash = hash.replace(/^\//,'');
         // 把home/type/2变为数组['home','type','2']
         hash = hash.split('/');
         // 定义配置，看看hash中的第一个成员有哪些
         var map = {
             home : true,
             list : true,
             product : true
         };
         // 如果hash[0]等于配置中的任意一项，就显示相应的视图，否则就显示首页
         if(map[hash[0]]){
             app.view = hash[0];
         }else{
             app.view = 'home'
         };
            // 将query保留
         app.query = hash.slice(1);
         // console.log(app.query);
      }
      
      // 改变接口的时候，触发haschange事件 
      window.addEventListener('haschange',router);

      // 暴露接口
      return router;
})