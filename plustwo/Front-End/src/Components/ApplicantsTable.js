import React, { useState, useEffect } from "react";
import axios from 'axios'
import ListApplicants from './ListApllicants';

export default function ApplicantTable({data}) {
    
    const renderData = data.map(job => {
        return (
            <>
                <ListApplicants job={job}/>
            </>
        )
    })
    return (
    
        <div  className="table-responsive">
            <table  className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Job ID</th>
                        <th>Company Name</th>
                        <th>Applicant Name</th>
                        <th>Applicant Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData}
                </tbody>
            </table>
        </div>
    )
}
