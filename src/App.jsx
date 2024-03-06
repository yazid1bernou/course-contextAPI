import { useState , useContext } from 'react'
import Navbar from './components/Navbar';
import Input from './components/Input';
import {GlobalContext} from "./contextAPI/Global";

function App() {
  
 
  const {product} =  useContext(GlobalContext);   

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
             <button className='btn btn-primary'> Eye icon</button>
          </div>
          <div className=''>
               {/* --------- Form ---------------------*/}
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
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tbody>
              </table>
               
         </div>
        
      </div>
    </>
  )
}

export default App
