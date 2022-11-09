

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import SaveToList from "../components/SaveToList";
import { JobDataTypes } from "../interfaces/Interfaces";

function Jobs({loading, jobData}:{loading: boolean, jobData: JobDataTypes | any}) {
    
     return (
        <div className="mx-auto">
            {!loading && (
                <>
                    <ul className="jobs"> {jobData?.map((
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
                                <JobCard src={job.pictures[0]} title={job.title} name={job.name} date={job.createdAt} index={index} />
                            </Link>   
                            <SaveToList className="absolute top-6 right-4" index={index}/> 
                        </li>

                    ))}
                    </ul>
                    
                    <Pagination />
                 </>
            )} 
            
        </div>
    )

}

export default Jobs;