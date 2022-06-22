import React from 'react'
import axios from 'axios'

const baseUrl = process.env.REACT_APP_HEROKU_URL;

export default function AppliedtoJobDetails({jDetails}) {

    const [jidDetails,setJidDetails]=React.useState({})

    async function getjob(){

        await axios.get(baseUrl + '/getjob?jid='+jDetails).then(
            (res)=>{
                console.log(res);
                setJidDetails(res.data)
            }
        )

    }
    React.useEffect(()=>{

        console.log("In apply to job");
        getjob();
        console.log(jDetails);
    },[])
    
    
    return (
        <div className="container border border-dark rounded mt-3 mb-3">
            <h3>Job Details</h3>
            <p><span  className="me-3 bold">Job id : </span>{jidDetails.jid}</p>
            <p><span  className="me-3 bold">Company Name : </span>{jidDetails.employer_name}</p>
            <p><span  className="me-3 bold">Company Description : </span>{jidDetails.job_description}</p>
            <p><span  className="me-3 bold">Primary Skills : </span>{jidDetails.primary_skill}</p>
            <p><span  className="me-3 bold">Additional Skills : </span>{jidDetails.other_skills}</p>
            <p><span  className="me-3 bold">Role Start : </span>{jidDetails.role_start_date}</p>
            <p><span  className="me-3 bold">Salary : </span>{jidDetails.target_salary}</p>
        </div>
    )
}
