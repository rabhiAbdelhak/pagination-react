import Recat ,{ useContext, useState } from "react";

const ConfigueContext = Recat.createContext();


export const useConfigueContext = () => {
    return useContext(ConfigueContext);
}

export const ConfigueContextProvider = ({children}) => {
    const [userPerPage, setUserPerPage] = useState(25);

    return <ConfigueContext.Provider value={
        {
            userPerPage,
            setUserPerPage
        }
    }>
         {children}
    </ConfigueContext.Provider>
}