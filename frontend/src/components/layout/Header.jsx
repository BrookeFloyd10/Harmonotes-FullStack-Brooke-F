import NavBar from "./NavBar";

const Header = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <header className="site-header">
            <div>
                <h1>Harmonotes</h1>
            </div>

            <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        </header>
    );
}

export default Header;