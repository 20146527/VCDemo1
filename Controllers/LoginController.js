/// <reference path = "angular.min.js"/>

var myApp = angular.module('AngularJSLogin', ['ngMaterial']);
myApp.controller('AngularLoginController', ['$scope', '$http', function($scope, $http, $log) {

    $scope.InputEmail = true;
    $scope.InputPassword= false;
    $scope.backInputEmail = function () {
        $scope.InputEmail = true;
        $scope.InputPassword = false;
        $scope.progressEmail = false;

    }
    $scope.progressEmail = false;
    $scope.emailI = "";
    this.loginForm = function() {

        var user_data='user_email=' +this.inputData.email+'&user_password='+this.inputData.password;


        $http({
            method: 'POST',
            url: '../Services/login.php',
            data: user_data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function(data) {
                console.log(data);
                if ( data.trim() === 'correct') {
                    window.location.href = '../Views/editpage.html';
                } else {
                    $scope.errorMsg = "Sai Password";
                }
            })
    }
    this.checkEmail = function() {
        $scope.progressEmail = true;
        var user_data='user_email=' +this.inputData.email;

        $http({
            method: 'POST',
            url: '../Services/checkEmail.php',
            data: user_data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function(data) {
                console.log(data);
                if ( data.trim() === 'correct') {
                    $scope.InputEmail = false;
                    $scope.InputPassword = true;
                    $scope.emailI= "Trần Nguyên Nghĩa";
                } else {
                    $scope.progressEmail = false;
                    $scope.errorMsg = "Email không đúng";
                }
            })
    }
}]);