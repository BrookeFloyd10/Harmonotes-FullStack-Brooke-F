import {Link} from 'react-router';
import trebleClef from '../../assets/images/trebleClef.svg';
import eighthNote from '../../assets/images/eighthNote.svg';
import sixteenthNote from '../../assets/images/sixteenthNote.svg';
import quarterNote from '../../assets/images/quarterNote.svg';
import halfNote from '../../assets/images/halfNote.svg';

const NavBar = () =>{
    return(
    <nav className='nav-bar'>
        <ul>
            <li><img id="treble-clef" src={trebleClef} alt="treble clef icon" /></li>
            <li><Link to="/"><img src={eighthNote} alt= "8th note icon link to home page" />Home</Link></li>
            <li><Link to="/about"><img src={halfNote} alt= "half note icon link to about page" />About</Link></li>
            <li><Link to="/dashboard"><img src={sixteenthNote} alt= "16th note icon link to dashboard" />Dashboard</Link></li>
            <li><Link to="/library"><img src={quarterNote} alt= "quarter note icon link to library" />Library</Link></li>
        </ul>
    </nav>
    )
}


export default NavBar;