// 定义home组件
define(['tools/tool','filter/filter'],function(Unit){
	var Home = Vue.extend({
		// 绑定模板
		template : Unit.tpl('template'),
		// 绑定数据
		data : function(){
			return {
				type: [
					{id: 1, title: '美食', url: '01.png'},
					{id: 2, title: '电影', url: '02.png'},
					{id: 3, title: '酒店', url: '03.png'},
					{id: 4, title: '休闲娱乐', url: '04.png'},
					{id: 5, title: '外卖', url: '05.png'},
					{id: 6, title: 'KTV', url: '06.png'},
					{id: 7, title: '周边游', url: '07.png'},
					{id: 8, title: '丽人', url: '08.png'},
					{id: 9, title: '小吃快餐', url: '09.png'},
					{id: 10, title: '火车票', url: '10.png'}
				],
				// 广告数据
				ad : [],
				// 列表数据
				// 特卖数据
				special : [],
				// 今日推荐
				list : []
			}
		},
		// 请求数据
		created : function(){
             // 备份this
             var self = this;
             // 调用Unit类请求数据的方法
             Unit.Ajax('data/home.json',function(res){
             	  if(res && res.errno === 0){
             	  	 //  保存数据给data里的ad和list
                     // 保存数据的两种方式
                     self.ad = res.data.ad;
                     // self.list = res.data.list;
                     // 通过$set方法可以为组件实例化对象绑定数据
                     self.$set('special',res.data.list.slice(0,2));
                     self.$set('list',res.data.list.slice(2));
             	  }
             })
		}
	});

	// 暴露接口
	return Home;
})