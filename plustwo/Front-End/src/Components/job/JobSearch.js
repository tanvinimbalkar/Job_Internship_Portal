import React, { useState, useEffect } from "react";
import Datatable from "../Datatable.js";
import ApplicationForm from "./ApplicationForm.js";
import Login from "../Login.js";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { JobDataCard } from "./JobDataCard.js";
import Radio from "@material-ui/core/Radio";
import { useHistory } from "react-router";
// import { Select } from "@mui/material";
// import { MenuItem } from "@mui/material";
// import { FormControl } from "@mui/material";

const baseUrl = process.env.REACT_APP_HEROKU_URL;

export default function JobSearch({
  isLoggedIn,
  LoggedIn,
  appliedJid,
  setappliedJid,
  applicationForm,
  setApplicationForm,
}) {
  let history = useHistory();

  const [option, setOption] = useState("jobs");

  const handleToggle = (e) => {
    console.warn(e.target.value);
    setOption(e.target.value);
  };
  // const handleInternship = (e) => {
  //   console.warn(e.target.value);
  //   setOption(e.target.value);
  //   // history.push("/internship/Internship_search");
  // };

  const [menuoption, setmenuoption] = useState("primary_skill");

  const handleMenu = (e) => {
    console.warn(e.target.value);
    setmenuoption(e.target.value);
  };

  const [data, setData] = useState([]);
  const [q, setQ] = useState(""); //Query -> serach box
  const [isLoading, setIsLoading] = useState(false);
  const [dataFound, setDatafound] = useState(false);

  async function getData(e) {
    if (option === "jobs") {
      setIsLoading(true);
      const getJobsData = async () => {
        console.log(menuoption);
        console.log(q);
        try {
          if(menuoption == "jid"){
          const response = await fetch(baseUrl + "/searchJob", {
            // const response = await fetch("http://localhost:5000/searchJob", {
            method: "POST",
            body: JSON.stringify({
              criteria: menuoption, 
              searchKey: q,
              //  searchKey: q
            }),
          });

          const recievedData = await response.json();
          console.log(recievedData);
          setData(recievedData["reply"]);

          if (recievedData["reply"]["length"] == 0) {
            setDatafound(true);
          } else {
            setDatafound(false);
          }
        }else{
          const response = await fetch(baseUrl + "/searchJob", {
            // const response = await fetch("http://localhost:5000/searchJob", {
            method: "POST",
            body: JSON.stringify({
              criteria: menuoption,
              // searchKey: q.toLowerCase(),
               searchKey: q
            }),
          });

          const recievedData = await response.json();
          console.log(recievedData);
          setData(recievedData["reply"]);

          if (recievedData["reply"]["length"] == 0) {
            setDatafound(true);
          } else {
            setDatafound(false);
          }
        }
        } catch (e) {
          console.log(e);
        }
      };
      getJobsData();

      setIsLoading(false);
    } else {
      setIsLoading(true);

      const getInternshipData = async () => {
        try {
          const response = await fetch(baseUrl + "/searchInternship",
            {
              method: "POST",
              body: JSON.stringify({
                criteria: menuoption,
                // searchKey: q.toLowerCase(),
                searchKey: q,
              }),
            }
          );
          console.log(menuoption);
          console.log(q);
          const recievedData = await response.json();
          console.log(recievedData);
          setData(recievedData["reply"]);
          if (recievedData["reply"]["length"] == 0) {
            setDatafound(true);
          } else {
            setDatafound(false);
          }
        } catch (e) {
          console.log(e);
        }
      };
      getInternshipData();

      setIsLoading(false);
      // console.log("Internship got selected");
    }
  }

  useEffect(() => {
    localStorage.removeItem('jobid');
    localStorage.removeItem('appl_email');
    // getData();
  }, []);
  const [view, setView] = React.useState("list");

  const handleChange = (event, newAlignment) => {
    setView(newAlignment);
  };
  // function search(rows,menuoption) {
  //   return rows.filter(
  //   (row) =>
  //     row.primary_skill.indexOf(q.toLocaleLowerCase()) > -1
  //     row.employer_name.indexOf(q.toLocaleLowerCase()) > -1 ||
  //     row.jlocation.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) >
  //     -1 || row.experience_level.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) > -1
  // );
  // }

  function handleApply(jid) {
    setappliedJid(jid);
  }
  const isOpenForm = () => {
    setApplicationForm(!applicationForm);
  };

  const handleView = () => {
    if (view === "list") {
      return (
        <Datatable
          data={data}
          handleApply={handleApply}
          isOpenForm={isOpenForm}
        />
      );
    } else {
      return (
        <JobDataCard
          // data={search(data)}
          handleApply={handleApply}
          isOpenForm={isOpenForm}
        />
      );
    }
  };
  const handleForm = () => {
    if (applicationForm) {
      // if (LoggedIn) {
      if (localStorage.User) {
        return (
          <div>
            <ApplicationForm
              data={data}
              appliedJid={appliedJid}
              isOpenForm={isOpenForm}
            />
          </div>
        );
      } else {
        return <Login isLoggedIn={isLoggedIn} />;
      }
    } else {
      return (
        <>
          <div className="container-fluid mt-3 mb-3">
            <fieldset>
              <div className="row">
                <div
                  className="col-12 col-md-4 col-sm-12 mt-3"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <select
                    style={{ height: "50px" }}
                    class="form-select"
                    label="Select"
                    onChange={handleMenu}
                  >
                    <option value={"primary_skill"}>Primary Skill</option>
                    <option value={"experience_level"}>
                      Year of Experience
                    </option>
                    <option value={"location"}>Work Location</option>
                    <option value={"employer_name"}>Company Name</option>
                    <option value={"jid"}>Job ID</option>
                  </select>
                </div>
                <div
                  className="col-12 col-md-8 col-sm-12 mt-3"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <form class="d-flex">
                    <input
                      style={{ height: "50px" }}
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                    />
                    <span
                      style={{ paddingTop: "10px" }}
                      className="btn btn-primary"
                      id="inputGroup-sizing-sm"
                      onClick={getData}
                    >
                      Search
                    </span>
                  </form>
                </div>
              </div>
            </fieldset>
          </div>

          <div display="center">
            <Radio
              value="jobs"
              checked={option === "jobs"}
              color="primary"
              onChange={handleToggle}
            />
            <label> Jobs </label>

            <Radio
              value="internship"
              color="primary"
              checked={option === "internship"}
              onChange={handleToggle}
            />
            <label> Internship </label>
          </div>
          
          {dataFound && (
            <div>
              <b style={{ color: "red" }}> No Matching Record Found</b>
            </div>
          )}

          {isLoading ? (
            <div className="d-flex justify-content-center">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          ) : (
            q !== "" && handleView()
          )}
        </>
      );
    }
  };
  return <div className="container">{handleForm()}</div>;
}




 
