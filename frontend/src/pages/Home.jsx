import homepage from "../assets/images/homepage.svg";

const Home = () => {
    return(
        <div className="home-page">
            <img src={homepage} alt="artsy photo of guitar piano and drum sticks" />
            <p>Where practice meets progress.</p>
        </div>
    )
}

export default Home;