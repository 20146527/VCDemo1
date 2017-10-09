angular
    .module('EditPage', ['ngMaterial'])
    .controller('EditPageController', ['$scope', '$timeout', '$mdSidenav', '$log', '$http', function ($scope, $timeout, $mdSidenav, $log, $http) {
        $scope.toggleLeft = buildToggler('left');
        $scope.isOpenLeft = function(){
            return $mdSidenav('left').isOpen();
        };
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
        d =[{"title":"","checkbox":"","select":"","widgetid":"","areaid":""}];


        $scope.progress = false;

        $scope.dataload1 = d;
        $scope.dataload2 = d;
        $scope.dataload3 = d;
        $scope.dataload4 = d;
        $scope.dataload5 = d;
        $scope.dataload6 = d;

        $scope.select1 = true;
        $scope.input1 = false;
        $scope.select2= true;
        $scope.input2 = false;
        $scope.select3= true;
        $scope.input3 = false;
        $scope.select4= true;
        $scope.input4 = false;
        $scope.select5= true;
        $scope.input5 = false;
        $scope.select6= true;
        $scope.input6 = false;

        var widgetid1, widgetid2, widgetid3, widgetid4, widgetid5, widgetid6;


        $scope.cancel1 = function () {
            $scope.select1 = true;
            $scope.input1 = false;
        }
        $scope.cancel2 = function () {
            $scope.select2 = true;
            $scope.input2 = false;
        }
        $scope.cancel3 = function () {
            $scope.select3 = true;
            $scope.input3 = false;
        }
        $scope.cancel4 = function () {
            $scope.select4 = true;
            $scope.input4 = false;
        }
        $scope.cancel5 = function () {
            $scope.select5 = true;
            $scope.input5 = false;
        }
        $scope.cancel6 = function () {
            $scope.select6 = true;
            $scope.input6 = false;
        }
        $scope.saveAll = function () {
            if($scope.input1 == false && $scope.input2 == false && $scope.input3 == false && $scope.input4 == false && $scope.input5 == false &&$scope.input6 == false){
                alert("Information has not been changed");

            }else {
                saveData($scope.dataload1[0].title, $scope.dataload1[0].checkbox, $scope.dataload1[0].select, widgetid1, 1);
                saveData($scope.dataload2[0].title, $scope.dataload2[0].checkbox, $scope.dataload2[0].select, widgetid2, 2);
                saveData($scope.dataload3[0].title, $scope.dataload3[0].checkbox, $scope.dataload3[0].select, widgetid3, 3);
                saveData($scope.dataload4[0].title, $scope.dataload4[0].checkbox, $scope.dataload4[0].select, widgetid4, 4);
                saveData($scope.dataload5[0].title, $scope.dataload5[0].checkbox, $scope.dataload5[0].select, widgetid5, 5);
                saveData($scope.dataload6[0].title, $scope.dataload6[0].checkbox, $scope.dataload6[0].select, widgetid6, 6);
            }


        }
        function loadData(widgetid, areaid) {
            var data = 'widgetid='+widgetid + '&areaid=' + areaid;
            $http({
                method: 'POST',
                url: '../Services/loadDataEditPage.php',
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    $scope.dataload = data;
                    $log.debug("Da lay du lieu");
                })

        }
        function saveData(title, checkbox, select, widgetid, areaid) {
            if(checkbox != true){
                checkbox= false;
            }else {
                checkbox = true;
            }
            var data = 'title=' + title + '&checkbox=' + checkbox + '&select=' +select + '&widgetid=' + widgetid + '&areaid=' + areaid;
            $http({
                method: 'POST',
                url: '../Services/saveDataEditPage.php',
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    console.log(data);
                    if(data.trim()=='correct'){
                        $scope.alertMsg = "Da Luu";
                    }
                    else {
                        $scope.alertMsg = "Loi roi";
                    }

                })
        }
        this.selecta1 = function () {
            $scope.progress = true;
            switch (this.inputData.select){
                case 'widget1':
                    var data = 'widgetid=1'+ '&areaid=1';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload1 = data;
                            $scope.progress = false;
                        });
                    $scope.input1= true;
                    $scope.select1 = false;
                    widgetid1 = 1;

                    break;
                case 'widget2':
                    var data = 'widgetid=2'+ '&areaid=1';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload1 = data;
                            $scope.progress = false;
                        });
                    $scope.input1= true;
                    $scope.select1 = false;
                    widgetid1 = 2;
                    break;
                case 'widget3':
                    var data = 'widgetid=3'+ '&areaid=1';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload1 = data;
                            $scope.progress = false;
                        });
                    $scope.input1= true;
                    $scope.select1 = false;
                    widgetid1 = 3;
                    break;
                case 'widget4':
                    var data = 'widgetid=4'+ '&areaid=1';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload1 = data;
                            $scope.progress = false;
                        });
                    $scope.input1= true;
                    $scope.select1 = false;
                    widgetid1 = 4;
                    break;
                case 'widget5':
                    var data = 'widgetid=5'+ '&areaid=1';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload1 = data;
                            $scope.progress = false;
                        });
                    $scope.input1= true;
                    $scope.select1 = false;
                    widgetid1 = 5;
                    break;
            }

        }
        this.selecta2 = function () {
            $scope.progress = true;
            console.log("Chon o Area2");
            switch (this.inputData.select){
                case 'widget1':
                    console.log("Va chon Widget1");
                    var data = 'widgetid=1'+ '&areaid=2';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload2 = data;
                            $scope.progress = false;
                        });
                    $scope.input2= true;
                    $scope.select2 = false;
                    widgetid2 = 1;

                    break;
                case 'widget2':
                    var data = 'widgetid=2'+ '&areaid=2';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload2 = data;
                            $scope.progress = false;
                        });
                    $scope.input2= true;
                    $scope.select2 = false;
                    widgetid2 = 2;
                    break;
                case 'widget3':
                    var data = 'widgetid=3'+ '&areaid=2';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload2 = data;
                            $scope.progress = false;
                        });
                    $scope.input2= true;
                    $scope.select2 = false;
                    widgetid2 = 3;
                    break;
                case 'widget4':
                    var data = 'widgetid=4'+ '&areaid=2';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload2 = data;
                            $scope.progress = false;
                        });
                    $scope.input2= true;
                    $scope.select2 = false;
                    widgetid2 = 4;
                    break;
                case 'widget5':
                    var data = 'widgetid=5'+ '&areaid=2';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.dataload = data;
                            $log.debug("Da lay du lieu");
                            $scope.dataload2 = data;
                            $scope.progress = false;
                        });
                    $scope.input2= true;
                    $scope.select2 = false;
                    widgetid2 = 5;
                    break;
            }

        }
        this.selecta3 = function () {
            $scope.progress = true;
            switch (this.inputData.select){
                case 'widget1':
                    var data = 'widgetid=1'+ '&areaid=3';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload3 = data;
                            $scope.progress = false;
                        });
                    $scope.input3= true;
                    $scope.select3 = false;
                    widgetid3 = 1;

                    break;
                case 'widget2':
                    var data = 'widgetid=2'+ '&areaid=3';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload3 = data;
                            $scope.progress = false;
                        });
                    $scope.input3= true;
                    $scope.select3 = false;
                    widgetid3 = 2;
                    break;
                case 'widget3':
                    var data = 'widgetid=3'+ '&areaid=3';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload3 = data;
                            $scope.progress = false;
                        });
                    $scope.input3= true;
                    $scope.select3 = false;
                    widgetid3 = 3;
                    break;
                case 'widget4':
                    var data = 'widgetid=4'+ '&areaid=3';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload3 = data;
                            $scope.progress = false;
                        });
                    $scope.input3= true;
                    $scope.select3 = false;
                    widgetid3 = 4;
                    break;
                case 'widget5':
                    var data = 'widgetid=5'+ '&areaid=3';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload3 = data;
                            $scope.progress = false;
                        });
                    $scope.input3= true;
                    $scope.select3 = false;
                    widgetid3 = 5;
                    break;
            }

        }
        this.selecta4 = function () {
            $scope.progress = true;
            switch (this.inputData.select){
                case 'widget1':
                    var data = 'widgetid=1'+ '&areaid=4';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload4 = data;
                            $scope.progress = false;
                        });
                    $scope.input4= true;
                    $scope.select4 = false;
                    widgetid4 = 1;

                    break;
                case 'widget2':
                    var data = 'widgetid=2'+ '&areaid=4';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload4 = data;
                            $scope.progress = false;
                        });
                    $scope.input4= true;
                    $scope.select4 = false;
                    widgetid4 = 2;
                    break;
                case 'widget3':
                    var data = 'widgetid=3'+ '&areaid=4';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload4 = data;
                            $scope.progress = false;
                        });
                    $scope.input4= true;
                    $scope.select4 = false;
                    widgetid4 = 3;
                    break;
                case 'widget4':
                    var data = 'widgetid=4'+ '&areaid=4';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload4 = data;
                            $scope.progress = false;
                        });
                    $scope.input4= true;
                    $scope.select4 = false;
                    widgetid4 = 4;
                    break;
                case 'widget5':
                    var data = 'widgetid=5'+ '&areaid=4';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload4 = data;
                            $scope.progress = false;
                        });
                    $scope.input4= true;
                    $scope.select4 = false;
                    widgetid4 = 5;
                    break;
            }

        }
        this.selecta5 = function () {
            $scope.progress = true;
            switch (this.inputData.select){
                case 'widget1':
                    var data = 'widgetid=1'+ '&areaid=5';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload5 = data;
                            $scope.progress = false;
                        });
                    $scope.input5= true;
                    $scope.select5 = false;
                    widgetid5 = 1;

                    break;
                case 'widget2':
                    var data = 'widgetid=2'+ '&areaid=5';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload5 = data;
                            $scope.progress = false;
                        });
                    $scope.input5= true;
                    $scope.select5 = false;
                    widgetid5 = 2;
                    break;
                case 'widget3':
                    var data = 'widgetid=3'+ '&areaid=5';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload5 = data;
                            $scope.progress = false;
                        });
                    $scope.input5= true;
                    $scope.select5 = false;
                    widgetid5 = 3;
                    break;
                case 'widget4':
                    var data = 'widgetid=4'+ '&areaid=5';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload5 = data;
                            $scope.progress = false;
                        });
                    $scope.input5= true;
                    $scope.select5 = false;
                    widgetid5 = 4;
                    break;
                case 'widget5':
                    var data = 'widgetid=5'+ '&areaid=5';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload5 = data;
                            $scope.progress = false;
                        });
                    $scope.input5= true;
                    $scope.select5 = false;
                    widgetid5 = 5;
                    break;
            }

        }
        this.selecta6 = function () {
            $scope.progress = true;
            switch (this.inputData.select){
                case 'widget1':
                    var data = 'widgetid=1'+ '&areaid=6';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload6 = data;
                            $scope.progress = false;
                        });
                    $scope.input6= true;
                    $scope.select6 = false;
                    widgetid6 = 1;

                    break;
                case 'widget2':
                    var data = 'widgetid=2'+ '&areaid=6';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload6 = data;
                            $scope.progress = false;
                        });
                    $scope.input6= true;
                    $scope.select6 = false;
                    widgetid6 = 2;
                    break;
                case 'widget3':
                    var data = 'widgetid=3'+ '&areaid=6';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload6 = data;
                            $scope.progress = false;
                        });
                    $scope.input6= true;
                    $scope.select6 = false;
                    widgetid6 = 3;
                    break;
                case 'widget4':
                    var data = 'widgetid=4'+ '&areaid=6';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload6 = data;
                            $scope.progress = false;
                        });
                    $scope.input6= true;
                    $scope.select6 = false;
                    widgetid6 = 4;
                    break;
                case 'widget5':
                    var data = 'widgetid=5'+ '&areaid=6';
                    $http({
                        method: 'POST',
                        url: '../Services/loadDataEditPage.php',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $log.debug("Da lay du lieu");
                            $scope.dataload6 = data;
                            $scope.progress = false;
                        });
                    $scope.input6= true;
                    $scope.select6 = false;
                    widgetid6 = 5;
                    break;
            }

        }


        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;

            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }

        function buildToggler(navID) {
            return function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            };
        }
    }])
