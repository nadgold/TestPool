import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="content-container">
            <h3>Are you a student or a teacher?</h3><br/>
            <Link to="/teachers">
                <Button variant="contained" color="warning">teacher</Button>
            </Link>
            <Button> </Button>
            <Link to="/students">
                <Button variant="contained" color="success">student</Button>
            </Link>
            
        </div>
    )
}

export default HomePage