window.updateController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Chỉnh sửa thông tin sinh viên";

    let studentID = $routeParams.id;

    const apiStudents = 'http://localhost:3000/student';

    $http.get(`${apiStudents}/${studentID}`).then(function (response) {
        if (response.status == 200) {
            console.log(response.data);
            $scope.student = {
                editID: response.data.id,
                ten: response.data.ten,
                email: response.data.email,
                diadiem: response.data.diadiem,
                SDT: response.data.SDT,
                nganh: response.data.nganh
            }
        }
    });
    $scope.editStudent = function () {

        let flag = true;
        $scope.kiemtra = {
            ten: false,
            email: false,
            diadiem: false,
            SDT: false,
            nganh: false
        }

        if ($scope.student || $scope.student.ten) {
            $flag = false;
            $scope.kiemtra.ten = true;
        }
        if ($scope.student || $scope.student.email) {
            $flag = false;
            $scope.kiemtra.email = true;
        }
        if ($scope.student || $scope.student.diadiem) {
            $flag = false;
            $scope.kiemtra.diadiem = true;
        }
        if ($scope.student || $scope.student.SDT) {
            $flag = false;
            $scope.kiemtra.SDT = true;
        }
        if ($scope.student || $scope.student.nganh) {
            $flag = false;
            $scope.kiemtra.nganh = true;
        }
        if (flag) {
            let updateStudent = {
                ten: $scope.student.ten,
                email: $scope.student.email,
                diadiem: $scope.student.diadiem,
                SDT: $scope.student.SDT,
                nganh: $scope.student.nganh
            }
            $http.put(`${apiStudents}/${studentID}`,updateStudent).then(function(response){
                if (response.status = 201) {
                    $location.path("Danhsach");
                }
            })
        }else{
            alert("Bạn phải nhập đủ thông tin ");
        }

    }
}

// window.updateController = function ($scope, $http, $routeParams, $location) {

//     let studentID = $routeParams.id;

//     const apiStudent = 'http://localhost:3000/student';

//     $http.get(`${apiStudent}/${studentID}`).then(function (response) {
//         if (response.status == 200) {
//             console.log(response.data);
//             $scope.student = response.data;
//         }
//     })

//     $scope.editStudent = function () {

//         let flag = true;

//         $scope.kiemtra = {
//             ten: false,
//             email: false,
//             diadiem: false,
//             SDT: false,
//             nganh: false
//         }
//         if (!$scope.student || !$scope.student.ten) {
//             $flag = flag;
//             $scope.kiemtra.ten = true;
//         }
//         if ($scope.student || $scope.student.email) {
//             $flag = false;
//             $scope.kiemtra.email = true;
//         }
//         if ($scope.student || $scope.student.diadiem) {
//             $flag = false;
//             $scope.kiemtra.diadiem = true;
//         }
//         if ($scope.student || $scope.student.SDT) {
//             $flag = false;
//             $scope.kiemtra.SDT = true;
//         }
//         if ($scope.student || $scope.student.nganh) {
//             $flag = false;
//             $scope.kiemtra.nganh = true;
//         }
//         if (flag) {
//             let updateStudent = {
//                 ten: response.data.ten,
//                 email: $scope.student.email,
//                 diadiem: $scope.student.diadiem,
//                 SDT: $scope.student.SDT,
//                 nganh: $scope.student.nganh
//             }
//             $http.put(`${apiStudent}/${studentID}`,updateStudent).then(function(response){
//                 if(response.status = 201 ){
//                     $location.path('Danhsach');
//                 }
//             })
//         }else{
//             alert("bnaj nhạp du vap");
//         }
//     }



// }