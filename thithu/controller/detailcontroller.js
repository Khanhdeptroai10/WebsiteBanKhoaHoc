window.detailcontroller = function ($scope, $http, $routeParams) {
    $scope.title = "Trang chi tiết";

    const apinhanvien = 'http://localhost:3000/nhanvien';
    let nhanvienID = $routeParams.id;

    $http.get(`${apinhanvien}/${nhanvienID}`).then(function (response) {
        $scope.nhanvien = {
            id: response.data.id,
            ten: response.data.ten,
            sdt: response.data.sdt,
            email: response.data.email,
            chucvu: response.data.chucvu,
            ngaysinh: response.data.ngaysinh

        }
        console.log(response.data.chucvu)
    })
}