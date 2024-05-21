

var myApp=angular.module('bai1',[]);
myApp.controller("myCtrl1",function($scope){
    $scope.save=function(){
        $scope.$parent.students[$scope.$parent.index]=$scope.student;
    }
    $scope.cancel=function(){
        $scope.$parent.student = angular.copy($scope.$parent.students[$scope.$parent.index]);
    }
})


myApp.controller("myCtrl2",function($scope){
    $scope.$parent.students=[
        {
            ten:"Đỗ Thị Hồng Khanh",
            namSinh:"10-10-2003",
            diem:9
        },
        {
            ten:"Lưu Thị Hải Yến",
            namSinh:"29-10-2001",
            diem:10
        }
    ]
    $scope.edit = function(index){
        $scope.$parent.index=index;
        $scope.$parent.student=angular.copy($scope.$parent.students[index]);
    }
})


// bai2


var myApp=angular.module('bai2',[]);
myApp.controller("myCtrl1",function($scope,$rootScope){
    $scope.save=function(){
        $rootScope.students[$rootScope.index]=$scope.student;
    }
    $scope.cancel=function(){
        $rootScope.student = angular.copy($rootScope.students[$rootScope.index]);
    }
})


myApp.controller("myCtrl2",function($scope,$rootScope){
    $rootScope.students=[
        {
            ten:"Đỗ Thị Hồng Khanh",
            namSinh:"10-10-2003",
            diem:9
        },
        {
            ten:"Lưu Thị Hải Yến",
            namSinh:"29-10-2001",
            diem:10
        }
    ]
    $scope.edit = function(index){
        $rootScope.index=index;
        $rootScope.student=angular.copy($rootScope.students[index]);
    }
})

































