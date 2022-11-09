import React, { useState } from 'react';
import './App.css';
import {HashRouter as Router} from "react-router-dom";
import {Routes, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import JobDetailed from './pages/JobDetailed';
import {createContext, useMemo, useEffect} from "react";
import { JobDataTypes, JobIndexTypes, SaveToListTypes } from './interfaces/Interfaces';

export const SaveToListContext = createContext<SaveToListTypes>({
  isMarked: false,
  setIsMarked: () =>  {},
})
export const JobIndexContext = createContext<JobIndexTypes>({
  jobIndex: 0,
  setJobIndex: () =>  {},
})

function  App() {

  const [isMarked, setIsMarked] = useState<boolean> (false);

  const SaveToListMemo = useMemo(
    () => ({isMarked, setIsMarked}),
    [isMarked]
  )
  const [jobIndex, setJobIndex] = useState<number>(0);

  const JobIndexMemo = useMemo(
    () => ({jobIndex, setJobIndex}),
    [jobIndex]
  )

  const url: string ="https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"

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
  }, [])

  if (loading) return <div>Loading ...</div>
   
  return (
    <div className='bg-light-blue-app-bg p-10 flex  font-normal'>
      <Router>
        <SaveToListContext.Provider value={SaveToListMemo}>
        <JobIndexContext.Provider value={JobIndexMemo} >
          <Routes>
            <Route path="/" element={<Jobs loading={false} jobData={jobData} />}></Route>
            <Route path="/jobdetailed" element={<JobDetailed pictures={jobData[jobIndex]?.pictures}
                title={jobData[jobIndex]?.title} name={jobData[jobIndex]?.name} email={jobData[jobIndex]?.email}
                date={jobData[jobIndex]?.createdAt} salary={jobData[jobIndex]?.salary}
                description={jobData[jobIndex]?.description} benefits={jobData[jobIndex]?.benefits}
                employmentType={jobData[jobIndex]?.employment_type} location={jobData[jobIndex]?.location} 
                phone={jobData[jobIndex]?.phone} adress={jobData[jobIndex]?.address}/>} />
          </Routes>
          </JobIndexContext.Provider >
        </SaveToListContext.Provider>
        </Router>
    </div>
  );
}

export default App;
