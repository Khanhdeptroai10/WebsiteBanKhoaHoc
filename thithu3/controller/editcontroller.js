window.editcontroller=function($scope,$http,$routeParams,$location){
    $scope.title="Chỉnh sửa thông tin";

    let quanaoID=$routeParams.id;
    const apiStudent='http://localhost:3000/quanao';

    $http.get(`${apiStudent}/${quanaoID}`).then(function(response){
        if(response.status==200){
            console.log(response.data);
            $scope.student = {
                editID: response.data.id,
                ten: response.data.ten,
                loai: response.data.loai,
                gia: response.data.gia
            }
        }
    })
    $scope.edit=function(){
        let flag=true;
        $scope.kiemtra={
            id:false,
            ten:false,
            loai:false,
            gia:false
        }

        if(flag){
            if(!$scope.student ||!$scope.student.id){
                $flag=flag;
                $scope.kiemtra.id=true;
            }
            if(!$scope.student ||!$scope.student.ten){
                $flag=flag;
                $scope.kiemtra.ten=true;
            }
            if(!$scope.student ||!$scope.student.loai){
                $flag=flag;
                $scope.kiemtra.loai=true;
            }
            if(!$scope.student ||!$scope.student.gia){
                $flag=flag;
                $scope.kiemtra.gia=true;
            }
            let newquanao={
                id: $scope.student.id,
                ten: $scope.student.ten,
                loai: $scope.student.loai,
                gia: $scope.student.gia
            }
            $http.put(apiStudent,newquanao).then(function(response){
                if(response.status == 200){
                    $location.path("trang-chu");
                }
            })
        }else{
            alert("Ban phai nhap day du");
        }
    }
}