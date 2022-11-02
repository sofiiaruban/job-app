

import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { JobDataTypes } from "../interfaces/Interfaces";

function Jobs() {
    const url: string ="https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
    const [jobData, setJobData] = useState<JobDataTypes>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=> {
        async function fetchData() {
            setLoading(true);
            try {
                const response= await fetch(url);
                const results = await response.json();
                setJobData(results);

            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
        console.log(Array.isArray(jobData));
        console.log(typeof jobData)
    }, [])

    
    return (
        <div>
            {loading && (
                <div>Loading ...</div>
            )}
            {!loading && (
                <ul className="jobs"> { 
                    jobData?.map((
                        job: {
                            pictures: string[]; 
                            title: string; 
                            name: string; 
                            createdAt: string; 
                        }
                            ) => (
                            <JobCard 
                            key={job.name} src={job.pictures[0]} title={job.title} name={job.name} date={job.createdAt}/>
                            ))
                }
            {/*JSON.stringify(jobData)*/}
                </ul>
            )}
        </div>
    )

}

export default Jobs;