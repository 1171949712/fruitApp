var app = angular.module('fruitApp', ['ionic', 'ngRoute']);

// 路由配置
app.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: '/view/home.html', //首页的视图
		controller: 'homeCtrl' //首页的控制层
	}).when('/cart', {
		templateUrl: '/view/cart.html', //购物车页的视图
		controller: 'cartCtrl' //首页的控制层
	}).when('/info', {
		templateUrl: '/view/info.html', //个人信息页的视图
		controller: 'infoCtrl' //个人信息页的控制层
	}).when('/address', {
		templateUrl: '/view/address.html', //地址搜索页的视图
		controller: 'addressCtrl' //地址搜索页的控制层
	}).otherwise({
		redirectTo: '/home'
	})
})