import React, { useState, useEffect } from "react";
import axios from 'axios'
import JobReportList from './JobReportList';

export default function JobReport({data}) {
    
    const renderData = data.map(job => {
        return (
            <>
                <JobReportList job={job}/>
            </>
        )
    })
    return (
    
        <div  className="table-responsive">
            <table  className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Job ID</th>
                        <th>Job Title</th>
                        <th>Primary Skill</th>
                        <th>Company Name</th>
                        <th>Work Location</th>
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
