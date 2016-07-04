(function (angular) {
	'use strict';

	var myApp=angular.module('MyTodoMvc',[]);
	myApp.controller('MainController',['$scope',function($scope){

	/*id不重复*/
	function getId() {
		var id=Math.random();
		for (var i = 0;i<$scope.todos.length; i++) {
			if ($scope.todos[i].id===id) {
				id=getId();
				break;
			}
		}
		return id;
	}

	$scope.text='';

	$scope.todos=[
		{id:1,text:'学习',completed:false},
		{id:2,text:'吃饭',completed:false},
		{id:3,text:'打豆豆',completed:true},
	];
		//添加add行为
		$scope.add=function(){
			if (!$scope.text) {
				return;
			};
			$scope.todos.push({
			id:getId(),
			text:$scope.text,
			completed:false
		});
			//最后要清空文本框
			$scope.text='';
		};
		//处理删除remove
		$scope.remove=function (id) {
		for (var i = 0;i<$scope.todos.length; i++) {
			if ($scope.todos[i].id===id) {
				$scope.todos.splice(i,1);
				break;
			}
		}	

		};






}]);	
})(angular);
