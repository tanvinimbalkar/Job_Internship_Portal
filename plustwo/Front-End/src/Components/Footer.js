import React from 'react'

export default function Footer() {
    const footerStyle ={
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "50px",
        backgroundColor: "#0d6efd",
        color: "white",
        textAlign: "center",
        paddingTop: "20px",
        fontSize: "10px",
      
      };
    return (
        
        <footer style={footerStyle}>
            <b className="container" bold='true' text-align='left' >Disclaimer: Please note that, this website is still under Testing and is not fully functional and operational yet. This website's owners or its affiliates or its office bearers or its partners, do not take any responsibility of validity of any of the Job postings here. As a user, please make your best judgement while applying for the jobs through this website at this moment.</b>
        </footer>
    )
}
