import React, { useContext }  from "react";
import { GlobalContext } from "../contextAPI/Global";



const Navbar = () => { 
    
    const {product , setProduct} = useContext(GlobalContext); 
    
    return <>
        <h2> {product} </h2>
    </>
}

export default Navbar ;