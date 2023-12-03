import {MainListItems} from "./StudentsComps/ListItems";
import React from "react";
import './StudentsComps/Students.css'
import InputTestNum from "./StudentsComps/InputTestNum";


function StudentsPage() {
    return (
        <div className="students-grid">
            <div className="grid-item grid-item-1">
                <h1>Welcome Students!</h1>
            </div>
            <div className="grid-item grid-item-2"><MainListItems/></div>
            <div className="grid-item grid-item-3"><InputTestNum/></div>

            
            
            
        </div>
    )
}

export default StudentsPage