"use client"
import React from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


function Questions() {
    return (
        <div className="w-full">
            <div className="m-5 h-14 flex items-center bg-white rounded-sm">
                <h1 className="ml-5 text-lg font-bold">Questions</h1>
            </div>
            <div className="m-5 p-5 bg-white rounded-sm grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                <TextField id="outlined-basic" label="Enter Question" variant="outlined" />
                <TextField id="outlined-basic" label="Enter Answer" variant="outlined" />
                </div>
                <Button variant="contained">Submit</Button>
            </div>
        </div>
    )
}

export default Questions
