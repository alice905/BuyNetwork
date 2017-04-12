// 定义过滤器
define([],function(){
	Vue.filter('price',function(num){
        return num + '元';
	});
	Vue.filter('orignPrice',function(num){
		return '门市价:' + num + '元';
	});
	Vue.filter('sales',function(num){
		return '已售' + num;
	});
})