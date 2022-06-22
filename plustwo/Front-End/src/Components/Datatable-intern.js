import React from 'react'
import Internship_List from './internship/Internship_List.js';


export default function Datatable_intern({data,handleApply,isOpenForm}) {
    const handleApplication = (iid) =>
    {
        handleApply(iid);
    }
    const renderInternships = data.map(internship => {
        return (
            <>
                <Internship_List key={internship.iid} internship={internship} handleApplication={handleApplication} isOpenForm={isOpenForm}/>
            </>
        )
    })
    return (
        <div  className="table-responsive">
            <table  className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Company's Website</th>
                       {/* <th>Job Description</th> */}
                        <th>Primary Skills</th>
                        <th>Additional Skills</th>
                        <th>Experience</th>
                      {/*}  <th>Salary</th> */}
                        <th>Location</th>
                      {/*  <th>Openings</th> */}
                        <th>Role Start</th>
                        <th>Apply here</th>
                    </tr>
                </thead>
                <tbody>
                    {renderInternships}
                </tbody>
            </table>
        </div>
    )
}
