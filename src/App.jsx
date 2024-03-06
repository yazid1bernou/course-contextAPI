import { useState , useContext, useEffect } from 'react'
import Navbar from './components/Navbar';
import Input from './components/Input';
import {GlobalContext} from "./contextAPI/Global";
import { BsEyeFill , BsEyeSlashFill } from "react-icons/bs";

function App() {
  
 
  const {products , fetchAllProducts} =  useContext(GlobalContext);   
  const [show , setShow] =  useState(true);
  
  useEffect( () => {
      fetchAllProducts
  } , [])
  return (
    <>
     {/*  <Navbar />

      <h2> The title is : {product}</h2>
      <Input />
 */}
    
      <div className='container m-4'>
          <div className=''  style={{display : "flex" , justifyContent : "space-between"}}>
             <div>
              <h5>All products</h5>
             </div>
             <button className='btn btn-primary' onClick={()=> setShow(!show)}>{show ? <BsEyeFill /> : <BsEyeSlashFill />}</button>
          </div>
          <div className=''>
               {/* --------- Form ---------------------*/}
               {show && (
               <form>
                    <div class="mb-3">
                      <label  class="form-label">Title</label>
                      <input type="text" class="form-control" />
                   </div>
                   <div class="mb-3">
                      <label  class="form-label">Description</label>
                      <input type="text" class="form-control" />
                   </div>
                   <div class="mb-3">
                      <label  class="form-label">Price</label>
                      <input type="text" class="form-control" />
                   </div>
                   <div class="mb-3">
                      <label  class="form-label">Image</label>
                      <input type="text" class="form-control" />
                   </div>
                   
                   <button type="submit" class="btn btn-primary">Submit</button>
               </form>
               )}
               {/* ------------ Display All products -------------*/}
              <table class="table">
                    <thead class="table-light">
                      <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Image</th>
                      <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {products?.map(({title , description , price , image}) => {
                            return (
                             <tr>
                                <td>1</td>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td>{price}</td>
                                <td><img src={image} style={{ width : "50px"}} /></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td> 
                             </tr>
                            )

                    }
                    )}
                    
                    </tbody>
              </table>
               
         </div>
        
      </div>
    </>
  )
}

export default App
