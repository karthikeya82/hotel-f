import { Link } from "react-router-dom";
import axios from 'axios';
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Usercontext";
export default function Loginpage()
{
    const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] =  useState('');
 const {setUser}= useContext(UserContext);
  async function handleLoginSubmit(ev)
  {
       ev.preventDefault();
       try{
        const {data}=await axios.post('/login',{email,password});
        setUser(data);
        alert('login succesful');
        setRedirect(true);
       } catch (e) {
        alert('login failed');
       }
      }
      if(redirect)
      {
         return <Navigate to = {'/'} />
      }
    return (
        
        <div className="=Lb">
            <div className="middle">
            <h1 className="Login">Login</h1>
            <form className="form" onSubmit={handleLoginSubmit}>
                <input type="email" 
                 placeholder="youremail.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" 
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)}/>
                <button className="primary">Login</button>
                <div className="d">
                    Don't have account yet? 
                    <Link to={'/register'}> Register Here</Link>
                </div>
            </form>
            </div>
        </div>
    );
}