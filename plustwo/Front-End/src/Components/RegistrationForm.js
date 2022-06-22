import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { Checkbox } from '@mui/material';
const baseUrl = process.env.REACT_APP_HEROKU_URL;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={20} ref={ref} variant="filled" {...props} />;
});


export default function RegistrationForm({isLoggedIn}) {
    let history = useHistory();
    const [checked, setChecked] = React.useState(false);
    const [name, setName] = useState('')
    const [emailid, setEmailid] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [gender, setGender] = useState('Female')
    const [city,setCity] = useState("")
    const [address, setAddress] = useState('')
    const [primaryskill,setPrimaryskill] = useState('')
    const [additionalskill,setAdditionalskill] = useState('')
    const [experience, setExperience] = useState('')
    const [currentsalary, setCurrentsalary] = useState('')
    const [expectedSalary, setExpectedSalary] = useState('')
    const [jobLocationPrefrence1, setJobLocationPrefrence1] = useState('')
    const [jobLocationPrefrence2, setJobLocationPrefrence2] = useState('')
    const [jobLocationPrefrence3, setJobLocationPrefrence3] = useState('')
    const [jobRolePreference1, setJobRolePreference1] = useState('')
    const [jobRolePreference2, setJobRolePreference2] = useState('')
    const [jobRolePreference3, setJobRolePreference3] = useState('')
    const [socialMediaLink, setSocialMediaLink] = useState('')
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    const [registered, setRegistered] = useState(false)

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailidChange = (event) => {
        setEmailid(event.target.value);
    };
    const handlePhonenoChange = (event) => {
        setPhoneno(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    const handlePrimaryskillChange = (event) => {
        setPrimaryskill(event.target.value);
    }
    const handleAdditionalskillChange = (event) => {
        setAdditionalskill(event.target.value);
    }
    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    }
    const handleCurrentsalaryChange = (event) => {
        setCurrentsalary(event.target.value);
    }
    const handleExpectedsalaryChange = (event) => {
        setExpectedSalary(event.target.value);
    };
    const handleJobLocationPrefrence1Change = (event) => {
        setJobLocationPrefrence1(event.target.value);
    }
    const handleJobLocationPrefrence2Change = (event) => {
        setJobLocationPrefrence2(event.target.value);
    }
    const handleJobLocationPrefrence3Change = (event) => {
        setJobLocationPrefrence3(event.target.value);
    }
    const handleJobRolePrefrence1Change = (event) => {
        setJobRolePreference1(event.target.value);
    }
    const handleJobRolePrefrence2Change = (event) => {
        setJobRolePreference2(event.target.value);
    }
    const handleJobRolePrefrence3Change = (event) => {
        setJobRolePreference3(event.target.value);
    }
    const handleSocialMediaLinkChange = (event) => {
        setSocialMediaLink(event.target.value);
    };
    const handleCheckboxChange = (event) => {
        setChecked(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const postData = {
            // username : username,
            // password : password,
            name : name,
            email : emailid,
            phone : phoneno,
            Gender : gender,
            city : city,
            address : address,
            Primary_skill : primaryskill,
            Additional_skills : additionalskill,
            Experience : experience,
            Current_Salary : currentsalary,
            Expected_salary : expectedSalary,
            job_loc_1 : jobLocationPrefrence1,
            job_loc_2 : jobLocationPrefrence2,
            job_loc_3 : jobLocationPrefrence3,
            job_post_pre_1 : jobRolePreference1,
            job_post_pre_2 : jobRolePreference2,
            job_post_pre_3 : jobRolePreference3,
            Linkdin_link : socialMediaLink,
            platform: localStorage.getItem("platform"),
            platform_mail : localStorage.getItem("platform_email"),
            isEmployer:checked,
        }
        // const apiURL = 'https://karyam-test-jp.herokuapp.com/applicant?username=Amey&password=ameyamey';
        // const newHeaders = new Headers();
        // newHeaders.append("Content-Type", "application/json");
        // const options = {
        // method: "POST",
        // headers: newHeaders,
        // body: postData,
        // };
        // fetch(apiURL,options)
        // .then((res) => res.text())
        // .then((result) => {
        //     console.log("FormData Res", result);

        // })
        // .catch((err) => console.log(err));
        // axios
        //     .post(`https://karyam-test-jp.herokuapp.com/applicant?username=${username}&password=${password}&name=${name}&email=${emailid}&phone=${phoneno}&Gender=${gender}&city=${city}&address=${address}&Primary_skill=${primaryskill}&Additional_skills=${additionalskill}&Experience=${experience}&Current_Salary=${currentsalary}&Expected_salary=${expectedSalary}&job_loc_1=${jobLocationPrefrence1}&job_loc_2=${jobLocationPrefrence2}&job_loc_3=${jobLocationPrefrence3}&job_post_pre_1=${jobRolePreference1}&job_post_pre_2=${jobRolePreference2}&job_post_pre_3=${jobRolePreference3}&Linkdin_link=${socialMediaLink}`)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
            await axios
            .post(baseUrl + `/user/add`,postData)
            .then(response => {
                console.log(response)
                handleClick();
                // setRegistered(true)
                if(response.data.reply==="Data Recorded")
                {
                     setRegistered(true)
                }
            })
            .catch(error => {
                console.log(error)
            })


        console.log(postData);
    }

    //---------- Disappperng message or alert -------- *

    const [alertOpen, setAlertOpen] = useState(false);

    const handleClick = () => {
        setAlertOpen(true);
    };

    const handleClose = () => {
        setAlertOpen(false);
    };
    // -------------------------------

    if (registered) {

        return <Redirect to="/loginpage"/>
    }
    return (
        <>
            {/* ---------- Disappperng message or alert -------- */}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
                open={alertOpen}
                onClose={handleClose}
                autoHideDuration={3000}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Registered Successfully!!
                </Alert>
            </Snackbar>
            {/* ------------------- */}

            <div className="container">
                <h2>Registration Form</h2>
                <form className="container mt-5 mb-5 border rounded border-secondary">
                    <div className="container-fluid mt-3 mb-3">
                        <fieldset className="border rounded p-3">
                            <legend className="fw-bold">Personal Information</legend>
                            <div className="row">
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <TextField id="outlined-basic" label="Name" fullWidth variant="outlined" value={name} onChange={handleNameChange} required/>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <TextField id="outlined-basic" label="Email id" fullWidth variant="outlined" value={emailid} onChange={handleEmailidChange} required/>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <TextField id="outlined-basic" label="Phone no." fullWidth variant="outlined" value={phoneno} onChange={handlePhonenoChange} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-sm-12 mt-3">
                                    <FormControl component="fieldset">
                                            <FormLabel component="legend">Gender</FormLabel>
                                            <div display="center">
                                    <Radio
                                    value="Female"
                                    color="primary"
                                    checked={gender === "Female"}
                                    onChange={handleGenderChange}
                                    />
                                    <label> Female </label>

                                    <Radio
                                    value="Male"
                                    color="primary"
                                    checked={gender === "Male"}
                                    onChange={handleGenderChange}
                                    />
                                    <label> Male </label>
                                    <Radio
                                    value="Other"
                                    color="primary"
                                    checked={gender === "Other"}
                                    onChange={handleGenderChange}
                                    />
                                    <label> Other </label>
                                </div>
                                            {/* <RadioGroup
                                                aria-label="gender"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                                onChange={handleGenderChange}
                                                value={gender}
                                                row
                                            >
                                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="Not specified" control={<Radio />} label="Not Specified" />
                                            </RadioGroup> */}
                                    </FormControl>
                                </div>
                                <div className="col-12 col-md-6 col-sm-12 mt-3">
                                    <FormControl fullWidth required>
                                        <InputLabel id="demo-simple-select-label">Current City</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={city}
                                            label="Current City"
                                            onChange={handleCityChange}
                                        >
                                            <MenuItem value={"Pune"}>Pune</MenuItem>
                                            <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                                            <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                                            <MenuItem value={"Nagpur"}>Nagpur</MenuItem>
                                            <MenuItem value={"Chennai"}>Chennai</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-sm-12 mt-3">
                                    <TextField id="outlined-basic" label="Address" fullWidth variant="outlined" value={address} onChange={handleAddressChange} required/>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="border rounded p-3 mt-2">
                            <legend className="fw-bold">Skills</legend>
                            <div className="row mt-3">
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth required>
                                        <InputLabel id="demo-simple-select-label">Primary Skill</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={primaryskill}
                                            label="Primary Skill"
                                            onChange={handlePrimaryskillChange}
                                        >
                                            <MenuItem value={"Java"}>Java</MenuItem>
                                            <MenuItem value={"Python"}>Python</MenuItem>
                                            <MenuItem value={"C++"}>C++</MenuItem>
                                            <MenuItem value={"Golang"}>Golang</MenuItem>
                                            <MenuItem value={"C#"}>C#</MenuItem>
                                            <MenuItem value={"C"}>C</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth required>
                                        <InputLabel id="demo-simple-select-label">Additional Skill</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={additionalskill}
                                            label="Additional Skill"
                                            onChange={handleAdditionalskillChange}
                                        >
                                            <MenuItem value={"Java"}>Java</MenuItem>
                                            <MenuItem value={"Python"}>Python</MenuItem>
                                            <MenuItem value={"C++"}>C++</MenuItem>
                                            <MenuItem value={"Golang"}>Golang</MenuItem>
                                            <MenuItem value={"C#"}>C#</MenuItem>
                                            <MenuItem value={"C"}>C</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth required>
                                        <InputLabel id="demo-simple-select-label">Experience</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={experience}
                                            label="Experience"
                                            onChange={handleExperienceChange}
                                        >
                                            <MenuItem value={"Fresher"}>Fresher</MenuItem>
                                            <MenuItem value={"less than 2 years"}>less than 2 years</MenuItem>
                                            <MenuItem value={"2-4 years"}>2-4 years</MenuItem>
                                            <MenuItem value={"4-6 years"}>4-6 years</MenuItem>
                                            <MenuItem value={"6-8 years"}>6-8 years</MenuItem>
                                            <MenuItem value={"8-10 years"}>8-10 years</MenuItem>
                                            <MenuItem value={"10 years or more"}>10 years or more</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-sm-12 mt-3">
                                    <FormControl fullWidth required>
                                        <InputLabel id="demo-simple-select-label">Current Salary</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={currentsalary}
                                            label="Current Salary"
                                            onChange={handleCurrentsalaryChange}
                                        >
                                            <MenuItem value={"less than 1 lakh"}>Less than 1 lakh</MenuItem>
                                            <MenuItem value={"1-5 lakh"}>1-5 lakh</MenuItem>
                                            <MenuItem value={"5-10 lakh"}>5-10 lakh</MenuItem>
                                            <MenuItem value={"10-15 lakh"}>10-15 lakh</MenuItem>
                                            <MenuItem value={"15-20 lakh"}>15-20 lakh</MenuItem>
                                            <MenuItem value={"20-25 lakh"}>20-25 lakh</MenuItem>
                                            <MenuItem value={"25 lakh or more"}>25 lakh or more</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-12 col-md-6 col-sm-12 mt-3">
                                    <TextField id="outlined-basic" label="Expected Salary" inputProps={{ maxLength: 20 }} fullWidth variant="outlined" value={expectedSalary} onChange={handleExpectedsalaryChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth required>
                                        <InputLabel id="demo-simple-select-label" required>Job Location Preference 1</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={jobLocationPrefrence1}
                                            label="Job Location Preference 1"
                                            onChange={handleJobLocationPrefrence1Change}
                                        >
                                            <MenuItem value={"Any"}>Any</MenuItem>
                                            <MenuItem value={"Pune"}>Pune</MenuItem>
                                            <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                                            <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                                            <MenuItem value={"Nagpur"}>Nagpur</MenuItem>
                                            <MenuItem value={"Chennai"}>Chennai</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Job Location Preference 2</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={jobLocationPrefrence2}
                                            label="Job Location Preference 2"
                                            onChange={handleJobLocationPrefrence2Change}
                                        >
                                            <MenuItem value={"None"}>None</MenuItem>
                                            <MenuItem value={"Pune"}>Pune</MenuItem>
                                            <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                                            <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                                            <MenuItem value={"Nagpur"}>Nagpur</MenuItem>
                                            <MenuItem value={"Chennai"}>Chennai</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Job Location Preference 3</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={jobLocationPrefrence3}
                                            label="Job Location Preference 3"
                                            onChange={handleJobLocationPrefrence3Change}
                                        >
                                            <MenuItem value={"None"}>None</MenuItem>
                                            <MenuItem value={"Pune"}>Pune</MenuItem>
                                            <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                                            <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                                            <MenuItem value={"Nagpur"}>Nagpur</MenuItem>
                                            <MenuItem value={"Chennai"}>Chennai</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Job Role Preference 1</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={jobRolePreference1}
                                            label="Job Role Preference 1"
                                            onChange={handleJobRolePrefrence1Change}
                                        >
                                            <MenuItem value={"Java Developer"}>Java Developer</MenuItem>
                                            <MenuItem value={"Python Developer"}>Python Developer</MenuItem>
                                            <MenuItem value={"Full-stack Developer"}>Full-stack Developer</MenuItem>
                                            <MenuItem value={"Front-end Developer"}>Front-end Developer</MenuItem>
                                            <MenuItem value={"Back-end Developer"}>Back-end Developer</MenuItem>
                                            <MenuItem value={"Data Analyst"}>Data Analyst</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Job Role Preference 2</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={jobRolePreference2}
                                            label="Job Role Preference 2"
                                            onChange={handleJobRolePrefrence2Change}
                                        >
                                            <MenuItem value={"None"}>None</MenuItem>
                                            <MenuItem value={"Java Developer"}>Java Developer</MenuItem>
                                            <MenuItem value={"Python Developer"}>Python Developer</MenuItem>
                                            <MenuItem value={"Full-stack Developer"}>Full-stack Developer</MenuItem>
                                            <MenuItem value={"Front-end Developer"}>Front-end Developer</MenuItem>
                                            <MenuItem value={"Back-end Developer"}>Back-end Developer</MenuItem>
                                            <MenuItem value={"Data Analyst"}>Data Analyst</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Job Role Preference 3</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={jobRolePreference3}
                                            label="Job Role Preference 3"
                                            onChange={handleJobRolePrefrence3Change}
                                        >
                                            <MenuItem value={"None"}>None</MenuItem>
                                            <MenuItem value={"Java Developer"}>Java Developer</MenuItem>
                                            <MenuItem value={"Python Developer"}>Python Developer</MenuItem>
                                            <MenuItem value={"Full-stack Developer"}>Full-stack Developer</MenuItem>
                                            <MenuItem value={"Front-end Developer"}>Front-end Developer</MenuItem>
                                            <MenuItem value={"Back-end Developer"}>Back-end Developer</MenuItem>
                                            <MenuItem value={"Data Analyst"}>Data Analyst</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </fieldset>
                        <div className="row mt-3">
                            <div className="col-12 col-md-6 col-sm-12">
                                <TextField id="outlined-basic" label="Link of online Resume/Linkedin/Social Media Link" fullWidth variant="outlined" value={socialMediaLink} onChange={handleSocialMediaLinkChange} required/>
                            </div>
                        </div>
                        <FormControlLabel
                            className='mt-2'
                            value="true"
                            control={ <Checkbox
                                checked={checked}
                                onChange={handleCheckboxChange}
                                // inputProps={{ 'aria-label': 'controlled' }}
                            />}
                            label="Are you an employer / consultant ?  "
                            labelPlacement="start"
                            />
                        {/* <div className="row mt-3">
                            <div className="col-6 col-md-6 col-sm-12">
                                <TextField id="outlined-basic" label="Username" fullWidth variant="outlined" value={username} onChange={handleUsernameChange}/>
                            </div>
                            <div className="col-6 col-md-6 col-sm-12">
                                <TextField id="outlined-basic" label="Password" fullWidth variant="outlined" value={password} onChange={handlePasswordChange}/>
                            </div>
                        </div> */}
                        <div className="row mt-3">
                            <div className="col-12 col-md-6 col-sm-12">
                                <Button type="submit" onClick={handleSubmit} variant="contained">Register</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
