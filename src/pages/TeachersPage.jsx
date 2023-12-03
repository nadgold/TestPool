import React from "react";
import GetQs from "./TeachersComps/getQs";
import AddQs from "./TeachersComps/AddQs";
import UploadQs from "./TeachersComps/uploadQs";
import { firestore } from "../firebase";// Import firestore
import { Button } from "@mui/material";

function TeachersPage() {
    return (
        <div>
            <h1>Teachers Page</h1><br/>
            <AddQs/><UploadQs/><br/>
            <GetQs firestore={firestore} /><br/>
        </div>
    );
}

export default TeachersPage;
