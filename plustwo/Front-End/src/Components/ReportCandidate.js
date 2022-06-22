import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import DataTableReport from "./DataTableReport";
import JobReport from "./JobReport";
import Apllicants from "./Apllicants";
import axios from "axios";

const baseUrl = process.env.REACT_APP_HEROKU_URL;

export default function ReportCandidate() {
  const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   const [heading, setHeading] = useState('');
   const [isEmp, setIsEmp] = useState(false);
  

    useEffect(()=>{
      // localStorage.removeItem('jobid');
      // localStorage.removeItem('appl_email');
      if(localStorage.isEmployer == 'true'){
        setIsEmp(true);
        setHeading('Job postings');
      }else{
        setIsEmp(false);
        setHeading('Applications');
      }
        // setIsLoading(true);
        // axios
        // .get(baseUrl + `/gettransaction?email=` + localStorage.platform_email)
        // .then(res => {
        //   //console.log(res.data)
        //   const rd = res.data;
        //   setData(rd);
        // })
        // setIsLoading(false);
    }, []);

    async function getData(e) {
      // if(localStorage.isEmployer == 'true'){
      //   setIsEmp(true);
      //   // setHeading('Job postings');
      // }else{
      //   setIsEmp(false);
      //   // setHeading('Applications');
      // }
        setIsLoading(true);
        axios
        .get(baseUrl + `/gettransaction?email=` + localStorage.platform_email)
        .then(res => {
          //console.log(res.data)
          const rd = res.data;
          setData(rd);
        })
        setIsLoading(false);
    }

    return(
        <>
          <div className="container mt-2">
          <span
                      style={{ paddingTop: "10px" }}
                      className="btn btn-primary"
                      id="inputGroup-sizing-sm"
                      onClick={getData}
                    >
                      Get Data
                    </span>
                    </div>
          <div>
          <h3 className="mt-5 mb-5" style={{textAlign: "center"}}>Your {heading}</h3>
          {isLoading ? (
          <div className="d-flex justify-content-center">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          <div className="container mt-5">
            {isEmp ? (
              <JobReport data = {data}/>
            ):(
              <DataTableReport data = {data}/>
            )
            }
      </div>
        )}

          </div>
        
        
        </>
    )
}