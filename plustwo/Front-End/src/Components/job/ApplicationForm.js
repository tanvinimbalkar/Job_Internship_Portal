import React, { useState, useEffect } from "react";
import AppliedtoJobDetails from "./AppliedtoJobDetails";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import axios from "axios";
const baseUrl = process.env.REACT_APP_HEROKU_URL;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={20} ref={ref} variant="filled" {...props} />;
});

// import Email from 'https://smtpjs.com/v3/smtp.js'

export default function ApplicationForm({ data, appliedJid, isOpenForm }) {
  const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [Remark, setRemark] = useState("");
  const [senddata, setsendata] = useState("");

  async function fetchProfiledata() {
    // const getDatafor = {
    //     email : localStorage.getItem("platform_email"),
    //     platform : localStorage.getItem("platform")
    // }

    await axios
      .get(baseUrl + `/user?email=` + localStorage.getItem("platform_email"))
      .then((response) => {
        console.log(response);
        setName(response.data.name);
        setEmailid(response.data.emailid);
        setPhoneno(response.data.phoneno);
        setGender(response.data.gender);
        setCity(response.data.city);
        setAddress(response.data.address);
        setSocialMediaLink(response.data.socialmedialink);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log(appliedJid);
    fetchProfiledata();
  }, []);

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
  const handleSocialMediaLinkChange = (event) => {
    setSocialMediaLink(event.target.value);
  };
  const handleRemark = (event) => {
    setRemark(event.target.value);
  };

  const handleReset = (e) => {
    setName("");
    setEmailid("");
    setPhoneno("");
    setGender("Female");
    setCity("");
    setAddress("");
    setSocialMediaLink("");
  };
  const FilterDataWithJid = () => {
    return data.filter((x) => x.jid.toString() === appliedJid.toString());
  };

  async function handleSubmit(e) {
    const transactionData = {
      subcartUsrID: emailid,
      subcartUsrName: name,
      subcartResID: appliedJid,
      subcartResName: FilterDataWithJid()[0].employer_name,
      subcartUsrResPublish: false,
      subcartUsrResSubscribe: true,
    };

    await axios
      .post(baseUrl + `/addtransaction`, transactionData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(genderValue)
    // const row = FilterDataWithJid()
    // console.log(row[0].employer_email)
    // const body = `Name: ${applicantName.current.value}\nEmail id: ${applicantEmail.current.value}\nMobile no.: ${applicantMobile.current.value}\nGender: ${genderValue}\nCurrent City: ${cityValue}\nAddress: ${applicantAddress.current.value}\nResume Link: ${applicantResume.current.value}\n\n\n\nJob id: ${row[0].jid}\n`
    // console.log(body)

    // let Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "pmacoe.it@gmail.com",
    //     Password : "pun3pm@c03",
    //     To : row[0].employer_email,
    //     From : "pmacoe.it@gmail.com",
    //     Subject : "New Application mail from: " + applicantName.current.value,
    //     Body : body
    //     }).then((message) => {
    //       if (message == "OK") {
    //           console.log("Sent")
    //           alert("Applied Successfully!!")
    //       }
    //       else{
    //           console.log(message)
    //       }
    //     })
    handleClick();
    handleReset();
    // isOpenForm()
  }

  //---------- Disappperng message or alert --------

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
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={alertOpen}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Applied Successfully!!
        </Alert>
      </Snackbar>
      {/* ------------------- */}

      <div className="container">
        <button type="button" className="btn btn-dark" onClick={isOpenForm}>
          Back
        </button>
        <AppliedtoJobDetails jDetails={appliedJid} />
        <div className="row">
          <div className="col-12 col-md-4 col-sm-12 mt-3">
            <TextField
              id="outlined-basic"
              label="Name"
              fullWidth
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-12 col-md-4 col-sm-12 mt-3">
            <TextField
              id="outlined-basic"
              label="Email id"
              fullWidth
              variant="outlined"
              value={emailid}
              onChange={handleEmailidChange}
            />
          </div>
          <div className="col-12 col-md-4 col-sm-12 mt-3">
            <TextField
              id="outlined-basic"
              label="Phone no."
              fullWidth
              variant="outlined"
              value={phoneno}
              onChange={handlePhonenoChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-sm-12 mt-3">
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              {/* <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleGenderChange}
                value={gender}
                row
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Not specified"
                  control={<Radio />}
                  label="Not Specified"
                />
              </RadioGroup> */}
            </FormControl>
          </div>
          <div className="col-12 col-md-6 col-sm-12 mt-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Current City
              </InputLabel>
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
            <TextField
              id="outlined-basic"
              label="Address"
              fullWidth
              variant="outlined"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-sm-12 mt-3">
            <TextField
              id="outlined-basic"
              label="Linkedin/Social Media Link"
              fullWidth
              variant="outlined"
              value={socialMediaLink}
              onChange={handleSocialMediaLinkChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-sm-12 mt-3 mb-3">
            <button
              type="button"
              className="btn btn-primary me-3"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
