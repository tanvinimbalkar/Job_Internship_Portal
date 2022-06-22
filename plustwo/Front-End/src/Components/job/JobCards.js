import React from 'react'
import {Helmet} from "react-helmet";
import './JobCard.css'

export const JobCards = ({job,handleApplication,isOpenForm}) => {

    const handleApply = (jid) =>
    {
        handleApplication(jid)
        isOpenForm()
    }

    return (
        <>
            <div className="col-12 col-md-4 col-sm-12 mb-3">
                    <div className="card">

                    <div class="body">
                            <h5 className="card-title"><span className="fw-bold">Company :</span> {job.employer_name}</h5>
                            <p className="card-text"><span className="fw-bold">Primary Skills :</span> {job.primary_skill}</p>
                            <p className="card-text"><span className="fw-bold">Experience :</span> {job.experience_level}</p>
                            <p className="card-text"><span className="fw-bold">Role Start :</span> {job.role_start_date}</p>
                            
                    <details>
                    <summary>
                    <span id="open">Read more</span> 
                    <span id="close">Collapse</span> 
                    </summary>
                    
                    <p>
                            <p className="card-text"><span className="fw-bold">Additional Skills :</span> {job.other_skills}</p>
                            <p className="card-text"><span className="fw-bold">Company's Website :</span> {job.employer_website}</p>
                            <p className="card-text"><span className="fw-bold">Job Description :</span> {job.job_description}</p>  
                            <p className="card-text"><span className="fw-bold">Salary :</span> {job.target_salary}</p>

                           {/* <p className="card-text"><span className="fw-bold">Openings :</span> {job.number_of_open_demands}</p> */}

                            <button type="button" className="btn btn-dark" onClick={() => handleApply(job.jid)}>Apply</button>
                            
                    </p>
                    </details>
                    </div>

                    </div>
                </div>
                
        </>
    )
}