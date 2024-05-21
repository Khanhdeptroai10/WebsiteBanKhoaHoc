window.addcontroller = function ($scope, $http, $location) {
    $scope.title = "Thêm mới";
    $scope.add = function () {
        let flag = true;
        const apiStudent = 'http://localhost:3000/quanao';
        $scope.kiemtra = {
            id: false,
            ten: false,
            loai: false,
            gia: false
        }
        if (!$scope.quanao || !$scope.quanao.id) {
            flag = false,
                $scope.kiemtra.id = true;
        }

        if (!$scope.quanao || !$scope.quanao.ten) {
            flag = false,
                $scope.kiemtra.ten = true;
        }

        if (!$scope.quanao || !$scope.quanao.loai) {
            flag = false,
                $scope.kiemtra.loai = true;
        }

        if (!$scope.quanao || !$scope.quanao.gia) {
            flag = false,
                $scope.kiemtra.gia = true;
        }

        if (flag) {
            let newquanao = {
                id: $scope.quanao.id,
                ten: $scope.quanao.ten,
                loai: $scope.quanao.loai,
                gia: $scope.quanao.gia
            }
            $http.post(apiStudent, newquanao).then(function (response) {
                if(response.status==201){
                    alert("Them thanh cong");
                     $location.path("list-phone");
                }
            })
              
        }

    }
}