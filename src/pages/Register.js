import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Register()
{
    
    const [name,setName]=useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    async function registerUser(ev)
  {
       ev.preventDefault();
       try{
        await axios.post('/register',{
          name,
          email,
          password,
         });
       
       alert('Registration  succesful. now you can log in');
        } catch (e) {
          alert('Registration  unsuccesful. plese try again later');
        }
  }
    return (
        <div className="=Lb">
            <div className="middle">
            <h1 className="Login">Register</h1>
            <form className="form" onSubmit={registerUser}>

                <input type="text" 
                placeholder="enter name" 
                value={name} 
                onChange={ev => setName(ev.target.value)}/>

                <input type="email" 
                placeholder="youremail.com"
                value={email}
                onChange={ev => setEmail(ev.target.value)}/>

                <input type="password" 
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}/>

                <button className="primary">Register</button>
                <div className="d">
                    Already a member  
                    <Link to={'/login'}> Login</Link>
                </div>
            </form>
            </div>
        </div>
    );
}