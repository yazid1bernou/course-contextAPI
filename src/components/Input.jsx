import React, { useContext } from "react"; 
import { GlobalContext } from "../contextAPI/Global";


const Input = () => {
    const {setProduct} = useContext(GlobalContext)
    return <>
       <input type="text" onChange={(e) => setProduct(e.target.value)} /> 
    </>
}

export default Input ; 