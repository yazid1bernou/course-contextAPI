import React , {useState , createContext} from "react";


export const GlobalContext = createContext();
const Global = ({children}) => {

    const [product , setProduct] = useState("T-shirt") ;
    const [name , setName] = useState("adem");

    return <GlobalContext.Provider value={{product , setProduct , name}}>
         {children}

    </GlobalContext.Provider>
}

export default Global ;
