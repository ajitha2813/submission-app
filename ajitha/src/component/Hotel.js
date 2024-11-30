import React from "./Hotel";
import { useState } from "react";
function Hotel() {
    const [food, setFood] = useState ({
        idili:'10',
        kaju:'20',
        sabudana:'30',
        dosa:'40',
        parotta:'50',
        samosa:'60',
        chole:'70',
        poha:'80',
        kheer:'90'
    });
    const updatePrice = () =>{
        setFood((previousState) => {
            return { ...previousState, kaju:'100', chole:'200'}
        });
    }
    return(
        <>
        <h1>Menu price list</h1>
        
        <button onClick={updatePrice}>Update price</button>
        <h1>kaju price is {food.kaju}<br></br>
            chole price is {food.chole}
        </h1>
        </>
    );
}
export default Hotel;