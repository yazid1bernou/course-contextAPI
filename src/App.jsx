import { useState , useContext } from 'react'
import Navbar from './components/Navbar';
import Input from './components/Input';
import {GlobalContext} from "./contextAPI/Global";

function App() {
  
 
  const {product} =  useContext(GlobalContext);

  return (
    <>
      <Navbar />

      <h2> The title is : {product}</h2>
      <Input />

    </>
  )
}

export default App
