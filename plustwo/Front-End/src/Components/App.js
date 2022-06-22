import React from 'react';
import JobSearch from './job/JobSearch.js';


import Navbar from './Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from 'react';
import Login from './Login.js';
import RegistrationForm from './RegistrationForm.js';
import Profile from './Profile.js';
import Footer from './Footer.js';
import Employer from './employer/Employer.js';
import MatchingtoProfile from './MatchingtoProfile.js';
import Internship_Search from './internship/Internship_Search.js';
import InternshipELogin from './employer/InternshipELogin'
import ReportCandidate from './ReportCandidate';
import Apllicants from './Apllicants.js';
import ApplicantProfile from './ApplicantProfile.js';

function App() {
  const [LoggedIn,setLoggedIn] = useState(true)
  const [appliedJid,setappliedJid] = useState('')
  const [applicationForm, setApplicationForm] = useState(false)
  console.log("hii from app.js")
  const isLoggedIn = () =>
  {
    console.log("IsLogged func");
    console.log()
    setLoggedIn(!LoggedIn)
  }
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar LoggedIn={LoggedIn} isLoggedIn={isLoggedIn} appliedJid={appliedJid} setappliedJid={setappliedJid} applicationForm={applicationForm} setApplicationForm={setApplicationForm}/> 
        </div>
        <div>
          <Switch>
            <Route exact path='/'><JobSearch isLoggedIn={isLoggedIn} LoggedIn={LoggedIn} appliedJid={appliedJid} setappliedJid={setappliedJid} applicationForm={applicationForm} setApplicationForm={setApplicationForm}/></Route>
            <Route exact path='/loginpage' ><Login isLoggedIn={isLoggedIn}/></Route>
            <Route exact path='/registrationpage'><RegistrationForm isLoggedIn={isLoggedIn}/></Route>
            {/* <Route exact path='/employer' component={() => {window.location.href = 'https://job-portal-employee.herokuapp.com'; return null;}}></Route> */}
            <Route exact path='/employer/InternshipELogin'><InternshipELogin/></Route>
            <Route exact path='/employer/Employer'><Employer/></Route>
            
            
            <Route exact path='/internship/Internship_Search'>
              <Internship_Search/>
              
            </Route>

            <Route exact path='/candidateprofile'><Profile/></Route>
            <Route exact path='/matchingtoprofile'S><MatchingtoProfile/></Route>
            <Route exact path='/report'><ReportCandidate/></Route>
            <Route exact path='/applicants'><Apllicants/></Route>
            <Route exact path='/applicantsprofile'><ApplicantProfile/></Route>
          </Switch>
        </div>
        <div className="mt-5">
          <Footer/>
        </div>
      </div>
      {/* <div className="App">
        
        
        <Footer/>
      </div> */}
    </Router>
  );
}

export default App;