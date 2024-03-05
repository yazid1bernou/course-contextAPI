import { useState , useContext } from 'react'
import Navbar from './components/Navbar';
import {GlobalContext} from "./contextAPI/Global"
function App() {
  
 
  const {product , setProduct } =  useContext(GlobalContext);

  return (
    <>
      <Navbar />

      <h2> The title is : {product}</h2>
      <input type="text" onChange={(e) => setProduct(e.target.value)} /> 

    </>
  )
}

export default App
