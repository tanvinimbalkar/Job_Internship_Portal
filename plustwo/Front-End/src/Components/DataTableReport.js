import React, { useState, useEffect } from "react";
import axios from 'axios'
import ReportList from './ReportList.js';

export default function DataTableReport({data}) {

    const renderData = data.map(job => {
        return (
            <>
                <ReportList job={job}/>
            </>
        )
    })
    return (
    
        <div  className="table-responsive">
            <table  className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Job Title</th>
                        <th>Primary Skill</th>
                        <th>Experience Level</th>
                        <th>Work Location</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {renderData}
                </tbody>
            </table>
        </div>
    )
}
