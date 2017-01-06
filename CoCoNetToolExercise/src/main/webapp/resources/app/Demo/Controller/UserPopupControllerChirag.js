/// <reference path='../../_all.ts' />
var Demo;
(function (Demo) {
    var UserPopupControllerChirag = (function () {
        function UserPopupControllerChirag($modalInstance, http, $q, $window) {
            this.$modalInstance = $modalInstance;
            this.$window = $window;
            this._http = http;
            this.$q = $q;
        }
        UserPopupControllerChirag.prototype.save = function (id) {
            this._http.post("http://localhost:8898/userChirag/deleteUser", id);
            //this.$modalInstance.close(this.item);
            this.$window.location.href = "/userChirag/userList/#/?status=delete";
        };
        UserPopupControllerChirag.prototype.cancel = function () {
            this.$modalInstance.dismiss('cancel');
        };
        UserPopupControllerChirag.$inject = ['$modalInstance', "$http", "$q", '$window'];
        return UserPopupControllerChirag;
    }());
    Demo.UserPopupControllerChirag = UserPopupControllerChirag;
    angular.module("Demo").controller("userPopupControllerChirag", UserPopupControllerChirag);
})(Demo || (Demo = {}));
