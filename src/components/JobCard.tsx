import { useContext } from "react";
import { JobIndexContext } from "../App";
import PostedDay from "./PostedDay";
import SaveToList from "./SaveToList";
import greyMarker from "../assets/grey-marker.svg";
function JobCard({src, title, name, date, index}:{src:string, title:string, name:string, date: string, index:number }) {

    const {jobIndex, setJobIndex} = useContext(JobIndexContext)
    
    function clickHandler() {
        setJobIndex(index);
    }

    return (
        <div className="flex relative font-normal">
            <div onClick={clickHandler} className="flex ">
                <img className = "w-20 h-20 rounded-full mr-4" src={src}/>
                <div className="flex-col mb-2">
                    <h2 className="text-grey-fill text-xl font-bold w-3/5">{title}</h2>
                    <p className="text-light-grey-txt  text-base">Department name • {name}</p>
                    <div className="flex text-base">
                            <img className="mr-1"src={greyMarker}/> 
                            <span className="text-light-grey-txt">Vienna, Austria</span>
                    </div>
                </div>   
            </div>
        <PostedDay className="absolute bottom-2 right-4 text-light-grey-txt" date={date}/>
        </div>

    );
}
export default JobCard;
