import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { useHistory } from "react";
import { useHistory } from "react-router";

const Navbar = ({LoggedIn,isLoggedIn,setappliedJid,setApplicationForm}) => {

  // console.log(appliedJid)
  let history = useHistory();
  
  const handleLogout = () => {
    isLoggedIn()
    setappliedJid("")
    setApplicationForm(false)
    localStorage.removeItem("platform");
    localStorage.removeItem("platform_email");
    localStorage.removeItem("isEmployer");
    localStorage.removeItem("User");
    localStorage.removeItem("jobid");
    localStorage.removeItem('appl_email');
    history.push('/')
  }
  
  const handleNavbarDetails = () => {
    if (localStorage.User == 'true') {
      if(localStorage.isEmployer == 'true'){
        return (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/report" className= "nav-link">
                Report
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/employer/employer" className="nav-link" >
                Post Job
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/candidateprofile" exact className="nav-link" >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="btn btn-outline-danger" style={{width: "100px", color: "white", borderColor: "transparent"}} onClick={handleLogout}>
                Logout
              </span>
            </li>
          </ul>
        )
      }else{
        return (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/report" className= "nav-link">
                Report
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/matchingtoprofile" className="nav-link" >
                Jobs Matching to your profile
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/candidateprofile" exact className="nav-link" >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="btn btn-outline-danger" style={{width: "100px", color: "white", borderColor: "transparent"}} onClick={handleLogout}>
                Logout
              </span>
            </li>
          </ul>
        )
      }
    } else 
    {
      return (
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <Link to="/employer/Employer" className="nav-link" >
              Employer's Login
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/registrationpage" className="btn btn-outline-secondary" style={{margin: "2px", color: "white", borderColor: "transparent"}}>
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/loginpage" className="btn btn-outline-success" style={{margin: "2px", color: "white", borderColor: "transparent"}}>
              Login
            </Link>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/registrationpage" className="nav-link">
              Registration
            </NavLink>
          </li> */}
        </ul>
      )
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><h4 style={{marginBottom: "0px"}}>maps2.in</h4></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/"><h6 style={{marginBottom: "0px"}}>Search Jobs</h6></a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/internship/Internship_Search"><h6 style={{marginBottom: "0px"}}>Internship Openings</h6></a>
          </li> */}
        </ul>
        {handleNavbarDetails()}
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
