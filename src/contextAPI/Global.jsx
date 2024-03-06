import React , {useState , createContext} from "react";


export const GlobalContext = createContext();
const Global = ({children}) => {

    const [products , setProducts] = useState([]) ;
    const [name , setName] = useState("adem");
    const fetchAllProducts =  
                             fetch('https://fakestoreapi.com/products')
                             .then(res=>res.json())
                             .then(json=>setProducts(json));
    
    const DeleteProduct = (id) => {
       setProducts(products.filter( (p) => p.id != id))
    }
    
    return <GlobalContext.Provider value={{products , setProducts , name , fetchAllProducts , DeleteProduct}}>
         {children}

    </GlobalContext.Provider>
}

export default Global ;
