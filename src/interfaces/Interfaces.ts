import React, { Dispatch } from "react";


export interface JobDataTypes {
    [index: number]: {
     id : string ,
     name :  string ,
     email : string,
     phone : string,
     title : string,
     salary : string,
     address :  string,
     benefits : Array<string>,
     location : {
       lat :  number,
       long : number
    },
     pictures : Array<string>,
     createdAt :  string,
     updatedAt :  string,
     description :  string ,
     employment_type : Array<string>
  },
}

export interface JobIndexTypes {
   jobIndex: number, 
   setJobIndex: Dispatch<React.SetStateAction<number>>
   
}
