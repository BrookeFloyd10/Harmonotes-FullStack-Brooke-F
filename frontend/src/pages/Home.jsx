import homepage from "../assets/images/homepage.svg";
import LoginForm from "../components/LoginForm";

const Home = ({ setLoggedInUser }) => {
    return(
            <div className="home-page-wrapper">

                <div className="home-page">
                    <img src={homepage} alt="artsy photo of guitar piano and drum sticks" />
                    <p>Where practice meets progress.</p>
                </div>

                <LoginForm setLoggedInUser={setLoggedInUser} />
            </div>
    )
}

export default Home;