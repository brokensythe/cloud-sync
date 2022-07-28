import '../stylesheets/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="navbar">
            <h1>Secure Login</h1>
            <Link to={"/signup"} className="links link-font">Sign Up</Link>
            <Link to={"/"} className="links link-font">Login</Link>
        </header>
    )
}

export default Navbar
