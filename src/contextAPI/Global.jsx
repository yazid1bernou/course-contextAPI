import React , {useState , createContext} from "react";


export const GlobalContext = createContext();
const Global = ({children}) => {

    const [product , setProduct] = useState("T-shirt") ;
    return <GlobalContext.Provider value={{product , setProduct}}>
         {children}

    </GlobalContext.Provider>
}

export default Global ;
