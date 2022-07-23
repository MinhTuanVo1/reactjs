import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <div className="navbar">
            <img src="images/bba04beecb0e3a50631f 1.png" alt='banner'/>
            <div>
                <ul>
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li className="active">Homepage</li>
                        <li>Candidate</li>
                        <li>Enterprise</li>
                        <li>Job</li>
                        <li>News</li>
                        <li>
                            <Link to='/sign-in'>Log In</Link>
                        </li>
                        <li>
                            <Link to="/sign-up" className="btn">Sign up</Link>
                        </li>
                        <li>
                            <button className="language">
                                <span className="disable">Vi</span>
                                <span className="disable">/</span>
                                <span>En</span>
                            </button>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Header;