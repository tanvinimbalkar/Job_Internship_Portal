import React from 'react'


export default function Appliedto_InternshipDetails({iidDetails}) {
    console.log(iidDetails)
    
    
    return (
        <div className="container border border-dark rounded mt-3 mb-3">
            <h3>Internship Details</h3>
            <p><span  className="me-3 bold">Internship id : </span>{iidDetails[0].iid}</p>
            <p><span  className="me-3 bold">Company Name : </span>{iidDetails[0].employer_name}</p> 

            <p><span  className="me-3 bold">Internship Description : </span>{iidDetails[0].internship_description}</p>

           {/* <p><span  className="me-3 bold">Company Description : </span>{jidDetails[0].internship_description}</p> */}
            <p><span  className="me-3 bold">Primary Skills : </span>{iidDetails[0].primary_skill}</p>
            <p><span  className="me-3 bold">Additional Skills : </span>{iidDetails[0].other_skills}</p>
            <p><span  className="me-3 bold">Role Start : </span>{iidDetails[0].role_start_date}</p>
            <p><span  className="me-3 bold">Salary : </span>{iidDetails[0].target_salary}</p>
        </div>
    )
}
