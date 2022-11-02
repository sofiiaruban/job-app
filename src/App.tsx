import React from 'react';
import './App.css';
import {HashRouter as Router} from "react-router-dom";
import {Routes, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import JobDetailed from './pages/JobDetailed';
import {createContext, useMemo, useState} from "react";
import { SaveToListTypes } from './interfaces/Interfaces';

export const SaveToListContext = createContext<SaveToListTypes>({
  isMarked: false,
  setIsMarked: () =>  {},
})


function  App() {

  const [isMarked, setIsMarked] = useState<boolean>(false);

  const SaveToListMemo = useMemo(
    () => ({isMarked, setIsMarked}),
    [isMarked]
  )
  return (

   <Router>
    <SaveToListContext.Provider value={SaveToListMemo}>
      <Routes>
        <Route path="/" element={<Jobs />}></Route>
        <Route path="/jobdetailed" element={<JobDetailed />} />
      </Routes>
    </SaveToListContext.Provider>
    </Router>
  );
}

export default App;
