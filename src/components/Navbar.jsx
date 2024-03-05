import React, { useContext }  from "react";
import { GlobalContext } from "../contextAPI/Global";
import Name from "./Name";


const Navbar = () => { 
    
    const {product} = useContext(GlobalContext); 
    
    return <>
        <h2> {product} </h2>
        <Name />
    </>
}

export default Navbar ;