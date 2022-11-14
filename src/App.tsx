import React, { useState } from 'react';
import './App.css';
import {HashRouter as Router} from "react-router-dom";
import {Routes, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import JobDetailed from './pages/JobDetailed';
import {createContext, useMemo, useEffect} from "react";
import { JobDataTypes, JobIndexTypes} from './interfaces/Interfaces';


export const JobIndexContext = createContext<JobIndexTypes>({
  jobIndex: 0,
  setJobIndex: () =>  {},
})

function  App() {

  const [jobIndex, setJobIndex] = useState<number>(0);

  const JobIndexMemo = useMemo(
    () => ({jobIndex, setJobIndex}),
    [jobIndex]
  )

  const url: string ="https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

  const [jobData, setJobData] = useState<JobDataTypes>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(()=> {
      async function fetchData() {
          setLoading(true);
          try {
              const response= await fetch(url);
              const results = await response.json();
              setJobData(results);

          } catch (error) {
              setError(true);
          }
          setLoading(false);
      }
      fetchData();
  }, [])

  if (loading) return <div className='flex justify-center mt-60 text-3xl'>Loading ...</div>
  if (error) return <div className='flex justify-center mt-60 text-3xl'>Oops, something went wrong, please try again.</div>

  const job = jobData[jobIndex];

  return (
    <div className='font-normal'>
      <Router>
        <JobIndexContext.Provider value={JobIndexMemo} >
          <Routes>
            <Route path="/" element={<Jobs loading={false} jobData={jobData} />}></Route>
            <Route path="/jobdetailed" element={<JobDetailed pictures={job?.pictures}
                title={job?.title} name={job?.name} email={job?.email}
                date={job?.createdAt} salary={job?.salary}
                description={job?.description} benefits={job?.benefits}
                employmentType={job?.employment_type} location={job?.location} 
                phone={job?.phone} adress={job?.address} index={jobIndex}/>} />
          </Routes>
          </JobIndexContext.Provider >
        </Router>
    </div>
  );
}

export default App;
