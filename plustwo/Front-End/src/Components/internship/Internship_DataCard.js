import React from 'react'
import { Internship_Cards } from './Internship_Cards'

export const Internship_DataCard = ({data,handleApply,isOpenForm}) => {

    const handleApplication = (iid) =>
    {
        handleApply(iid);
    }
    
    const renderInternships = data.map(internship => {
        return (
            <>
                <Internship_Cards key={internship.iid} internship={internship} handleApplication={handleApplication} isOpenForm={isOpenForm}/>
            </>
        )
    })

    return (
        <>
            <div className="row">
                {renderInternships}
            </div>
            
        </>
    )
}
