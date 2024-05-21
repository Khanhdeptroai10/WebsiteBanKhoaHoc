// window.detailController=function($scope,$http,$routeParams){
//     $scope.title="Hiển thị thông tin chi tiết sinh viên";

//     let studentID=$routeParams.id;


//     // link API
//     const apiStudent='http://localhost:3000/student';
    
//     $http.get(`${apiStudent}/${studentID}`).then(function(response){
//         // if(response.status==200){
//             console.log(response.data);
//         //     $scope.student=response.data;
//         // }
//         $scope.student={
//             editID : response.data.id,
//             ten : response.data.ten,
//             namSinh:response.data.namSinh,
//             chuyenNganh:response.data.chuyenNganh
//         }
//     })
// }


window.detailController=function($scope,$http,$routeParams){
    $scope.title="Hiển thị danh sách";

    let studentID=$routeParams.id;

    const apiStudent='http://localhost:3000/student';
    $http.get(`${apiStudent}/${studentID}`).then(function(response){
        console.log(response.data);
        $scope.student={
            editID:response.data.id,
            ten:response.data.ten,
            namSinh:response.data.namSinh,
            chuyenNganh:response.data.chuyenNganh
        }
    })
}