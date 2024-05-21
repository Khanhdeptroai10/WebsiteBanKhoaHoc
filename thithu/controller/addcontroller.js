window.addcontroller = function ($scope, $http, $location) {
    $scope.title = "Them moi nhan vien";

    const apinhanvien = 'http://localhost:3000/nhanvien';

    $scope.add = function () {
        let flag = true;

        $scope.kiemtra = {
            id: false,
            ten: false,
            sdt: false,
            email: false,
            chucvu: false,
            ngaysinh: false
        }

        if (flag) {
            if (!$scope.nhanvien || !$scope.nhanvien.id) {
                $flag = flag;
                $scope.kiemtra.id = true;
            }
            if (!$scope.nhanvien || !$scope.nhanvien.ten) {
                $flag = flag;
                $scope.kiemtra.ten = true;
            }
            if (!$scope.nhanvien || !$scope.nhanvien.sdt) {
                $flag = flag;
                $scope.kiemtra.sdt = true;
            }
            if (!$scope.nhanvien || !$scope.nhanvien.email) {
                $flag = flag;
                $scope.kiemtra.email = true;
            }
            if (!$scope.nhanvien || !$scope.nhanvien.chucvu) {
                $flag = flag;
                $scope.kiemtra.chucvu = true;
            }
            if (!$scope.nhanvien || !$scope.nhanvien.ngaysinh) {
                $flag = flag;
                $scope.kiemtra.ngaysinh = true;
            }

            // let formatDate = $scope.nhanvien.ngaysinh.toISOString().split('T')[0];

            let date=new Date($scope.nhanvien.ngaysinh);

            let formatDate=date.getFullYear() + '-'+(date.getMonth() +1)+'-'+(date.getDate());
            let newnhanvien = {
                id: $scope.nhanvien.id,
                ten: $scope.nhanvien.ten,
                sdt: $scope.nhanvien.sdt,
                email: $scope.nhanvien.email,
                chucvu: $scope.nhanvien.chucvu,
                ngaysinh: formatDate
            }
            console.log(newnhanvien);

            $http.post(apinhanvien, newnhanvien).then(function (response) {
                if (response.status == 201) {
                    $location.path("trang-chu")
                }
            })

        } else {
            alert("ban can nhap day du thong tin")
        }

    }
}