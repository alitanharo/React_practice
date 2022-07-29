import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({username:"", password:"" })

 
   //// const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("")
  const handleChange = (e) => { 
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    setForm({username:"", password:""});
    
  }







    return (<div>
        

      <form onChange={handleChange} className="border mx-auto d-flex flex-column mt-5  p-5 shadow-lg" style={{ maxWidth: "400px" }} onSubmit={handleSubmit }>
        <h1 className="mx-auto my-5 text-primery">LOGIN</h1>
        <div className="d-flex justify-content-between" >
           
    <label  >username</label>
    <input  name = "username" value={form.username} type="text"  className="border mx-2 rounded p-1" />
   
        </div>
        {form.username.length < 6 && form.username.length!==0  && <p className="text-danger "> username should be more than 6 character</p> }
  <div className="mt-2 d-flex justify-content-between">
    <label  >Password</label>
    <input name="password" value={form.password}  type="password" className="border mx-2 rounded p-1" />
  </div>
  
        <button type="submit" className="btn btn-success mt-4 " >login</button>
</form>
    </div>);
}
 
export default Login;