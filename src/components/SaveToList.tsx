import bookmark from "../assets/bookmark.svg";
import { useContext, useState} from "react";
import { JobIndexContext, SaveToListContext } from "../App";
import Bookmark from "../assets/Bookmark";
import { IndexInfo } from "typescript";
//import { MarkListTypes } from "../interfaces/Interfaces";


function SaveToList({index, className} : {index?: number,
className?: string}) {
  const {isMarked, setIsMarked} = useContext(SaveToListContext)
  // const [isMarked, setIsMarked] = useState<boolean>(false);
   //const {jobIndex} = useContext(JobIndexContext);
  //const [markedList, setMarkedList] = useState<Array<number>>([]);
//
  //const storedMarkedList = JSON.parse(localStorage.getItem("markedList") || ""); 
  // console.log(storedMarkedList);
  //function updateList() {
  // setMarkedList((currentList) => [...currentList, index]);
  //}

   function clickHandler() {
      
    setIsMarked((isMarked) ? false : true);
   
   //setMarkedList((currentList) => [...currentList, index]);
   //updateList()
   //
   //console.log(index);
   //console.log("click")
   //console.log(markedList);
   //localStorage.setItem("storedMarkedList", JSON.stringify(markedList));

   }
  
//(isMarked) ? "fill-grey-fill" : "" }
 return (
      <Bookmark className={`${(isMarked) ? "fill-grey-fill" : "" } ${className}`} onClick={clickHandler}/>
 )
}
export default SaveToList;

function updateList() {
   throw new Error("Function not implemented.");
}
