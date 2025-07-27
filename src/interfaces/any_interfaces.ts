import {type Dispatch, type SetStateAction } from "react";

export interface IWindowSize{
    width:number,
    height:number
}

export interface IProps {
    myVar: boolean;
    setMyVar?: Dispatch<SetStateAction<boolean>>;
    width:number
  }




  export interface StoksIArray {
    stocks_titles?:StoksTitle[],
    stocks_imgs?:StoksImages[]

  }


    export interface  StoksImages{

    
          id?: number|string, 
          img?:string
  

    
  }

     export interface  StoksTitle{

    
     
        id: number|string, 
        title?:string, 
        created_at?:string,
        updated_at?:string

  

    
  }