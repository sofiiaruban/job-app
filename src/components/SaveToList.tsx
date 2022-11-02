import bookmark from "..assets/bookmark.svg";
import {useState, useContext} from "react";
import { SaveToListContext } from "../App";


function SaveToList() {
   const {isMarked, setIsMarked} = useContext(SaveToListContext)

    function clickHandler() {
        
    //also i need to fill the bookmark into grey color
     setIsMarked((!isMarked) ? false : true);
    }

 return (
    <img src={bookmark} onClick={clickHandler}></img>
    
 )
}
export default SaveToList;