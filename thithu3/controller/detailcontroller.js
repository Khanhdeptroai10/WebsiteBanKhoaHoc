window.detailcontroller = function ($scope, $http, $routeParams) {
    $scope.title = "Hiển thị danh sách";
    let studentID = $routeParams.id;

    const apiquanao = 'http://localhost:3000/quanao';
    $http.get(`${apiquanao}/${studentID}`).then(function (response) {
        console.log(response.data);
        $scope.student = {
            editID: response.data.id,
            ten: response.data.ten,
            loai: response.data.loai,
            gia: response.data.gia
        }
    })
}
