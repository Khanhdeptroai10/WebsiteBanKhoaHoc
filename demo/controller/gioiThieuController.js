window.gioiThieuController=function($scope, $routeParams){
    $scope.title="Đây là trang giới thiệu";

    console.log($routeParams);

    $scope.students=[
        {
            ten:"Khanh",
            namSinh:"2003",
            chuyenNganh:"CNTT"
        },
        {
            ten:"Yến",
            namSinh:"2003",
            chuyenNganh:"CNTT"
        }
    ]

    
    $scope.themMoi=function(){
        let newStudent=
            {
                ten:$scope.ten,
                namSinh:$scope.namSinh,
                chuyenNganh:$scope.chuyenNganh
            }
        
        $scope.students.push(newStudent)
    }















}