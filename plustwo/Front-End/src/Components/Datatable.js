import React from "react";
import JobList from "./job/JobList.js";


export default function Datatable({ data, handleApply, isOpenForm }) {
  const handleApplication = (jid) => {
    handleApply(jid);
  };
  const renderJobs = data.map((job) => {
    return (
      <>
        <JobList
          key={job.jid}
          job={job}
          handleApplication={handleApplication}
          isOpenForm={isOpenForm}
        />
      </>
    );
  });
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Primary Skill</th>
            <th>Experience Level</th>
            <th>Work Location</th>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Job ID</th>
            <th>Apply here</th>
            

          </tr>
        </thead>
        <tbody>{renderJobs}</tbody>
      </table>
    </div>
  );
}
