// window.addController=function($scope,$http,$location){
//     $scope.title="Thêm thông tin sinh viên";

//     $scope.addStudent=function(){

//         // link API
//         const apiStudent='http://localhost:3000/student';

//         // validate
//         // tạo biến kiểm tra
//         let flag=true;
//         // kiểm tra tung truong dữ liệu
//         $scope.kiemtra={
//             name : false,
//             namSinh:false,
//             chuyenNganh:false
//         }
//         if(flag){
//             // Kiêm tra dữ liệu
//             if (!$scope.student || !$scope.student.name) {
//                 $flag = flag;
//                 $scope.kiemtra.name = true;
//             }
//             if (!$scope.student || !$scope.student.namSinh) {
//                 $flag = flag;
//                 $scope.kiemtra.namSinh = true;
//             }

//             if (!$scope.student || !$scope.student.chuyenNganh) {
//                 $flag = flag;
//                 $scope.kiemtra.chuyenNganh = true;
//             }



//             let newStudent={
//                 ten : $scope.student.name,
//                 namSinh: $scope.student.nam,
//                 chuyenNganh:$scope.student.nganh
//             }
//             // console.log(newStudent);

//             $http.post(
//                 apiStudent,
//                 newStudent
//             ).then(function(response){
//                 if(response.status==201){
//                     $location.path("trang-chu");
//                 }
//             })
//         } else{
//             alert("Bạn cần nhập đầy đủ thông tin");
//         }      
//     }
// }

window.addController = function ($scope, $http, $location) {
    $scope.title = "Thêm mới";
    $scope.addStudent = function () {
        let flag = true;
        const apiStudent = 'http://localhost:3000/student';
        $scope.kiemtra={
            ten:false,
            namSinh:false,
            chuyenNganh:false
        }

        if (flag) {
            if (!$scope.student || !$scope.student.name) {
                $flag = flag;
                $scope.kiemtra.name = true;
            }
            if(!$scope.student || !$scope.student.namSinh){
                $flag=flag;
                $scope.kiemtra.namSinh=true;
            }
            if(!$scope.student || !$scope.student.chuyenNganh){
                $flag=flag;
                $scope.kiemtra.chuyenNganh=true;
            }

            let newStudent={
                ten:$scope.student.name,
                namSinh:$scope.student.nam,
                chuyenNganh:$scope.student.nganh
            }
            console.log(newStudent);

            $http.post(apiStudent,newStudent).then(function(response){
                if(response.status == 201){
                    $location.path("trang-chu");
                }
            })
        }else{
            alert("Bạn phải nhập dầy đủ thông tin");
        }
    }
}