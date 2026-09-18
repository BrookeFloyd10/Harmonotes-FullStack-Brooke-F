import homepage from "../assets/images/homepage.svg";
import "../components/LoginForm"
import LoginSignupForm from "../components/LoginForm";

const Home = () => {
    return(
        <>
            <div className="home-page">
                <img src={homepage} alt="artsy photo of guitar piano and drum sticks" />
                <p>Where practice meets progress.</p>
            </div>

            <LoginForm />
        </>
    )
}

export default Home;