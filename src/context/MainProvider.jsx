
import { createContext } from "react";
import { useState } from "react";
export const MainContext = createContext({ selectedUser: {}, setSelectedUser: () => { } });

const MainProvider = ({children }) => {
     const [selectedUser, setSelectedUser] = useState();

    return (<MainContext.Provider value={{setSelectedUser,selectedUser}}>
        { children}
    </MainContext.Provider>);
}
 
export default MainProvider;