import React,{useState, useEffect} from 'react'
import Datatable_intern from '../Datatable-intern.js'

import axios from 'axios'
import Application_Form from './Application_Form.js'
import Login from '../Login.js';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Internship_DataCard } from './Internship_DataCard.js';
// import { useHistory } from "react-router";
const baseUrl = process.env.REACT_APP_HEROKU_URL;
export default function Internship_Search({isLoggedIn,LoggedIn,appliedIid,setappliedIid,application_Form,setApplication_Form}) {

    

    const [data,setData] = useState([])
    const [q,setQ] = useState("")   //Query -> serach box
    const [isLoading, setIsLoading] = useState(false);

    async function getInternshipsData(){
        setIsLoading(true);
        await axios.get(baseUrl)
        .then((response) => {
            const result = response.data;
            console.log(result);
            setData(result)
        },
        (error) => {
            console.log(error);
        })
        setIsLoading(false);
    }
    useEffect(() => {
        getInternshipsData();
    },[])
    const [view, setView] = React.useState('list');

    const handleChange = (event, newAlignment) => {
        setView(newAlignment);
    };
    function search(rows)
    {
        return rows.filter((row) => row.employer_name.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) > -1 || row.primary_skill.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) > -1 );
    }

    function handleApply(iid)
    {
        setappliedIid(iid);
    }
    const isOpenForm = () =>
    {
        setApplication_Form(!application_Form)
    }
    
    const handleView = () =>
    {
        if(view === 'list')
        {
            return (
                <Datatable_intern data={search(data)} handleApply={handleApply} isOpenForm={isOpenForm}/>
            );
        }
        else
        {
            return (
                <Internship_DataCard data={search(data)} handleApply={handleApply} isOpenForm={isOpenForm}/>
            );
        }
        
    }
    const handleForm = () =>
    {
        if(application_Form)
        {
            if(LoggedIn)
            {
                return (
                    <div>
                        <Application_Form data={data} appliedIid={appliedIid} isOpenForm={isOpenForm}/>
                    </div>
                )
            }
            else
            {
                return (
                    <Login isLoggedIn={isLoggedIn}/>
                )
            }
            
        }
        else
        {
            return (
                <>
                    <div  className="input-group flex-nowrap mb-3 mt-3">
                        
                        <input type="text" className="form-control" value={q} placeholder="Search by Company name or Skills" onChange={(e) => setQ(e.target.value)}/>
                        <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                        {/* <ToggleButtonGroup 
                            color="primary"
                            value={view}
                            exclusive
                            onChange={handleChange}
                        >
                            <ToggleButton value="list">LIST</ToggleButton>
                            <ToggleButton value="card">CARD</ToggleButton>
                        </ToggleButtonGroup> */}
                    </div>

                    {isLoading?
                        (
                            <div className="d-flex justify-content-center">
                                    <Box sx={{ display: 'flex' }}>
                                        <CircularProgress />
                                    </Box>
                            </div>
                        ):
                        (  
                            q !== "" &&     
                            handleView()
                        )
                    }
                    
                </>
            );
        }
    }
    return (
        <div className="container">
            
            {handleForm()}
            
        </div>
    )
}
