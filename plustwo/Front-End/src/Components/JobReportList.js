import React from "react";

export default function JobReportList({ job}) {

  const handleapplicant = (jid) =>{
    console.log(jid);
    localStorage.setItem("jobid", job.jid);
  }
  
  return (
    <tr>
      <td>{job.jid}</td>
      <td>{job.jtitle}</td>
      <td>{job.primary_skill}</td>
      <td>{job.employer_name}</td>
      <td>{job.jlocation}</td>
      <td><a className="btn btn-primary" href="/applicants" onClick={handleapplicant}>Applicants</a></td>
    </tr>
  );
}
