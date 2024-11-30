import React from "./Submission";
import { useState } from "react";
import "./Submission.css";

function Submission() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[textarea,setTextarea]=useState("please enter your address with pincode");
    const[select,setSelect]=useState("");
    const handleSubmit=(e)  =>{
        e.preventDefault();
        console.log(name,email,password,textarea,select);
    }
    return(
        < div className="form">
        <form>
            <h1>Registration Form</h1>
            <label>Enter your Name:</label>
            <input type="text"value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <label>Enter your Email:</label>
            <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <label>Enter your Address:</label><br></br>
            <textarea value={textarea} onChange={(e)=>setTextarea(e.target.value)}/><br></br>
            <label className="password">Password:</label>
            <input className="password" type="password"value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <label>Department:</label>
<select value={select} onChange={(e)=>setSelect(e.target.value)}>
    <option value="CSE">CSE</option>
    <option value="ECE">ECE</option>
    <option value="IT">IT</option>
</select><br></br>
            <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
        </div>
    );
}
export default Submission;