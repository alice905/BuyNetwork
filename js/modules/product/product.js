// 定义product类
define(['tools/tool'],function(Unit){
	// 定义组件类
	var Product = Vue.extend({
		 // 定义模板
		 template : Unit.tpl('product_template'),
		 // 定义数据
		 data : function(){
		 	return {
		 		data : {src:'01.jpg'}
		 	}
		 },
		 // 请求数据
		 created : function(){
		 	// 备份this
		 	var self = this;
		 	// 获取query
		 	var query = self.$parent.query;
		 	// 设置query
		 	var str = '';
		 	if(query[0]){
		 		str = "?id=" + query[0];
		 	};
		 	// 获取数据
		 	Unit.Ajax('data/product.json' + str,function(res){
		 		if(res && res.errno === 0){
		 			// 缓存数据
		 			self.data = res.data;
		 		};
		 	});
		 }
	});
	// 暴露接口
	return Product;
})