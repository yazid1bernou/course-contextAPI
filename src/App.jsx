import { useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  
  const [product , setProduct] = useState("T-shirt") ;

  return (
    <>
      <Navbar product={product} />
      <h2> The title is : {product}</h2>
      <input type="text" onChange={(e) => setProduct(e.target.value)} /> 

    </>
  )
}

export default App
