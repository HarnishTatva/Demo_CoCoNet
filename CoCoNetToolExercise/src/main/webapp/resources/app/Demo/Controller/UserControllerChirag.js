/// <reference path='../../_all.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Demo;
(function (Demo) {
    var UserControllerChirag = (function (_super) {
        __extends(UserControllerChirag, _super);
        /// Conctructor
        function UserControllerChirag($scope, $location, userServiceChirag, $window, $modal, $filter, fileUploadServiceChirag) {
            var _this = _super.call(this, $scope) || this;
            _this.$scope = $scope;
            _this.$location = $location;
            _this.userServiceChirag = userServiceChirag;
            _this.$window = $window;
            _this.$modal = $modal;
            _this.$filter = $filter;
            _this.fileUploadServiceChirag = fileUploadServiceChirag;
            $scope.vm = _this;
            $scope.hobbies = [];
            $scope.isImageRequired = true;
            _this.userMasterList = _this.$scope.userMasterList = new Array();
            _this.userServiceChirag.GetUserList().then(function (data) {
                _this.userMasterList = data;
                $scope.vm = data;
            });
            return _this;
        }
        UserControllerChirag.prototype.selectHobbies = function (hobbies) {
            if (this.$scope.hobbies.indexOf(hobbies) > -1) {
                this.$scope.hobbies = this.$scope.hobbies.filter(function (x) { return x != hobbies; });
            }
            else {
                this.$scope.hobbies.push(hobbies);
            }
        };
        UserControllerChirag.prototype.onSave = function (flag) {
            var _this = this;
            this.user = this.$scope.user;
            var file = this.$scope.myFile;
            this.user.hobbies = this.$scope.hobbies.join(", ");
            if (file != null || file != undefined) {
                var name = file.name;
                var uploadUrl = "/userChirag/fileUpload";
                this.fileUploadServiceChirag.uploadFile(file, uploadUrl);
                this.user.imageFilePath = name;
            }
            if (flag == 1) {
                this.userServiceChirag.SaveUser(this.$scope, this.user).then(function (data) {
                    if (data == 'success') {
                        _this.$window.location.href = "/userChirag/userList";
                    }
                });
            }
            else if (flag == 0) {
                this.userServiceChirag.UpdateUser(this.$scope, this.user).then(function (data) {
                    if (data == 'success') {
                        _this.$window.location.href = "/userChirag/userList";
                    }
                });
            }
        };
        UserControllerChirag.prototype.onEdit = function (id) {
            var _this = this;
            if (id != null) {
                this.userServiceChirag.GetEditPage(id).then(function (data) {
                    _this.$window.location.href = "/userChirag/addUser?userid=" + data;
                });
            }
        };
        UserControllerChirag.prototype.onDelete = function (id) {
            var _this = this;
            var options = {
                template: '<div class="modal-header"><h3 class="modal-title">Confirm</h3></div><div class="modal-body">Are you sure you want to delete this widget ?</div><div class="modal-footer"><button class="btn btn-primary" type="button" ng-click="ctrl.save(' + id + ')">Ok</button><button class="btn btn-default" type="button" ng-click="ctrl.cancel()">Cancel</button></div>',
                controller: 'userPopupControllerChirag as ctrl',
                windowClass: 'app-modal-window',
                resolve: {}
            };
            this.$modal.open(options).result
                .then(function (updatedItem) { return _this.onConfirm(updatedItem); });
        };
        UserControllerChirag.prototype.onConfirm = function (item) { };
        // Init
        UserControllerChirag.prototype.initialiseEditPage = function (id) {
            var _this = this;
            this.userServiceChirag.GetUserByID(id).then(function (data) {
                _this.$scope.isImageRequired = false;
                _this.user = data;
                _this.$scope.user = data;
                _this.$scope.hobbies = _this.user.hobbies.split(", ");
                _this.user.birthdate = _this.$filter('date')(data.birthdate, 'yyyy-MM-dd');
            });
        };
        return UserControllerChirag;
    }(Demo.BaseController));
    UserControllerChirag.$inject = [
        '$scope',
        '$location',
        'userServiceChirag',
        '$window',
        '$modal',
        '$filter',
        'fileUploadServiceChirag'
    ];
    Demo.UserControllerChirag = UserControllerChirag;
    angular.module("Demo").controller("userControllerChirag", UserControllerChirag);
})(Demo || (Demo = {}));
