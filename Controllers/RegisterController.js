/// <reference path = "angular.min.js"/>

var myApp = angular.module('AngularJSRegister', ['ngMaterial']);
myApp.controller('AngularRegisterController', ['$scope', '$http', function($scope, $http) {
        this.registerForm = function() {

            var user_data='username=' +this.inputData.username+'&user_email=' +this.inputData.email+'&user_password='+this.inputData.password;

            $http({
                method: 'POST',
                url: '../Services/register.php',
                data: user_data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function(data) {
                    console.log(data);
                    if ( data.trim() === 'correct') {
                        window.location.href = '../Views/signin.html';
                    } else {
                        $scope.errorMsg = "Loi roi";
                    }
                })
        }

}]);