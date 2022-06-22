import React from "react";

export default function ListApplicants({ job}) {

  const handleProfile = (jid) =>{
    localStorage.setItem("appl_email", job.subcartUsrID);
  }
  
  return (
    <tr>
      <td>{job.subcartResID}</td>
      <td>{job.subcartResName}</td>
      <td>{job.subcartUsrName}</td>
      <td>{job.subcartUsrID}</td>
      <td><a href="/applicantsprofile" className="btn btn-primary" onClick={handleProfile}>Profile</a></td>
    </tr>
  );
}
