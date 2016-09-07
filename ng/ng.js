/* 
* @Author: anchen
* @Date:   2016-09-07 10:47:16
* @Last Modified by:   anchen
* @Last Modified time: 2016-09-07 11:48:57
*/
 angular.module('myapp',[]).controller("main",function($scope) {
    $scope.sub=function(){
        console.log("表单提交了")
    }
 })
