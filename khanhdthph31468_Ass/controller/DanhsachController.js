window.DanhsachController=function($scope,$http){
    $scope.title="Danh sách";


    const apiStudent='http://localhost:3000/student';
    function getData(){
        $http.get(apiStudent).then(function(response){
            if(response.status == 200){
                console.log(response);
                $scope.DanhsachStudent=response.data;
            }
        })
    }
    getData();

    $scope.deleteStudent = function(deleteID){
        if(deleteID){
           let confirm=window.confirm("Bạn có muốn xóa không?");
           if(confirm){
                $http.delete(`${apiStudent}/${deleteID}`).then(function(response){
                    if(response.status == 200){
                        alert("Xóa thành công");
                    }
                })
           }
        }
    }
}

