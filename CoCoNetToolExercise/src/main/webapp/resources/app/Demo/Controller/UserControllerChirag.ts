/// <reference path='../../_all.ts' />

module Demo {
    export class UserControllerChirag extends BaseController {
        'use strict';

        userMasterList: Array<UserMasterChirag>;
        user : UserMasterChirag;
        status : any;

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
           $scope.hobbies = [];
           
           $scope.isImageRequired = true;
           
           this.status = this.$location.search().status;
           if(!angular.isUndefined(this.status) && this.status != null && this.status != "") {
               this.$scope.status = this.status.trim();
           }
           
           
           this.userMasterList = this.$scope.userMasterList = new Array<UserMasterChirag>();
           this.userServiceChirag.GetUserList().then((data) => {
		        this.userMasterList = data;
		        $scope.vm = data;
		      });
          
        }

        
        
      
        
        selectHobbies(hobbies : string) {            
            if (this.$scope.hobbies.indexOf(hobbies) > -1) {
                this.$scope.hobbies = this.$scope.hobbies.filter(x => x != hobbies);
            }
            else {
                this.$scope.hobbies.push(hobbies);
            }
        }
        
        onSave(flag : any) {
        	
	    		this.user = this.$scope.user;
	    		var file = this.$scope.myFile;
	    		this.user.hobbies = this.$scope.hobbies.join(", "); 
	            if (file != null || file != undefined) {
	                var name = file.name;
	                var uploadUrl = "/userChirag/fileUpload";
	                this.fileUploadServiceChirag.uploadFile(file, uploadUrl);
	                this.user.imageFilePath = name;
	            }
	            
	            
            	if(flag == 1){            			
            			this.userServiceChirag.SaveUser(this.$scope, this.user).then((data) => {
            				if(data.success == 'success'){
            					this.$window.location.href="/userChirag/userList#/?status=save";
            		    	}else if(data.conflict == 'conflict'){
            		    		this.$window.location.href="/userChirag/userList#/?status=conflict";
            		    	}
                       	});
	            } else if (flag == 0) {
	            		this.userServiceChirag.UpdateUser(this.$scope, this.user).then((data) => {
            				if(data == 'success'){
            					this.$window.location.href="/userChirag/userList#/?status=update";
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
                    template:'<div class="modal-header"><h3 class="modal-title">Confirm</h3></div><div class="modal-body">Are you sure you want to delete this User ?</div><div class="modal-footer"><button class="btn btn-primary" type="button" ng-click="ctrl.save(' + id + ')">Ok</button><button class="btn btn-default" type="button" ng-click="ctrl.cancel()">Cancel</button></div>',
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
        		this.$scope.isImageRequired = false;
        		this.user = data;
        		this.$scope.user = data;
        		this.$scope.hobbies = this.user.hobbies.split(", ");
		        this.user.birthdate = this.$filter('date')(data.birthdate, 'yyyy-MM-dd');
		      });
        }

    }

    angular.module("Demo").controller("userControllerChirag", UserControllerChirag);
}