import './App.css';
import {Route,Routes} from "react-router-dom";
import Indexpage from "./pages/Indexpage";
import Loginpage from "./pages/Loginpage";
import Layout from "./Layout";
import Register from './pages/Register';
import axios from 'axios';
import { UserContextProvider } from './Usercontext';
import AccountPage from './pages/Account';
axios.defaults.baseURL='http://localhost:4000';
axios.defaults.withCredentials=true;
function App() {
  
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Indexpage/>}/>
      <Route path="/login" element={<Loginpage />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/account/:subpage?" element={<AccountPage/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
