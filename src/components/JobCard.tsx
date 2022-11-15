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
    const jobTitle = title.replace(/\.$/, "");

    return (
        <div className="flex relative font-normal ">
            <div onClick={clickHandler} className="flex max-sm:mt-8">
                <div className="max-xl:w-30">
                <img className = "object-fill w-20 h-20 max-xl:w-16  max-xl:h-16 max-sm:mr-2 rounded-full ml-2" src={src}/>
                </div>
                <div className="flex-colm ml-4 mb-2  max-sm:ml-5">
                    <h2 className="text-dark-blue-text text-xl  max-xl:text-lg font-normal max-w-2xl max-lg:w-2/5 max-sm:w-full">{jobTitle}</h2>
                    <p className="text-light-grey-txt  text-base">Department name • {name}</p>
                    <div className="flex text-base">
                            <img className="mr-1"src={greyMarker}/> 
                            <span className="text-light-grey-txt">Vienna, Austria</span>
                    </div>
                </div>   
            </div>
        <PostedDay className="absolute bottom-1 right-4 text-light-grey-txt max-sm:top-1 max-sm:right-5" date={date}/>
        </div>

    );
}
export default JobCard;
