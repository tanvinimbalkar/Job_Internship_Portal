import React from "react";

export default function ReportList({ job}) {
  
  return (
    <tr>
      <td>{job.employer_name}</td>
      <td>{job.jtitle}</td>
      <td>{job.primary_skill}</td>
      <td>{job.experience_level}</td>
      <td>{job.jlocation}</td>
      {/* <td><button className="btn btn-primary">Applicants</button></td> */}
    </tr>
  );
}
