//Khởi tạo moduel
//set vùng angular

let myApp = angular.module("demo", []);
//2 tham số: tên vùng và thanh phần phụ thuộc
// khởi tạo controller
myApp.controller("demoController",myFunction);
function myFunction($scope){
    //tham số scope luôn phải có để render dữ liệu ra view

    // khai báo biến
    $scope.xinchao="Hello anh em";
}


myApp.controller("infor",function($scope){
    $scope.ten="KhanhTan";
    $scope.namSinh="2030";
    $scope.chuyenNganh="nhat la da ong bo";

    //khai bao mang
    $scope.student=[
       {
        ten:"KhanhTan",
        namSinh:"2030",
        chuyenNganh:"CNTT"
       },
       {
        ten:"Yen",
        namSinh:"2030",
        chuyenNganh:"CNTT"
       },
       {
        ten:"Linh",
        namSinh:"2030",
        chuyenNganh:"CNTT"
       },
       {
        ten:"Duc",
        namSinh:"2030",
        chuyenNganh:"CNTT"
       }

    ]
})