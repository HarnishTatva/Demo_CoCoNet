/// <reference path='../../_all.ts' />
var Demo;
(function (Demo) {
    'use strict';
    var UserServiceChirag = (function () {
        function UserServiceChirag(http, $q) {
            var _this = this;
            this.success = function (response) { return response.data; };
            this.fail = function (error) {
                var msg = error.data.description;
                var reason = 'query for people failed.';
                return _this.$q.reject(msg);
            };
            this._http = http;
            this.$q = $q;
        }
        UserServiceChirag.prototype.GetEditPage = function (id) {
            return this._http.get('http://localhost:8898/userChirag/editUser/' + id)
                .then(this.success)["catch"](this.fail);
        };
        UserServiceChirag.prototype.GetUserByID = function (id) {
            return this._http.get('http://localhost:8898/userChirag/getUser/' + id)
                .then(this.success)["catch"](this.fail);
        };
        UserServiceChirag.prototype.GetUserList = function () {
            return this._http.get('http://localhost:8898/userChirag/getUserList')
                .then(this.success)["catch"](this.fail);
        };
        UserServiceChirag.prototype.SaveUser = function ($scope, userMaster) {
            return this._http.post("/userChirag/saveUser/", userMaster)
                .then(this.success)["catch"](this.fail);
        };
        UserServiceChirag.prototype.UpdateUser = function ($scope, userMaster) {
            return this._http.post("/userChirag/updateUser/", userMaster)
                .then(this.success)["catch"](this.fail);
        };
        UserServiceChirag.prototype.DeleteUser = function ($scope, id) {
            return this._http.post('/userChirag/deleteUser', id)
                .then(this.success)["catch"](this.fail);
        };
        return UserServiceChirag;
    }());
    UserServiceChirag.$inject = ["$http", "$q"];
    Demo.UserServiceChirag = UserServiceChirag;
    angular.module("Demo").service("userServiceChirag", UserServiceChirag);
})(Demo || (Demo = {}));
