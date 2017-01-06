/// <reference path='../../_all.ts' />

module Demo {
    export interface ICOCOScope extends ng.IScope {
    	userMasterList: Array<UserMasterChirag>;
        user : UserMasterChirag;
        vm: any;
    	myFile : any;
    	hobbies : string[];	
    	isImageRequired: boolean;
    }
}
