import { Navigate, useParams} from "react-router-dom";
import { useContext,useState } from "react";
import { UserContext } from "../Usercontext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
    const { ready, user, setUser } = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    let { subpage } = useParams();
    
    async function logout() {
        try {
            await axios.post('/logout');
            setRedirect('/');
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
            // Optionally, you can handle the error further, e.g., show an alert
        }
    }
    
    if (subpage === undefined) {
        subpage = 'profile';
    }

    if (!ready) {
        return 'Loading';
    }
    
    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />;
    }
  
    function linkClasses(type = null) {
        let classes = 'book';
        if (type === subpage) {
            classes += ' book1';
        }
        return classes;
    }
    
    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div>
            <nav className="nav_bar">
                <Link to={'/account'} className={linkClasses('profile')}>My profile</Link>
                <Link to={'/account/bookings'} className={linkClasses('bookings')}>My bookings</Link>
                <Link to={'/account/places'} className={linkClasses('places')}>My accommodations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="profile">
                    Logged in as {user.name || 'Guest'} ({user.email || 'Not provided'})
                    <br />
                    <button className="primary" onClick={logout}>Logout</button>
                </div>
            )}
        </div>
    );
}
