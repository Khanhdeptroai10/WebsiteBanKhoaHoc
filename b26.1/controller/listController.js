// window.listController = function($scope, $http){
//     $scope.title="Đây là trang chủ";
    
    
//     // Call API
//     const apiStudent='http://localhost:3000/student';
//     function getData(){
//         $http.get(apiStudent).then(function(response){
//             if(response.status == 200){
//                 console.log(response);
//                 $scope.listStudent=response.data;

//             }
//         })
//     }
//     getData();

//     $scope.deleteStudent = function(deteleID){
//         if(deteleID){
//             let confirm=window.confirm("Bạn có muốn xóa không?");
//             if(confirm){
//                 $http.delete(
//                     `${apiStudent}/${deteleID}`
//                 ).them(function(response){
//                     if(response.status == 200){
//                         alert("Xóa thành công");
//                     }
//                 })
//             }
//         }
//     }
// }

window.listController=function($scope,$http){
    $scope.title="Đây là trnag chủ";

    const apiStudent='http://localhost:3000/student';

    function getData(){
        $http.get(apiStudent).then(function(response){
            if(response.status==200){
                console.log(response.data)
                $scope.listStudent=response.data;
            }
        })
    }
    getData();

    $scope.deleteStudent=function(deleteID){
        if(deleteID){
            let confirm=window.confirm("Ban co muon xoa khong?");
            if(confirm){
                $http.delete(`${apiStudent}/${deleteID}`).then(function(response){
                    if(response.status==200){
                        alert("Xoa thanh cong");
                    }
                })
            }
        }
    }
}