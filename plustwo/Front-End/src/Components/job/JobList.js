import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBackRounded, Share, ShareSharp } from "@material-ui/icons";

import { RWebShare } from "react-web-share";
export default function JobList({ job, handleApplication, isOpenForm }) {
  const handleApply = (jid) => {
    handleApplication(jid);
    isOpenForm();
  };

  return (
    <tr>
      <td>{job.primary_skill}</td>
      <td>{job.experience_level}</td>
      <td>{job.location}</td>
      <td>{job.employer_name}</td>
      <td>{job.jtitle}</td>
      <td>{job.jid}</td>
      <td>
        <button style={{marginRight: "5px"}}
          type="button"
          className="btn btn-primary mb-2"
          onClick={() => handleApply(job.jid)}
        >
          Apply
        </button>
        
          {/* <h1>Web Share - GeeksforGeeks</h1> */}
          <RWebShare
            data={{
              text: "For more details about this Job, please refer to www.maps2.in" + job.primary_skill,
              url: "http://www.maps2.in/",
              title: "maps2.in",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <IconButton>
                    <Share  color="primary"/>
                </IconButton>
          </RWebShare>
        
      </td>
      
    </tr>
  );
}
