import React,{useState, useEffect} from 'react'
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
import axios from 'axios'

const baseUrl = process.env.REACT_APP_HEROKU_URL;

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={20} ref={ref} variant="filled" {...props} />;
  });

  

export default function Profile() {

    const [edit, setEdit] = useState(false)
    
    async function fetchProfiledata(){
        
        // const getDatafor = {
        //     email : localStorage.getItem("platform_email"),
        //     platform : localStorage.getItem("platform")
        // }
        
        await axios
            .get(baseUrl + `/user?email=`+localStorage.getItem("platform_email"))
            .then(response => {
                console.log(response.data)
                
                     setName(response.data.name)
                     setEmailid(response.data.email_id)
                     setPhoneno(response.data.phone)
                     setGender(response.data.Gender)
                     setCity(response.data.city)
                     setAddress(response.data.address)
                     setPrimaryskill(response.data.Primary_skill)
                     setAdditionalskill(response.data.Additional_skills)
                    setExperience(response.data.Experience)
                     setCurrentsalary(response.data.Current_Salary)
                     setExpectedSalary(response.data.Expected_salary)
                    setJobRolePreference1(response.data.job_post_pre_1)
                    setJobRolePreference2(response.data.job_post_pre_2)
                     setJobRolePreference3(response.data.job_post_pre_3)
                     setJobLocationPrefrence1(response.data.job_loc_1)
                     setJobLocationPrefrence2(response.data.job_loc_2)
                     setJobLocationPrefrence3(response.data.job_loc_3)
                     setSocialMediaLink(response.data.Linkdin_link)
                     setAchievements(response.data.Achievementssec)

            })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {
        fetchProfiledata();
        console.log(gender);
    }, [])

    const [name, setName] = useState('')
    const [emailid, setEmailid] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [gender, setGender] = useState('')
    const [city,setCity] = useState('')
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
    const [Achievements, setAchievements] = useState('')
    
    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
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
    const handleAchievements = (event) => {
        setAchievements(event.target.value);
    };
    

    async function handleSubmit(event){
        event.preventDefault();
        
        const postData = {
            "name": name,
            "email": emailid,
            "phone": phoneno,
            "Gender": gender,
            "city": city,
            "address": address,
            "Primary_skill": primaryskill,
            "Additional_skills": additionalskill,
            "Experience": experience,
            "Current_Salary": currentsalary,
            "Expected_salary": expectedSalary,
            "job_loc_1": jobLocationPrefrence1,
            "job_loc_2": jobLocationPrefrence2,
            "job_loc_3": jobLocationPrefrence3,
            "job_post_pre_1": jobRolePreference1,
            "job_post_pre_2": jobRolePreference2,
            "job_post_pre_3": jobRolePreference3,          
            "Linkdin_link": socialMediaLink,
            "Achievementssec": Achievements,
            "platform": localStorage.getItem("platform"),
            "platform_mail": localStorage.getItem("platform_email")
        }
       
        await axios
            .put(baseUrl + `/user/update?email=` + localStorage.getItem("platform_email"),postData)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        // const apiURL = 'https://karyam-test-jp.herokuapp.com/appupdate';
        // const newHeaders = new Headers();
        // newHeaders.append("Content-Type", "application/json");
        // const options = {
        //     method: "POST",
        //     headers: newHeaders,
        //     body: postData,
        // };
        // await fetch(apiURL,options)
        // .then((res) => console.log(res))
        
        // .catch((err) => console.log(err));

        console.log(postData);
        
        setEdit(false);
        handleClick();
    }

    const handleEdit = () =>
    {
        setEdit(true);
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
                    Updated Successfully!!
                </Alert>
            </Snackbar>
            {/* ------------------- */}

            <div className="container">
                
                <div className="d-flex justify-content-between">
                    <div className="p-2"><h2>Profile</h2></div>
                    {edit===false?(<div className="p-2"><button type="button" className="btn btn-info" onClick={handleEdit}>Edit</button></div>):(<div className="p-2"></div>)}
                </div>
                <form className="container mt-3 mb-5 border rounded border-secondary">
                    <div className="container-fluid mt-3 mb-3">
                        <fieldset className="border rounded p-3">
                            <legend className="fw-bold">Personal Information</legend>
                            
                            <div className="row">
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <TextField disabled={edit===false?true:false} id="outlined-basic" label="Name" fullWidth  variant="outlined" value={name} onChange={handleNameChange}/>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <TextField disabled={edit===false?true:false} id="outlined-basic" label="Email id" fullWidth variant="outlined" value={emailid} onChange={handleEmailidChange}/>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <TextField disabled={edit===false?true:false} id="outlined-basic" label="Phone no." fullWidth variant="outlined" value={phoneno} onChange={handlePhonenoChange}/>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="col-12 col-md-6 col-sm-12 mt-3">
                                
                                  <FormControl component="fieldset">
                                    <FormLabel disabled={edit===false?true:false} component="legend">Gender</FormLabel>
                                    <div display="center">
                                    <Radio
                                    value="Female"
                                    checked={gender === "Female"}
                                    color="primary"
                                    disabled={edit===false?true:false}
                                    onChange={handleGenderChange}
                                    />
                                    <label> Female </label>

                                    <Radio
                                    value="Male"
                                    color="primary"
                                    disabled={edit===false?true:false}
                                    checked={gender === "Male"}
                                    onChange={handleGenderChange}
                                    />
                                    <label> Male </label>
                                    <Radio
                                    value="Other"
                                    color="primary"
                                    disabled={edit===false?true:false}
                                    checked={gender === "Other"}
                                    onChange={handleGenderChange}
                                    />
                                    <label> Other </label>
                                </div> 
                                            {/*<FormLabel disabled={edit===false?true:false} component="legend">Gender</FormLabel>
                                             <RadioGroup
                                                aria-label="gender"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                                onChange={handleGenderChange}
                                                value={gender}
                                                row
                                            >
                                                <FormControlLabel disabled={edit===false?true:false} value="Female" control={<Radio />} label="Female" />
                                                <FormControlLabel disabled={edit===false?true:false} value="Male" control={<Radio />} label="Male" />
                                                <FormControlLabel disabled={edit===false?true:false} value="Not specified" control={<Radio />} label="Not Specified" />
                                            </RadioGroup> */}
                                     </FormControl> 
                                </div>
                                <div className="col-12 col-md-6 col-sm-12 mt-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Current City</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={city}
                                            label="Current City"
                                            onChange={handleCityChange}
                                            disabled={edit===false?true:false} 
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
                                    <TextField disabled={edit===false?true:false} id="outlined-basic" label="Address" fullWidth variant="outlined" value={address} onChange={handleAddressChange} />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="border rounded p-3 mt-2">
                            <legend className="fw-bold">Skills</legend>
                            <div className="row mt-3">
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Primary Skill</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={primaryskill}
                                            label="Primary Skill"
                                            onChange={handlePrimaryskillChange}
                                            disabled={edit===false?true:false} 
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
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Additional Skill</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={additionalskill}
                                            label="Additional Skill"
                                            onChange={handleAdditionalskillChange}
                                            disabled={edit===false?true:false} 
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
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Experience</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={experience}
                                            label="Experience"
                                            onChange={handleExperienceChange}
                                            disabled={edit===false?true:false} 
                                        >
                                            <MenuItem value={"Fresher"}>Fresher</MenuItem>
                                            <MenuItem value={"<2 years"}>&lt;2 years</MenuItem>
                                            <MenuItem value={"2-4 years"}>2-4 years</MenuItem>
                                            <MenuItem value={"4-6 years"}>4-6 years</MenuItem>
                                            <MenuItem value={"6-8 years"}>6-8 years</MenuItem>
                                            <MenuItem value={"8-10 years"}>8-10 years</MenuItem>
                                            <MenuItem value={"> 10 years"}>&gt; 10 years</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-sm-12 mt-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Current Salary</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={currentsalary}
                                            label="Current Salary"
                                            onChange={handleCurrentsalaryChange}
                                            disabled={edit===false?true:false} 
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
                                    <TextField disabled={edit===false?true:false} id="outlined-basic" label="Expected Salary" inputProps={{ maxLength: 20 }} fullWidth variant="outlined" value={expectedSalary} onChange={handleExpectedsalaryChange}/>
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
                                            disabled={edit===false?true:false} 
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
                                            disabled={edit===false?true:false} 
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
                                            disabled={edit===false?true:false} 
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
                                            disabled={edit===false?true:false} 
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
                                            disabled={edit===false?true:false} 
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
                                            disabled={edit===false?true:false} 
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
                                <TextField 
                                disabled={edit===false?true:false} 
                                id="outlined-basic" 
                                label="Linkedin/Social Media Link" 
                                fullWidth variant="outlined" 
                                value={socialMediaLink} 
                                onChange={handleSocialMediaLinkChange} />
                            </div>
                        </div>

                        <div className="row mt-3"  >
                            <div className="col-12 col-md-12 col-sm-12">
                                <TextField 
                                disabled={edit===false?true:false} 
                                id="outlined-multiline-static"  
                                multiline rows={4} 
                                label="Achievements" 
                                fullWidth variant="outlined" 
                                value={Achievements} 
                                onChange={handleAchievements}  />
                            </div>
                        </div>

                        {edit===false?
                            (
                                <div className="p-2"></div>
                            ):
                            (
                                <div className="row mt-3">
                                    <div className="col-12 col-md-6 col-sm-12">
                                        <Button type="submit" onClick={handleSubmit} variant="contained">Save</Button>
                                    </div>
                                </div>
                            )
                        }

                        
                    </div>
                </form>
            </div>
            {/* <div className="container"><h2>Jobs you applied for</h2></div> */}
        </>
    )
}
