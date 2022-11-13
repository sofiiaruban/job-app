import starFilled from "../assets/star-filled.svg";
import starEmpty  from "../assets/star-empty.svg";
import { useState } from "react";

function StarRating({className}:{className?:string}) {
    const totalStars = 5;
    //const currentRate = 3;
    const [activeStars, setActiveStars] = useState<number>(0);

    function clickHandler(index:number) {
        setActiveStars(index+1);
    }

    return (
        <div className={className}>
        {[...Array(5)].map((star, index) => (         
          <img className = "" key = {index} src={ index < activeStars ? starFilled : starEmpty} onClick={()=>clickHandler(index)}/>       
        ))}
        </div>
    )

}
export default StarRating;

