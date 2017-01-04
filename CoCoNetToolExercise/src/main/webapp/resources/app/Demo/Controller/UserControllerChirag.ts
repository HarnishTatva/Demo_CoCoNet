/// <reference path='../../_all.ts' />

module Demo {
    export class UserControllerChirag extends BaseController {
        'use strict';

        userMasterList: Array<UserMasterChirag>;
        user : UserMasterChirag;
        

        public static $inject = [
            '$scope',
            '$location',
            'userServiceChirag',
            '$window',
            '$modal',
            '$filter',
            'fileUploadServiceChirag'
        ];
        
        
        

        /// Conctructor
        constructor(private $scope: ICOCOScope, private $location: ng.ILocationService, private userServiceChirag: IUserServiceChirag,private $window: ng.IWindowService,private $modal: ng.ui.bootstrap.IModalService, private $filter: ng.IFilterService, private fileUploadServiceChirag: IFileUploadServiceChirag) {
            super($scope);
           $scope.vm = this;
           this.userMasterList = this.$scope.userMasterList = new Array<UserMasterChirag>();
           this.userServiceChirag.GetUserList().then((data) => {
		        this.userMasterList = data;
		        $scope.vm = data;
		      });
           
           $scope.$watch('user.birthdate', function (newValue:any) {
               if (newValue != undefined) {                    
                   $scope.dob = $filter('date')(new Date(newValue), 'MM/dd/yyyy');
               }
           });
        }

      
        
       
        
        onSave(flag : any) {
            	if(flag == 1){
            		
            	
	            		var file = this.$scope.myFile;
	                    if (file != null || file != undefined) {
	                        var name = file.name;
	                        var uploadUrl = "/userChirag/fileUpload";
	                        this.fileUploadServiceChirag.uploadFile(file, uploadUrl);
	                        this.$scope.user.imageFilePath = name;
	                    }
            			this.userServiceChirag.SaveUser(this.$scope, this.$scope.user).then((data) => {
            				if(data == 'success'){
            					this.$window.location.href="/userChirag/userList";
            		    	}
                       	});
	            } else if (flag == 0) {
	            		
	            		this.userServiceChirag.UpdateUser(this.$scope, this.$scope.user).then((data) => {
            				if(data == 'success'){
            					this.$window.location.href="/userChirag/userList";
            		    	}
                       	});
	            }
        }
        
        
        onEdit(id : any) {
        	if(id != null) {
        		this.userServiceChirag.GetEditPage(id).then((data) => {
    		        this.$window.location.href="/userChirag/addUser?userid="+data;
    		      });
        	}
        }
        
        
        
        onDelete(id:number) {
           
    		
            var options: ng.ui.bootstrap.IModalSettings = {
                    template:'<div class="modal-header"><h3 class="modal-title">Confirm</h3></div><div class="modal-body">Are you sure you want to delete this widget ?</div><div class="modal-footer"><button class="btn btn-primary" type="button" ng-click="ctrl.save(' + id + ')">Ok</button><button class="btn btn-default" type="button" ng-click="ctrl.cancel()">Cancel</button></div>',
                    controller: 'userPopupControllerChirag as ctrl',
                    windowClass: 'app-modal-window',
                    resolve: {}
                };

                this.$modal.open(options).result
                    .then(updatedItem => this.onConfirm(updatedItem));
    		
    	}
    	
    	onConfirm(item:any):void {}
        
       
        // Init
        public initialiseEditPage(id:number) {
        	this.userServiceChirag.GetUserByID(id).then((data) => {
		       this.$scope.user = data;
		      });
        }

    }

    angular.module("Demo").controller("userControllerChirag", UserControllerChirag);
}