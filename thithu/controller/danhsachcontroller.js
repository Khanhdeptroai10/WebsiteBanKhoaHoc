window.danhsachcontroller=function($scope,$http){
    $scope.title="Trang chu";

    const apinhanvien='http://localhost:3000/nhanvien';

    function getData(){
        $http.get(apinhanvien).then(function(reponse){
            if(reponse.status==200){
                console.log(reponse.data);
                $scope.nhanvien=reponse.data;
            }
        })
    }
    getData();

    $scope.delete=function(deleteID){
        if(deleteID){
            let confirm=window.confirm("Ban co muon xoa khong?");
            if(confirm){
                $http.delete(`${apinhanvien}/${deleteID}`).then(function(reponse){
                    if(reponse.status==200){
                        alert("Xóa thanh cong");
                    }
                })
            }
        }
    }
}