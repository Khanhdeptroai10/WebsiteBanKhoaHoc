//khai báo mang nhân viên
//họ ten, ngày sinh, mức lương, gioi tinh (0 là nam, 1 là nữ)
//new Date: để lấy ngày tháng sinh


let myApp=angular.module("demoBuoi5",[]);
myApp.controller("buoi5",function($scope){
    $scope.nhanVien = [
        {
            hoTen:"Yen",
            ngaySinh:new Date("2000-10-20"),
            luong:3000000,
            gioiTinh:1

        },
        {
            hoTen:"Khanh",
            ngaySinh:new Date("2000-10-20"),
            luong:3000000,
            gioiTinh:1

        },
        {
            hoTen:"Linh",
            ngaySinh:new Date("2000-10-20"),
            luong:3000000,
            gioiTinh:0

        }

    ]
    $scope.number=2;


    // sự kiện click vào nhân viên nào hiển thị thông báo "Xin chào"+tên nhân viên
    $scope.sayHello=function($name){
        alert("Xin chào "+ $name)
    }

})