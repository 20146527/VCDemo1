angular
    .module('DashBoard', ['ngMaterial'])
    .controller('DashBoardController', ['$scope', '$timeout', '$mdSidenav', '$log', '$http', function ($scope, $timeout, $mdSidenav, $log, $http) {
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

        $scope.isSpecial =false;

        $scope.addNewNoteShow = false;
        $scope.addMainShow = true;
        $scope.progress = false;
        $scope.addNewNote = function () {
            $scope.addNewNoteShow = true;
            $scope.addMainShow = false;

        }

        $scope.closeAddNote = function () {
            $scope.addNewNoteShow = false;
            $scope.addMainShow = true;
            //$log.debug('Huy them ghi chu moi');

        }
        d =[{"title":"","checkbox":"","select":"","widgetid":""}];
        $scope.dataload;
        $scope.dataload1 = d;
        $scope.dataload2 = d;
        // $scope.widget1 = function () {
        //     $log.debug("nhan vao Widget 1 roi");
        //     loadDB(1);
        //     $scope.dataload1 = $scope.dataload;
        // }
        // $scope.widget2 = function () {
        //     loadDB(2)
        //     $scope.dataload2 = $scope.dataload;
        // }
        $scope.widget1 = function () {
            $scope.progress = true;
            var data = 'widgetid=1';
            $http({
                method: 'POST',
                url: '../Services/loadDB.php',
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    $scope.dataload1 = data;
                    $scope.progress = false;
                })
        }
        $scope.widget2 = function () {
            $scope.progress = true;
            var data = 'widgetid=2';
            $http({
                method: 'POST',
                url: '../Services/loadDB.php',
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    $log.debug(data);
                    $scope.dataload2 = data;
                    $scope.progress = false;
                })
        }

        this.saveForm = function () {
            var title = this.inputData.title;
            var checkbox = this.inputData.checkbox;
            var select = this.inputData.select;
            var widgetid = 1;
            saveDB(title, checkbox, select, widgetid);
        }
        this.saveForm2 = function () {
            $log.debug("Nhan vao Save 2");
            var title = this.inputData.title2;
            var checkbox = this.inputData.checkbox2;
            var select = this.inputData.select2;
            var widgetid = 2;
            saveDB(title, checkbox, select, widgetid);



        }
        function saveDB(title, checkbox, select, widgetid) {
            if(checkbox != true){
                checkbox= false;
            }else {
                checkbox = true;
            }
            var data = 'title=' + title + '&checkbox=' + checkbox + '&select=' +select + '&widgetid=' + widgetid;
            $http({
                method: 'POST',
                url: '../Services/saveDB.php',
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
        function loadDB(widgetid) {
            var data = 'widgetid='+widgetid;
            $log.debug("Chuan bi lay du lieu");
            // if($scope.dataload!= null){
            //     $scope.dataload = null;
            // }
            $http({
                method: 'POST',
                url: '../Services/loadDB.php',
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    $scope.dataload = data;
                    $log.debug("Da lay du lieu");
                })

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
