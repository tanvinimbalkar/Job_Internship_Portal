import React from 'react'
import { JobCards } from './JobCards'

export const JobDataCard = ({data,handleApply,isOpenForm}) => {

    const handleApplication = (jid) =>
    {
        handleApply(jid);
    }
    
    const renderJobs = data.map(job => {
        return (
            <>
                <JobCards key={job.jid} job={job} handleApplication={handleApplication} isOpenForm={isOpenForm}/>
            </>
        )
    })

    return (
        <>
            <div className="row">
                {renderJobs}
            </div>
            
        </>
    )
}
