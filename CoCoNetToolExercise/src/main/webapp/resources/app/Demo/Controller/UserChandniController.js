/// <reference path='../../_allChandni.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DemoChandni;
(function (DemoChandni) {
    var UserChandniController = (function (_super) {
        __extends(UserChandniController, _super);
        /// Conctructor
        function UserChandniController($scope, $location, $window, $modal, userChandniService) {
            _super.call(this, $scope);
            this.$scope = $scope;
            this.$location = $location;
            this.$window = $window;
            this.$modal = $modal;
            this.userChandniService = userChandniService;
            this._window = $window;
            this.$scope.statusMessageFlag = false;
            var msg = localStorage.getItem("success");
            if (msg != "null") {
                localStorage.setItem("success", "null");
                this.$scope.statusMessage = msg;
                this.$scope.statusMessageFlag = true;
                setTimeout(function () {
                    this.$scope.statusMessageFlag = false;
                    this.$scope.$apply();
                }.bind(this), 3000);
            }
            this.userChandniService.GetUserList(this.$scope).then(function (data) {
                $scope.userChandniList = data;
                $scope.sortType = 'userFirstName'; // set the default sort type
                $scope.sortReverse = false; // set the default sort order
                //----------------------------------
                $scope.viewby = 5;
                $scope.totalItems = $scope.userChandniList.length;
                $scope.currentPage = 1;
                $scope.itemsPerPage = $scope.viewby;
                $scope.maxSize = 5; //Number of pager buttons to show
            });
        }
        // Init
        UserChandniController.prototype.Init = function () {
            _super.prototype.BaseInit.call(this);
        };
        UserChandniController.prototype.onDelete = function (id) {
            this.$modal.open({
                template: '<div class="modal-header"><h3 class="modal-title">Confirm</h3></div><div class="modal-body">Are you sure want to delete this record ?</div><div class="modal-footer"><button class="btn btn-primary" type="button" ng-click="modal.onConfirm(' + id + ')">Ok</button><button class="btn btn-default" type="button" ng-click="modal.close()">Cancel</button></div>',
                controller: 'modalInstanceChandniController',
                controllerAs: 'modal'
            });
        };
        UserChandniController.prototype.convertDate = function (timestamp) {
            var d = new Date(timestamp);
            var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
            return formattedDate;
        };
        UserChandniController.prototype.onEdit = function (id) {
            this._window.location.href = '/chandni/chandni-user-form?id=' + id;
        };
        UserChandniController.$inject = [
            '$scope',
            '$location',
            '$window',
            '$modal',
            'userChandniService',
        ];
        return UserChandniController;
    }(DemoChandni.BaseChandniController));
    DemoChandni.UserChandniController = UserChandniController;
    angular.module("DemoChandni").controller("userChandniController", UserChandniController);
})(DemoChandni || (DemoChandni = {}));
