import React,{useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios'

const baseUrl = process.env.REACT_APP_HEROKU_URL;


  

export default function ApplicantProfile() {
    
    async function fetchProfiledata(){
        
        // const getDatafor = {
        //     email : localStorage.getItem("platform_email"),
        //     platform : localStorage.getItem("platform")
        // }
        
        await axios
            .get(baseUrl + `/user?email=`+localStorage.getItem("appl_email"))
            .then(response => {
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
    
    console.log(primaryskill);
    return (
        <>
            <div className="container">
            <div className="mt-3"><a  href="/applicants"> Back to Applicants</a></div>
                <form className="container mt-3 mb-5 border rounded border-secondary">
                    <div className="container-fluid mt-3 mb-3">
                        <fieldset className="border rounded p-3">
                            <legend className="fw-bold">Personal Information</legend>
                            
                            <div className="row">
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <TextField id="outlined-basic" label="Name" fullWidth  variant="outlined" value={name}/>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <TextField  id="outlined-basic" label="Email id" fullWidth variant="outlined" value={emailid}/>
                                </div>
                                <div className="col-12 col-md-4 col-sm-12 mt-3">
                                    <TextField id="outlined-basic" label="Phone no." fullWidth variant="outlined" value={phoneno}/>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="col-12 col-md-6 col-sm-12 mt-3">
                                
                                  <FormControl component="fieldset">
                                    <FormLabel  component="legend">Gender</FormLabel>
                                    <div display="center">
                                    <Radio
                                    value="Female"
                                    checked={gender === "Female"}
                                    color="primary"
                                    
                                    />
                                    <label> Female </label>

                                    <Radio
                                    value="Male"
                                    color="primary"
                                    
                                    checked={gender === "Male"}
                                    
                                    />
                                    <label> Male </label>
                                    <Radio
                                    value="Other"
                                    color="primary"
                                    
                                    checked={gender === "Other"}
                                    
                                    />
                                    <label> Other </label>
                                </div>        
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
                                    <TextField id="outlined-basic" label="Address" fullWidth variant="outlined" value={address}  />
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
                                    <TextField  id="outlined-basic" label="Expected Salary" inputProps={{ maxLength: 20 }} fullWidth variant="outlined" value={expectedSalary} />
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
                                
                                id="outlined-basic" 
                                label="Linkedin/Social Media Link" 
                                fullWidth variant="outlined" 
                                value={socialMediaLink} 
                                 />
                            </div>
                        </div>

                        <div className="row mt-3"  >
                            <div className="col-12 col-md-12 col-sm-12">
                                <TextField 
                                
                                id="outlined-multiline-static"  
                                multiline rows={4} 
                                label="Achievements" 
                                fullWidth variant="outlined" 
                                value={Achievements} 
                                  />
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
            {/* <div className="container"><h2>Jobs you applied for</h2></div> */}
        </>
    )
}
