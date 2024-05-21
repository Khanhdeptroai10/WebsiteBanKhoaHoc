let myApp = angular.module("lab4", []);

myApp.controller("demobai1", function ($scope) {
    $scope.fullname = "Nguyen Van Teo";
    $scope.birthday = "10-10-2030";
    $scope.gender = "Nam";
    $scope.photo = "https://tse1.mm.bing.net/th?id=OIP.vNpR-4DYMRCXEEpfrAzLXwHaE8&pid=Api&P=0&h=220";
    $scope.mark = "10";
})

myApp.controller("demobai2", function ($scope) {
    $scope.student = [
        {
            fullname: "Nguyen Van Teo",
            birthday: "10-10-2030",
            gender: "Nam",
            photo: "https://tse1.mm.bing.net/th?id=OIP.vNpR-4DYMRCXEEpfrAzLXwHaE8&pid=Api&P=0&h=220",
            mark: "10"
        },
        {
            fullname: "Nguyen Van Teo",
            birthday: "10-10-2030",
            gender: "Nam",
            photo: "https://tse1.mm.bing.net/th?id=OIP.vNpR-4DYMRCXEEpfrAzLXwHaE8&pid=Api&P=0&h=220",
            mark: "10"
        },
        {
            fullname: "Nguyen Van Teo",
            birthday: "10-10-2030",
            gender: "Nam",
            photo: "https://tse1.mm.bing.net/th?id=OIP.vNpR-4DYMRCXEEpfrAzLXwHaE8&pid=Api&P=0&h=220",
            mark: "10"
        }
    ]
})


myApp.controller("demobai4", function ($scope) {
    $scope.calculate = function () {
        var a = parseFloat($scope.length);
        var b = parseFloat($scope.width);
        $scope.perimeter = (a + b) * 2;
        $scope.acreage = a * b;
    }
});

myApp.controller("demobai5", function ($scope) {
    $scope.student={};
    $scope.save = function () {
        var a=parseFloat($scope.student.mark);
        if (a<5) {
            $scope.student.grade="Rớt";
        } else {
            $scope.student.grade="Đậu";
        }
    }
});
















































