


let myApp = angular.module("Assignment", ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/home.html",
            controller: "slide"
        })
        .when("/gioiThieu", {
            templateUrl: "view/gioiThieu.html"
        })
        .when("/lienHe", {
            templateUrl: "view/lienHe.html"
        })
        .when("/FormKhoaHoc", {
            templateUrl: "view/FormKhoaHoc.html",
            controller: TuyenSinhController
        })
        .when("/Danhsach", {
            templateUrl: "view/Danhsach.html",
            controller: DanhsachController
        })
        .when("/detail/:id", {
            templateUrl: "view/detail.html",
            controller: detailController
        })
        .when("/update/:id", {
            templateUrl: "view/update.html",
            controller: updateController
        })
        .when("/form",{
            templateUrl: "view/form.html"
        });
});

myApp.controller('titleController', function ($scope) {
    $scope.title = "Trang chủ";
    $scope.menu = [
        {
            title: "Trang chủ",
            icon: "fa-solid fa-house",
            href: "/"
        },
        {
            title: "Giới thiệu",
            icon: "fa-solid fa-circle-info",
            href: "gioiThieu"
        },
        {
            title: "Liên hệ",
            icon: "fa-solid fa-phone",
            href: "lienHe"
        },
        {
            title: "Tuyển sinh",
            icon: "fa-solid fa-ticket",
            href: "FormKhoaHoc"
        },
        {
            title: "Danh sách",
            icon: "fa-solid fa-book",
            href: "Danhsach"
        },
        {
            title: "form",
            icon: "fa-solid fa-book",
            href: "form"
        }
    ];
});

myApp.controller("slide", function ($scope) {
    // Danh sách các hình ảnh trong slide show
    $scope.images = [
        'https://caodang.fpt.edu.vn/wp-content/uploads/1640x856.png',
        'https://fpt.edu.vn/Resources/article/uploads/2019/20190818122734892__MG_9922.jpg',
        'https://caodang.fpt.edu.vn/wp-content/uploads/1200x600-4.png',
        'https://cantho.fpt.edu.vn/Data/Sites/1/News/10665/img_1819.jpg',
        'https://caodang.fpt.edu.vn/wp-content/uploads/DN-n%C3%B3i-g%C3%AC-v%E1%BB%81-sv-fpoly-1.png'
    ];

    // Khởi tạo SwiperJS với hiệu ứng chuyển slide tùy chọn
    var swiper = new Swiper('.swiper-container', {
        effect: 'fade', // Hiệu ứng chuyển slide tùy chọn (ví dụ: fade, cube, coverflow, flip)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        }
    });

})