import React from 'react'

export default function Internship_List({internship,handleApplication,isOpenForm}) {
    
    const handleApply = (iid) =>
    {
        handleApplication(iid)
        isOpenForm()
    }
    
    return (
        <tr>
            <td>{internship.employer_name}</td>
            <td>{internship.employer_website}</td>
           {/* <td>{internship.internship_description}</td> */}
            <td>{internship.primary_skill}</td>
            <td>{internship.other_skills}</td>
            <td>{internship.experience_level}</td>
           
            <td>{internship.ilocation}</td>
          {/*   <td>{internship.target_salary}</td> */}
          {/*  <td>{internship.number_of_open_demands}</td> */}
            <td>{internship.role_start_date}</td>
            <td><button  type="button" className="btn btn-primary" onClick={() => handleApply(internship.iid)}>Apply</button></td>
        </tr>
    )
}
