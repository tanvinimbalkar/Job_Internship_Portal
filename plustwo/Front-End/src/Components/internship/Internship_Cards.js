import React from 'react'
// import {Helmet} from "react-helmet";
import './Internship_Card.css'

export const Internship_Cards = ({internship,handleApplication,isOpenForm}) => {

    const handleApply = (iid) =>
    {
        handleApplication(iid)
        isOpenForm()
    }

    return (
        <>
            <div className="col-12 col-md-4 col-sm-12 mb-3">
                    <div className="card">

                    <div class="body">
                            <h5 className="card-title"><span className="fw-bold">Company :</span> {internship.employer_name}</h5>
                            <p className="card-text"><span className="fw-bold">Primary Skills :</span> {internship.primary_skill}</p>
                            <p className="card-text"><span className="fw-bold">Experience :</span> {internship.experience_level}</p>
                            <p className="card-text"><span className="fw-bold">Role Start :</span> {internship.role_start_date}</p>
                            
                    <details>
                    <summary>
                    <span id="open">Read more</span> 
                    <span id="close">Collapse</span> 
                    </summary>
                    
                    <p>
                            <p className="card-text"><span className="fw-bold">Additional Skills :</span> {internship.other_skills}</p>
                            <p className="card-text"><span className="fw-bold">Company's Website :</span> {internship.employer_website}</p>
                            
                            
                            { /*<p className="card-text"><span className="fw-bold">Internship Description :</span> {Internship.Internship_description}</p> */} 
                                <p className="card-text"><span className="fw-bold">Location :</span> {internship.ilocation}</p> 
                            
                          {/*   <p className="card-text"><span className="fw-bold">Salary :</span> {internship.target_salary}</p>  */}

                           {/* <p className="card-text"><span className="fw-bold">Openings :</span> {internship.number_of_open_demands}</p> */}

                            <button type="button" className="btn btn-dark" onClick={() => handleApply(internship.iid)}>Apply</button>
                            
                    </p>
                    </details>
                    </div>

                    </div>
                </div>
                
        </>
    )
}