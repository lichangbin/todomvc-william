/* 
* @Author: anchen
* @Date:   2016-09-07 10:47:16
* @Last Modified by:   anchen
* @Last Modified time: 2016-09-09 20:34:43
*/
 angular.module('myapp',[])
    .controller("main",
        function($scope) {
                    $scope.userdata={};

                    $scope.sub=function(){
                        alert($scope.userdata.username)
                        if ($scope.signup.$invalid) 
                            alert("false");
                        else alert("输入正确")
                    }
                      }
                 )
    /*.directive('compare',function(){
                        var o={};
                        o.strict='AE';
                        o.scope={
                            orgText:'=compare'
                        };
                        o.require='ngModle';
                        o.link=function(sco.ele.attr.con){
                                con.$validators.compare=function(v){
                                    return v==sco.orgText;
                                }

                                sco.$watch('orgText',function(){
                                    con.$validate()})

                        }
    })
*/