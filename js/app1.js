(function (angular) {
	'use strict';

	var myApp=angular.module('MyTodoMvc',[]);
	myApp.controller('MainController',['$scope','$location',function($scope,$location){

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
			//clear completed.他的意思是切换
//两个终点状态，只把clear后的那个状态表现出来即可。还是x==y的样子
		$scope.clear=function () {
			var result=[];//此处进坑，没有var声明，所以会提示undifined
			for (var i = 0;i<$scope.todos.length; i++) {
			if (!$scope.todos[i].completed) {
				result.push($scope.todos[i]);	
			}

		}
			$scope.todos=result;
		};

		//判断是否有已经完成的,是个布尔型，在ng-shijian中比较多的应用在判断上显示之类
		$scope.existCompleted=function () {
			for (var i = 0;i<$scope.todos.length; i++) {
			if ($scope.todos[i].completed) {
				return true;	
			}
			
		}
		return false;
		};
		//当前编辑哪个元素，实质是更换li 元素里的两个class从而表现出不同的状态。view和editing.
		//在h+c结构里，c默认上让editing状态是display none的，要实现他的编辑功能和状态就是要在双击时候让他的editing class激活即可。
		//初始数据结构，一个false的值
		 $scope.currentEditingId = -1;
    		$scope.editing = function(id) {
	      $scope.currentEditingId = id;
	    };
	    $scope.save = function() {
	      $scope.currentEditingId = -1;
	    };
	    //以上是比较难理解的
	     var now = true;
		    $scope.toggle = function() {
		      for (var i = 0; i < $scope.todos.length; i++) {
		        $scope.todos[i].completed = now;
		      }
		      now = !now;
		    }

		    //筛选。比较难
		 $scope.selector={};
		 $scope.$location=$location;
		 $scope.$watch('$location.path()',function (now,old) {
		 	switch (now) {
        case '/active':
          $scope.selector = { completed: false };
          break;
        case '/completed':
          $scope.selector = { completed: true };
          break;
        default:
          $scope.selector = {};
          break;
      }

		 });
}]);	
})(angular);
