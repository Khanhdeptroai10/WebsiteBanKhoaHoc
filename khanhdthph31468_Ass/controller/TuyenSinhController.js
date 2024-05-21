window.TuyenSinhController = function ($scope, $http, $location) {

    
    $scope.addStudent = function () {
        const apiStudent = 'http://localhost:3000/student';

        let flag=true;

        $scope.kiemtra={
            ten : false,
            email : false,
            diadiem : false,
            SDT : false,
            nganh : false
        }

        if(flag){
            if (!$scope.student || !$scope.student.ten) {
                $flag = flag;
                $scope.kiemtra.ten = true;
            }
            if (!$scope.student || !$scope.student.email) {
                $flag = flag;
                $scope.kiemtra.email = true;
            }
            if (!$scope.student || !$scope.student.diadiem) {
                $flag = flag;
                $scope.kiemtra.diadiem = true;
            }
            if (!$scope.student || !$scope.student.SDT) {
                $flag = flag;
                $scope.kiemtra.SDT = true;
            }
            if (!$scope.student || !$scope.student.nganh) {
                $flag = flag;
                $scope.kiemtra.nganh = true;
            }



            let newStudent = {
                ten : $scope.student.ten,
                email : $scope.student.email,
                diadiem : $scope.student.diadiem,
                SDT : $scope.student.SDT,
                nganh : $scope.student.nganh
            }
    
            $http.post(
                apiStudent,
                newStudent
            ).then(function (response) {
                if (response.status == 201) {
                    $location.path("Danhsach")
                }
            })
        }else{
            alert("Bạn phải nhập đầy đủ thông tin!!!!");
        }

        
    }

}