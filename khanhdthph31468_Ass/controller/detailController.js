window.detailController = function ($scope, $http, $routeParams) {
    $scope.title = "Hiển thị thông tin chi tiết sinh viên";

    let studentID = $routeParams.id;


    // link API
    const apiStudent = 'http://localhost:3000/student';

    console.log(apiStudent);
    console.log(studentID);

    $http.get(`${apiStudent}/${studentID}`).then(function (response) {
        if (response.status == 200) {
            console.log(response.data);
            $scope.student = response.data;
        }
        
    })
}