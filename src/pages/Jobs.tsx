import { MouseEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import SaveToList from "../components/SaveToList";
import StarRating from "../components/StarRating";
import { JobDataTypes } from "../interfaces/Interfaces";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import PrevNextBtn from "../components/buttons/PrevNextBtn";

function Jobs({loading, jobData}:{loading: boolean, jobData: JobDataTypes | any}) {
    const jobsPerPage:number = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [jobOffset, setJobOffset] = useState(1);

    const currentJobs = useMemo(() => {
        return jobData.slice((jobOffset-1) * jobsPerPage, jobOffset *jobsPerPage)
    }, [ jobOffset])

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        const target = Number(e.currentTarget.textContent);
        setJobOffset(target);
        setCurrentPage(target);
    }

     return (
        <div className="mx-auto bg-light-blue-app-bg py-10 px-20">
            {!loading && (
                <>
                    <ul className="mb-10"> {currentJobs.map((
                        job: {
                            pictures: string[];
                            title: string;
                            name: string;
                            createdAt: string;
                            id: string;
                        }, index: number
                    ) => (
                        <li key={job.id} className="px-4 py-6 mb-4 rounded-lg bg-white drop-shadow-md reletive">
                            <Link to="/jobdetailed">
                                <JobCard src={job.pictures[0]} title={job.title} name={job.name} date={job.createdAt} index={(jobOffset > 1 ) ? (index+(jobOffset-1)*jobsPerPage): index} />
                            </Link>   
                            <SaveToList className="absolute top-6 right-4" index={(jobOffset > 1 ) ? (index+(jobOffset-1)*jobsPerPage) : index}/> 
                            <StarRating className="flex absolute top-16 right-52"/>
                        </li>
                    ))}
                    </ul>
                    <div className="flex bg-white rounded-xl max-w-sm mx-auto justify-center">
                    <PrevNextBtn classes={"bg-left border-r-2 mr-3 pt-6 pb-2"} handleClick={()=> {}} icon={arrowLeft}/>
                    <Pagination handleClick={handleClick} jobsLen={jobData.length} jobsPerPage={jobsPerPage} currentPage={currentPage}/>
                    <PrevNextBtn classes={"bg-right ml-3 pt-6 pb-2 border-l-2"} handleClick={()=> {}} icon={arrowRight}/>
                    </div>
                 </>
            )}     
        </div>
    )

}

export default Jobs;
