window.danhsachcontroller = function ($scope, $http) {
    $scope.title = "Danh sach";

    const apiquanao = 'http://localhost:3000/quanao';


    function getData() {
        $http.get(apiquanao).then(function (reponse) {
            if (reponse.status == 200) {
                console.log(reponse.data);
                $scope.quanao = reponse.data;
            }
        })
    }
    getData();

    $scope.delete=function(deleteID){
        if(deleteID){
            let confim=window.confirm("Bạn có muốn xóa không");
            if(confim){
                $http.delete(`${apiquanao}/${deleteID}`).then(function(response){
                    if(response.status==200){
                        alert("Bạn xóa thành công");
                    }
                })
            }
        }
    }


}