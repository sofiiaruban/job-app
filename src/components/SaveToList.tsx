import { useState} from "react";
import Bookmark from "../assets/Bookmark";

function SaveToList({index, className} : {index?: number | undefined,
                    className?: string}) {
  
  const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("storedMarkedList") || "[]"));

  const isFavourited = storageItem.includes(index);
 // localStorage.clear();

  function clickHandler() {
      if (!isFavourited) {
      const newStorageItem = [...storageItem, index]
      setStorageItem(newStorageItem);
      localStorage.setItem("storedMarkedList", JSON.stringify(newStorageItem));
      } else {

      const newStorageItem = storageItem.filter((savedIndex: number | undefined) => savedIndex !== index);
      setStorageItem(newStorageItem);
      localStorage.setItem("storedMarkedList", JSON.stringify(newStorageItem));
    }
  }
  
 return (
      <Bookmark className={`${(isFavourited) ? "fill-grey-fill" : "" } ${className}`} onClick={clickHandler}/>
 )
}
export default SaveToList;


