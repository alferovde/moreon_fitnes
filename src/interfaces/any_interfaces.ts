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