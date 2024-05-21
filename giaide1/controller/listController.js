window.listController=function($scope,$http,$routeParams){
    $scope.title="Đây là trnag chủ";
    const apiquanao='http://localhost:3000/quanao';
    function getData(){
        $http.get(apiquanao).then(function(reponse){
            if(reponse.status==200){
                console.log(reponse.data);
                $scope.quanao=reponse.data;
            }
        })
    }
    getData();

    $scope.delete=function(deleteID){
        if(deleteID){
            let confirm=window.confirm("Bna co muon xoa khong?");
            if(confirm){
                $http.delete(`${apiquanao}/${deleteID}`).then(function(reponse){
                    if(reponse.status==200){
                        alert("Xóa thanh cong");
                    }
                })
            }
            
        }
    }
}