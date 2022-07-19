import axios from "axios";
import { useEffect } from "react";

const ApiCall = () => { 
    

    const handleGetData = async () => { 
        try { 
            let { data,status} = await axios.get("https://jsonplaceholder.typicode.com/users")
            
            console.log(data)
            }
        catch (err) { }
    }

   
    useEffect(() => {
        handleGetData()
       







     },[])







    return (<div>


<h1>api call</h1>





        
    </div> );
}
 
export default ApiCall;