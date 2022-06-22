import React from 'react'
import { SocialMediaLogin } from './SocialMediaLogin'
import classes from './SocialMediaLogin.module.css'


export default function Login({isLoggedIn}) {

    
    // const uname=useRef()
    // const password = useRef()
    // const history = useHistory()
    
    
    // const handleSubmitLoginForm = () => {
    //     const username=uname.current.value
    //     const pass=password.current.value
    //     console.log(`Logged in - ${username} ${pass}`)
    //     if(username==="karyam" && pass==="employer@123")
    //     {
    //         isLoggedIn()    
    //         history.push("/")
    //     }
    //     else{
    //         alert("Incorrect Credentials")
    //     }
        
    // }
    return (
        <>
            {/* <div className="container">
                <h3>Login Page</h3>
                {/* {check()} */}
                {/* <form>
                    <div className="mb-3">
                        <label className="form-label">Username : </label>
                        <input ref={uname} className="form-control" type="text"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password : </label>
                        <input ref={password} type="password" className="form-control"/>
                    </div>
                    <button type="button" onClick={handleSubmitLoginForm} className="btn btn-primary">Submit</button>
                </form> */}

                {/* <div className="container mt-3">
                    <SocialMediaLogin isLoggedIn={isLoggedIn}  />
                </div>
            </div> */}
            <div class="container" style={{marginTop: "100px"}}>
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <div class="card shadow">
                            <div class="card-body">
                                <h4 class="card-title" style={{textAlign: "center"}}>Login</h4>
                                <div className=" mt-4" style={{textAlign: "center"}}>
                                    <SocialMediaLogin isLoggedIn={isLoggedIn}/>
                                </div>
                                <p className='mt-4' style={{textAlign: "center"}}>Only Google email based login authorization is currently 
                                    available for this website. Other login options should be available soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
