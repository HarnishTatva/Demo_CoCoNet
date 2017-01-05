/// <reference path='../../_all_harshal.ts' />

module HarshalDemo {
    export interface ICOCOScope_harshal extends ng.IScope {
        users: UserMaster_harshal[];
        
    	user : UserMaster_harshal;
        vm: any;
    
    	profileimagefile : any;
    	hobbies : string[];
    
    	userForm_harshal : any;
        
        status : any;
    }
}