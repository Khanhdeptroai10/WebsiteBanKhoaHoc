window.addcontroller = function ($scope, $http) {
    $scope.title = "Trang thêm";

    const apiStudent = 'http://localhost:3000/quanao';

    $scope.add = function () {
        let flag = true;
        $scope.kiemtra = {
            id: false,
            ten: false,
            loai: false,
            gia: false

        }

        if (!$scope.student || !$scope.student.id) {
            flag = false;
            $scope.kiemtra.id = true;
        }
        if (!$scope.student || !$scope.student.ten) {
            flag = false;
            $scope.kiemtra.ten = true;
        }
        if (!$scope.student || !$scope.student.loai) {
            flag = false;
            $scope.kiemtra.loai = true;
        }
        if (!$scope.student || !$scope.student.gia) {
            flag = false;
            $scope.kiemtra.gia = true;
        }
        if (flag) {
            let newquanao = {
                id: $scope.student.id,
                ten: $scope.student.ten,
                loai: $scope.student.loai,
                gia: $scope.student.gia
            }
            $http.post(apiStudent, newquanao).then(function (response) {
                if (response.status == 200) {
                    alert("Thêm thành công");
                    $location.path("trang-chu");
                }
            })
        } else {
            alert("Bạn phải nhập đầy đủ thông tin");
        }
    }
}