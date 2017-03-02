app.controller('homeCtrl', ['$scope', 'listService', function(scope, list){
	if(list.getData()) {
		scope.homedata = list.getData();
		return;
	}
	list.getHttpData(function(res){
		var data = res.product_list.slice(1);
		var cartlist = list.getCoreCartData();
		for(var i = 0; i < data.length; i++) {
			data[i].num = 0;
			for(var key in cartlist) {
				if(data[i].name === cartlist[key].name) {
					data[i].num = cartlist[key].num;
				}
			}
		}
		list.setData(data); //对已经从服务端得到的数据进行一次保存
     	scope.homedata = data; //数据模型双向数据绑定
	})
}])