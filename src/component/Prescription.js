import React from 'react'
import {  useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function Prescription() {
    let navigate = useNavigate();
    return (
        <>
            <div className="container-fluid pt-1">
                <div className="row m-auto mb-2">
                    <KeyboardArrowLeftIcon style={{ fontSize: "5rem" }} onClick={() => { navigate(-1) }} />
                </div>
                <img src="../images/prb.jpg" className="img-fluid " alt="prb" />
                <p><a href="https://www.freepik.com/free-vector/tiny-pharmacists-with-rx-prescription-drugs_9650843.htm#query=pharmacy%20medical%20prescription&position=21&from_view=keyword">Image by pch.vector</a> on Freepik</p>
            </div>
        </>
    )
}

export default Prescription