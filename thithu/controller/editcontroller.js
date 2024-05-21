window.editcontroller = function ($scope, $http, $location, $routeParams) {
    $scope.title = "Chỉnh sửa thông tin";

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
    })

    $scope.edit = function () {
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

            let date=new Date($scope.nhanvien.ngaysinh);
            let formatDate=date.getFullYear() + '-'+(date.getMonth() +1)+'-'+(date.getDate());

            let updateStudent = {
                id: $scope.nhanvien.id,
                ten: $scope.nhanvien.ten,
                sdt: $scope.nhanvien.sdt,
                email: $scope.nhanvien.email,
                chucvu: $scope.nhanvien.chucvu,
                ngaysinh: formatDate
            }

            console.log(updateStudent);
            console.log(apinhanvien);
            $http.put(
                `${apinhanvien}/${nhanvienID}`,
                updateStudent
            ).then(function(response){
                if(response.status==201){
                    $location.path("trang-chu");
                }
            })
        }else{
            alert("Banj phai nhap day du");
        }

    }
}