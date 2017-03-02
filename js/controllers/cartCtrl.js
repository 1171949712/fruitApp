app.controller('cartCtrl', ['$scope', 'listService', function(scope, list){
	var data = list.getCart();
	if(data){
		scope.list = data;
	}
}])