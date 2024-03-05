import React, { useContext } from "react";
import { GlobalContext } from "../contextAPI/Global";


const Name = () => {
    const {name} = useContext(GlobalContext);
    return <>
       My name is : {name}
    
    </>
}


export default Name ;