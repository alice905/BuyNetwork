//  定义模块化文件
define(['modules/home/home','modules/list/list','modules/product/product','tools/tool'],function(Home,List,Product,Unit){
      //  引用模块文件 注册组件
      Vue.component('home',Home);
      Vue.component('list',List);
      Vue.component('product',Product);

      // 实例化vue对象
      var app = new Vue({
          // 绑定视图 
          el : '#app',
          // 绑定数据
          data :{
             msg : '',
             view : 'product',
             // 保留hash数据
             query : [],
             // 搜索框保留的数据
             seachKey : '',
             myKey : ''
          },
          // 定义回调函数
          methods : {
              // 点击搜索按钮的回调按钮
              goSeach : function(){
                    // 把搜索框的按钮给组件的动态绑定的属性
                    this.myKey = this.seachKey;
                    // if(this.view === 'home'){
                    //     // 跳转页面
                    //     location.href == '#list/type/1';
                    // }
                    // console.log(this.myKey);
              },
              // 点击返回按钮的回调函数
               goBack : function(){
                  // 返回上一个页面
                  history.go(-1);
                  // console.log(1);
               }
          }
      });
      // console.log(app)
      // 暴露接口
      return app;
});