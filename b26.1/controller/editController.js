window.editController=function($scope,$http,$routeParams){
    $scope.title="Chỉnh sửa thông tin chi tiết sinh viên";

    let studentID=$routeParams.id;


    // link API
    const apiStudent='http://localhost:3000/student';
    
    $http.get(`${apiStudent}/${studentID}`).then(function(response){
        // if(response.status==200){
            console.log(response.data);
        //     $scope.student=response.data;
        // }
        $scope.student={
            editID : response.data.id,
            ten : response.data.ten,
            namSinh:response.data.namSinh,
            chuyenNganh:response.data.chuyenNganh
        }
    })
    $scope.editStudent=function(){

        // link API
        const apiStudent='http://localhost:3000/student';

        // validate
        // tạo biến kiểm tra
        let flag=true;
        // kiểm tra tung truong dữ liệu
        $scope.kiemtra={
            name : false,
            namSinh:false,
            chuyenNganh:false
        }
        if(flag){
            // Kiêm tra dữ liệu
            if (!$scope.student || !$scope.student.name) {
                $flag = flag;
                $scope.kiemtra.name = true;
            }
            if (!$scope.student || !$scope.student.namSinh) {
                $flag = flag;
                $scope.kiemtra.namSinh = true;
            }

            if (!$scope.student || !$scope.student.chuyenNganh) {
                $flag = flag;
                $scope.kiemtra.chuyenNganh = true;
            }

           

            let updateStudent={
                ten : $scope.student.name,
                namSinh: $scope.student.nam,
                chuyenNganh:$scope.student.nganh
            }
            // console.log(newStudent);
            
            $http.put(
                apiStudent,
                updateStudent
            ).then(function(response){
                if(response.status==201){
                    $location.path("trang-chu");
                }
            })
        } else{
            alert("Bạn cần nhập đầy đủ thông tin");
        }
        
          
    }
}