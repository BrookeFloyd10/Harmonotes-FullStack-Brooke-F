import NavBar from "./NavBar";

const Header = ({ loggedInUser }) => {
    return (
        <header className="site-header">
            <div>
                <h1>Harmonotes</h1>
            </div>

            <NavBar loggedInUser={loggedInUser} />
        </header>
    );
}

export default Header;