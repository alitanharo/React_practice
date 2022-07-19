import { useContext, useEffect,useState } from "react";
import { useLocation, useParams } from "react-router";
//import { MainContext } from "../context/MainProvider";

const Detail = () => {
   const [user, setUser] = useState();
   const { id } = useParams();
   const { state } = useLocation();

//const {selectedUser:user }= useContext(MainContext)
   useEffect(() => {
        
      const handleGetData = async () => { 
         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
         let data = await response.json();
         
         setUser(data);
        
          

      }
       handleGetData();


    },[])
   
   return (<>
        <p> Name:{user?.name}</p>
        <p> Email:{user?.email}</p>
        <p> location: {user?.address.city}</p>
         <p> Zipcode:{user?.address.zipcode}</p>
         <p> website: {user?.address.website}</p>
    
    
    </>);
}
 
export default Detail;