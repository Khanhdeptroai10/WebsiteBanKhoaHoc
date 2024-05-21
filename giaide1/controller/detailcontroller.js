window.detailcontroller=function($scope,$http,$routeParams){
    $scope.title="Hiển thị danh sách";

    let quanaoID=$routeParams.id;

    const apiquanao='http://localhost:3000/quanao';

    $http.get(`${apiquanao}/${quanaoID}`).then(function(response){
        if(response.status==200){
            console.log(response.data);
            $scope.quanao={
                id:response.data.id,
                ten:response.data.ten,
                gia:response.data.gia,
                loai:response.data.loai
            }
        }
    })
}