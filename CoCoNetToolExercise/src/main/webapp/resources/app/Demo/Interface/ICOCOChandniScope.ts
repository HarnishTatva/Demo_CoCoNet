/// <reference path='../../_allChandni.ts' />

module DemoChandni {
    export interface ICOCOChandniScope extends ng.IScope {
        //====================================
        sortType: string; // set the default sort type
        sortReverse: boolean;  // set the default sort order
        
        viewby: number;
        totalItems: number;
        currentPage: number;
        itemsPerPage: number;
        maxSize: number; //Number of pager buttons to show
        profileimagefile: any;
        
        //=====================================
        userChandni: UserChandni;
        userChandniList: UserChandni[];
        
        //=====================================
        formData: any;
        genderOptions: any;
        cityOptions: any;
        hobbiesOption: any;
        arrayHobbies: any;
        flag: any;
        statusMessage: string;
        statusMessageFlag: boolean;
    }
}