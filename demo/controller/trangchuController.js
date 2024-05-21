window.trangchuController = function($scope){
    $scope.title="Đây là trang chủ";
    $scope.themMoi=function(){
        //Lấy toàn bộ dữ liệu ra
        console.log($scope.inputValue);

        //lấy thuộc tính 
        console.log($scope.inputValue.name);
        console.log($scope.inputValue.address);
    }
    
    $scope.tinhTong=function(){
        $scope.sum=parseFloat($scope.number.one)+parseFloat($scope.number.two);
        
    }

}