// 定义list组件
define(['tools/tool'],function(Unit){
    var List = Vue.extend({
        // 获取属性变量
        props : ['key'],
        // 获取模板
        template : Unit.tpl("list_template"),
        // 定义数据
        data : function(){
            return {
                type: [
                    {value: '价格排序', key: 'price'},
                    {value: '销量排序', key: 'sales'},
                    {value: '好评排序', key: 'evaluate'},
                    {value: '优惠排序', key: 'discount'}
                ],
                // 缓存展示的商品
                list : [],
                // 缓存没有展示的商品
                other : []
            }
        },
        // 定义回调函数 
        methods : {
             loadMore : function(){
                // 将other里的数据给list，并清空list
                this.list = [].concat(this.list,this.other);
                // 清空other 
                this.other = [];
             },
             // 点击类别按钮，对商品进行排序
             changeType : function(key){
                // $(this.$el).find('.list .list-type li').addClass('current');
                 if(key === 'discount'){
                      // 如果是优惠价，特殊处理
                      this.list = this.list.sort(function(a,b){
                          // 原价-现价
                          var aDiscount = a.orignPrice - a.price;
                          var bDiscount = b.orignPrice - b.price;
                          return aDiscount - bDiscount;
                      });
                 }else{
                     // 否则就按照key的属性名称进行排序
                     this.list = this.list.sort(function(a,b){
                        // 正序
                        // return a[key] - b[key];
                        // 倒序
                        return b[key] - a[key];
                     });
                 };
             }
        },
         // 请求数据
         created : function(){
             // 备份组件this
             var self = this;
             // console.log(this);
             // 得到父组件的保存在query的hash属性 通过组件的$parent
             var query = self.$parent.query;
             // 定义请求的query
             var str = '';
             // 根据设置的query来请求数据
             if(query[0] && query[1]){
                // ?type=1
                str = '?' + query[0] + '=' + query[1];
             };
             // 请求数据
             Unit.Ajax('data/list.json' + str,function(res){
                // console.log(res);
                if(res && res.errno === 0){
                    self.list = res.data.slice(0,4);
                    self.other = res.data.slice(4);
                };
             });
         }
    });

    // 暴露接口
    return List;
})