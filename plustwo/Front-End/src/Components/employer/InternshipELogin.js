import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_HEROKU_URL;
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

//export default function Employer() {
export default function InternshipELogin() {
  let history = useHistory();

  const [option, setOption] = useState("jobs");

  const handleJob = (e) => {
    console.log(e.target.value);
    setOption(e.target.value);
    history.push("/employer/Employer");
  };
  const handleInternship = (e) => {
    console.log(e.target.value);
    setOption(e.target.value);
    history.push("/employer/InternshipELogin");
  };

  const [ititle, setititle] = useState("");
  const [internship_description, setinternship_description] = useState("");
  const [primary_skill, setprimary_skill] = useState("");
  const [additional_skills, setadditional_skills] = useState("");
  const [employer_email, setemployer_email] = useState("");
  const [experience_level, setexperience_level] = useState("");
  const [location, setlocation] = useState("");
  const [target_salary, settarget_salary] = useState("");
  const [role_end_date, setrole_end_date] = useState("01-01-2021");
  const [role_start_date, setrole_start_date] = useState("");
  const [number_of_open_demands, setnumber_of_open_demands] = useState("");
  const [employer_name, setemployer_name] = useState("");
  const [employer_poc_name, setemployer_poc_name] = useState("");
  const [employer_poc_designation, setemployer_poc_designation] = useState("");
  const [employer_poc_phone, setemployer_poc_phone] = useState("");
  const [employer_poc_other_number, setemployer_poc_other_number] =
    useState("");
  const [employer_website, setemployer_website] = useState("");
  const [is_active, setis_active] = useState("");
  const [AboutUs, setAboutUs] = useState("");

  const [alignment, setAlignment] = React.useState("web");

  const handleititleChange = (event) => {
    setititle(event.target.value);
  };
  const handleinternship_descriptionChange = (event) => {
    setinternship_description(event.target.value);
  };
  const handleprimary_skillChange = (event) => {
    setprimary_skill(event.target.value);
  };
  const handleadditional_skillsChange = (event) => {
    setadditional_skills(event.target.value);
  };
  const handleemployer_emailChange = (event) => {
    setemployer_email(event.target.value);
  };
  const handleexperience_levelChange = (event) => {
    setexperience_level(event.target.value);
  };
  const handlelocationChange = (event) => {
    setlocation(event.target.value);
  };
  const handletarget_salaryChange = (event) => {
    settarget_salary(event.target.value);
  };
  const handlerole_end_dateChange = (event) => {
    setrole_end_date(event.target.value);
  };
  const handlerole_start_dateChange = (event) => {
    setrole_start_date(event.target.value);
  };
  const handleemployer_nameChange = (event) => {
    setemployer_name(event.target.value);
  };
  const handlenumber_of_open_demandsChange = (event) => {
    setnumber_of_open_demands(event.target.value);
  };
  const handleemployer_poc_nameChange = (event) => {
    setemployer_poc_name(event.target.value);
  };
  const handleemployer_poc_designationChange = (event) => {
    setemployer_poc_designation(event.target.value);
  };
  const handleemployer_poc_phoneChange = (event) => {
    setemployer_poc_phone(event.target.value);
  };
  const handleemployer_poc_other_numberChange = (event) => {
    setemployer_poc_other_number(event.target.value);
  };
  const handleemployer_websiteChange = (event) => {
    setemployer_website(event.target.value);
  };
  const handleis_activeChange = (event) => {
    setis_active(event.target.value);
  };
  const handleAboutUs = (event) => {
    setAboutUs(event.target.value);
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      iid:
        "I" +
        new Date().getDate().toString() +
        (new Date().getMonth() + 1).toString() +
        new Date().getFullYear().toString() +
        new Date().getHours().toString() +
        new Date().getMinutes().toString() +
        new Date().getSeconds().toString(),
      internship_description: internship_description,
      primary_skill: primary_skill,
      additional_skills: additional_skills,
      employer_email: employer_email,
      experience_level: experience_level,
      location: location,
      target_salary: target_salary,
      role_start_date: role_start_date,
      role_end_date: role_end_date,
      number_of_open_demands: number_of_open_demands,
      employer_name: employer_name,
      employer_poc_name: employer_poc_name,
      employer_poc_designation: employer_poc_designation,
      employer_poc_phone: employer_poc_phone,
      employer_poc_other_number: employer_poc_other_number,
      employer_website: employer_website,
      is_active: is_active,
      AboutUs: AboutUs,
      login_id: employer_name,
    };
    console.log(postData);

    const postdata = async () => {
      try {
        // const response = await fetch(" https://karyam-backend.herokuapp.com/postjob", {
        const response = await fetch(baseUrl + "/postInternship", {
        method: "POST",
          body: JSON.stringify({ data: postData }),
        });
        const recievedData = await response.json();
        console.log(recievedData);
        alert("Your InternshipID is : " + recievedData["reply"]);
      } catch (e) {
        console.log(e);
      }
    };
    postdata();

    // axios
    //   .post(`https://karyam-test-jp.herokuapp.com/jobd?`, postData)
    //   .then((response) => {
    //     console.log(response.data);
    //     alert("Registration Succesfull");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("Something went wrong");
    //   });

    //       jid:currentdate.getDate().toString()+(currentdate.getMonth()+1).toString()+currentdate.getFullYear().toString()+(currentdate.getHours()).toString()+(currentdate.getMinutes()).toString()+(currentdate.getSeconds()).toString()+(currentdate.getMilliseconds()).toString(),
    //      'Day: '+this.state.currentDay.getDay() , 'Month: ' + this.state.currentDay.getMonth(), 'Year :'+ this.state.currentDay.getYear()
  };

  return (
    <div className="container">
      <h2 style={{ paddingRight: 230 }}>POST INTERNSHIP ROLE</h2>

      <div display="center">
        <Radio
          value="jobs"
          checked={option === "jobs"}
          color="primary"
          onChange={handleJob}
        />
        <label> Jobs </label>

        <Radio
          value="internship"
          color="primary"
          checked={option === "internship"}
          onChange={handleInternship}
        />
        <label> Internship </label>
      </div>

      {/* <ToggleButtonGroup 
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            
            >
            <ToggleButton value="web">Job</ToggleButton>
            <ToggleButton value="android">Internship</ToggleButton>
            </ToggleButtonGroup>  */}

      <form className="container mt-5 mb-5 border rounded border-secondary">
        <div className="container-fluid mt-3 mb-3">
          <fieldset className="border rounded p-3">
            <legend className="fw-bold">Internship Information</legend>
            <div className="row">
              <div className="col-12 col-md-3 col-sm-12 mt-3">
                <TextField
                  id="ititle"
                  label="internship Title"
                  fullWidth
                  variant="outlined"
                  value={ititle}
                  onChange={handleititleChange}
                />
              </div>
              <div className="col-12 col-md-5 col-sm-12 mt-3">
                <TextField
                  id="internship_description"
                  label="Internship Description"
                  fullWidth
                  variant="outlined"
                  value={internship_description}
                  onChange={handleinternship_descriptionChange}
                />
              </div>
              <div className="col-12 col-md-3 col-sm-12 mt-3">
                <TextField
                  id="number_of_open_demands"
                  label="Number Of Openings"
                  fullWidth
                  variant="outlined"
                  value={number_of_open_demands}
                  onChange={handlenumber_of_open_demandsChange}
                />
              </div>
              <div className="col-12 col-md-5 col-sm-12 mt-3">
                <FormControl fullWidth>
                  <InputLabel id="primary_skill">Primary Skills</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="primary_skill"
                    value={primary_skill}
                    onChange={handleprimary_skillChange}
                  >
                    <MenuItem value={"Python"}>Python</MenuItem>
                    <MenuItem value={"ReactJs"}>ReactJs</MenuItem>
                    <MenuItem value={"Cpp"}>Cpp</MenuItem>
                    <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
                    <MenuItem value={"NodeJs"}>NodeJs</MenuItem>
                    <MenuItem value={"Angular"}>Angular</MenuItem>
                    <MenuItem value={"CSS"}>CSS</MenuItem>
                    <MenuItem value={"HTML"}>HTML</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-12 col-md-5 col-sm-12 mt-3">
                <TextField
                  id="additional_skills"
                  label="Additional Skills"
                  fullWidth
                  variant="outlined"
                  value={additional_skills}
                  onChange={handleadditional_skillsChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 col-sm-12 mt-3">
                <TextField
                  id="employer_email"
                  label="Employer's Email-id"
                  fullWidth
                  variant="outlined"
                  value={employer_email}
                  onChange={handleemployer_emailChange}
                />
              </div>
              <div className="col-12 col-md-4 col-sm-12 mt-3">
                <FormControl fullWidth required>
                  <InputLabel id="experience_level">
                    Years of Experience
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="experience_level"
                    value={experience_level}
                    label="Experience"
                    onChange={handleexperience_levelChange}
                  >
                    <MenuItem defaultValue={"Fresher"}>Fresher</MenuItem>
                    <MenuItem value={"<2 years"}>&lt;2 years</MenuItem>
                    <MenuItem value={"2-4 years"}>2-4 years</MenuItem>
                    <MenuItem value={"4-6 years"}>4-6 years</MenuItem>
                    <MenuItem value={"6-8 years"}>6-8 years</MenuItem>
                    <MenuItem value={"8-10 years"}>8-10 years</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-12 col-md-4 col-sm-12 mt-3">
                <FormControl fullWidth required>
                  <InputLabel id="ilocation" required>
                    Internship Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="ilocation"
                    value={location}
                    label="Internship Location Preference 1"
                    onChange={handlelocationChange}
                  >
                    <MenuItem value={"Any"}>Any</MenuItem>
                    <MenuItem value={"Pune"}>Pune</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Delhi"}>Delhi</MenuItem>
                    <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                    <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                    <MenuItem value={"Nagpur"}>Nagpur</MenuItem>
                    <MenuItem value={"Chennai"}>Chennai</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3 col-sm-12 mt-3">
                <TextField
                  id="target_salary"
                  label="Target Salary"
                  fullWidth
                  variant="outlined"
                  value={target_salary}
                  onChange={handletarget_salaryChange}
                />
              </div>

              <div className="col-12 col-md-3 col-sm-12 mt-3">
                {/* <TextField type="date"
                            label="Start Date"
                            id="role_start_date"
                            onChange={handlerole_start_dateChange}
                            value={role_start_date}
                            name="role_start_date"
                            
                            
                        /> */}
                <TextField
                  id="role_start_date"
                  label="Start Date"
                  type="date"
                  defaultValue="2000-01-01"
                  onChange={handlerole_start_dateChange}
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="col-12 col-md-3 col-sm-12 mt-3">
                {/* <TextField type="date"
                            label="End Date"
                            id="role_end_date"
                            onChange={handlerole_end_dateChange}
                            value={role_end_date}
                            name="role_start_date"
                            defaultValue="2017-05-24"
                            
                            
                        /> */}
                <TextField
                  id="role_end_date"
                  label="End Date"
                  type="date"
                  defaultValue="2000-01-01"
                  onChange={handlerole_end_dateChange}
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-4 col-sm-12 mt-3">
                <TextField
                  id="employer_name"
                  label="Employer Name"
                  fullWidth
                  variant="outlined"
                  value={employer_name}
                  onChange={handleemployer_nameChange}
                />
              </div>
              <div className="col-12 col-md-3 col-sm-12 mt-3">
                <TextField
                  id="employer_poc_name"
                  label="Employer PoC Name"
                  fullWidth
                  variant="outlined"
                  value={employer_poc_name}
                  onChange={handleemployer_poc_nameChange}
                />
              </div>
              <div className="col-12 col-md-3 col-sm-12 mt-3">
                <TextField
                  id="employer_poc_designation"
                  label="Employer PoC Designation"
                  fullWidth
                  variant="outlined"
                  value={employer_poc_designation}
                  onChange={handleemployer_poc_designationChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3 col-sm-12 mt-3">
                <TextField
                  id="employer_poc_phone"
                  label="Employer PoC Number"
                  fullWidth
                  variant="outlined"
                  value={employer_poc_phone}
                  onChange={handleemployer_poc_phoneChange}
                />
              </div>
              <div className="col-12 col-md-3 col-sm-12 mt-3">
                <TextField
                  id="employer_poc_other_number"
                  label="Employer PoC Other Number"
                  fullWidth
                  variant="outlined"
                  value={employer_poc_other_number}
                  onChange={handleemployer_poc_other_numberChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-5 col-sm-12 mt-3">
                <TextField
                  id="employer_website"
                  label="Company Website"
                  fullWidth
                  variant="outlined"
                  value={employer_website}
                  onChange={handleemployer_websiteChange}
                />
              </div>
              <div className="col-12 col-md-6 col-sm-12 mt-3">
                <FormControl component="fieldset">
                  <FormLabel id="is_active" component="legend">
                    Active Status
                  </FormLabel>
                  {/* <RadioGroup
                    aria-label="gender"
                    id="is_active"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={handleis_activeChange}
                    value={is_active}
                    row
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="NO"
                      control={<Radio />}
                      label="NO"
                    />
                  </RadioGroup> */}
                  <div display="center">
                    <Radio
                      value="Yes"
                      checked={is_active === "Yes"}
                      color="primary"
                      onChange={handleis_activeChange}
                    />
                    <label> Yes </label>

                    <Radio
                      value="No"
                      checked={is_active === "No"}
                      color="primary"
                      onChange={handleis_activeChange}
                    />
                    <label> No </label>
                  </div>
                </FormControl>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 col-md-12 col-sm-12">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  label="About Us"
                  fullWidth
                  variant="outlined"
                  value={AboutUs}
                  onChange={handleAboutUs}
                />
              </div>
            </div>
          </fieldset>

          <div className="row mt-3">
            <div className="col-12 col-md-6 col-sm-12">
              <Button type="submit" onClick={handleSubmit} variant="contained">
                ADD{" "}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}