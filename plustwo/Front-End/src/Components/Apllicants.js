import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ApplicantTable from "./ApplicantsTable";


const baseUrl = process.env.REACT_APP_HEROKU_URL;

export default function Apllicants() {
  const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   const [heading, setHeading] = useState('');


  useEffect(()=>{
      setHeading(localStorage.getItem('jobid'));
      setIsLoading(true);
      axios
      .get(baseUrl + `/getapplicants?jobid=` + localStorage.jobid)
      .then(res => {
        //console.log(res.data)
        const rd = res.data;
        setData(rd);
      })
      setIsLoading(false);
  }, []);

  return (
    <div className="container">
      <div className="mt-3"><a  href="/report"> Back to Report</a></div>
    <h3 className="mt-5 mb-5" style={{textAlign: "center"}}>Applicants for Job ID - {heading}</h3>
    {isLoading ? (
    <div className="d-flex justify-content-center">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  ) : (
    <div className="container mt-5">
      <ApplicantTable data = {data}/>
</div>
  )}

    </div>
  );
}
