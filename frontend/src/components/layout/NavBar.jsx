import {Link} from 'react-router';
import trebleClef from '../../assets/images/trebleClef.svg';
import eighthNote from '../../assets/images/eighthNote.svg';
import sixteenthNote from '../../assets/images/sixteenthNote.svg';
import quarterNote from '../../assets/images/quarterNote.svg';
import halfNote from '../../assets/images/halfNote.svg';
import Button from '../shared/Button';
import REstNote from '../../assets/images/REstNote.svg';

const NavBar = ({ loggedInUser, setLoggedInUser }) =>{
    const handleLogOut = () => {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
    }
    return(
        <nav className='nav-bar'>
        <ul>
            <li><img id="treble-clef" src={trebleClef} alt="treble clef icon" /></li>

            {loggedInUser ? (
                <>
                <li><Link to="/dashboard"><img src={sixteenthNote} alt= "16th note icon link to dashboard" />Dashboard</Link></li>
                <li><Link to="/library"><img src={quarterNote} alt= "quarter note icon link to library" />Library</Link></li>
                <li><Link to="/about"><img src={halfNote} alt= "half note icon link to about page" />About</Link></li>
                <li><Button className="logout-btn" id="logout-btn" type="button" icon={<img src={REstNote} alt="rest note icon as logout button" />} label="Logout" onClick={handleLogOut} /></li>
                </>
            ) : (
                <>
                <li><Link to="/"><img src={eighthNote} alt= "8th note icon link to home page" />Login</Link></li>
                <li><Link to="/about"><img src={halfNote} alt= "half note icon link to about page" />About</Link></li>
                </>
            )}
    </ul>
    </nav>
    );
}


export default NavBar;