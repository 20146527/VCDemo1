/// <reference path = "angular.min.js"/>

var myApp = angular.module('AngularJSLogin', ['ngMaterial']);
myApp.controller('DialogLoginController', function ($scope, $mdDialog) {
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.showTabDialog = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'tabDialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

});

myApp.controller('AngularLoginController', ['$scope', '$http', function($scope, $http) {
    this.loginForm = function() {

        var user_data='user_email=' +this.inputData.email+'&user_password='+this.inputData.password;

        $http({
            method: 'POST',
            url: 'login.php',
            data: user_data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function(data) {
                console.log(data);
                if ( data.trim() === 'correct') {
                    window.location.href = 'Views/dashboard.php';
                } else {
                    $scope.errorMsg = "Sai Email hoặc Password";
                }
            })
    }
}]);