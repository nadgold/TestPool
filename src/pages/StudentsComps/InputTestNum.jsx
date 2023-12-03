import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputTestNum() {
    const [testNum, setTestNum] = useState(0);

    const handleInput = (e) => {
        // Get the value of the input field and convert it to a number
        const inputNumber = parseInt(e.target.value, 10);

        // Check if the input is a valid number
        if (!isNaN(inputNumber)) {
            setTestNum(inputNumber); // Update the state with the input number
        } else {
            setTestNum(0);
        }
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="test-search"
                label="Enter Test Number"
                helperText="Some important text"
                onChange={handleInput} // Set the input event handler
            />
        </Box>
    );
}

