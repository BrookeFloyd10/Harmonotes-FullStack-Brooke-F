import ContactForm from '../components/shared/ContactForm';
import MrBob from "../assets/images/MrBob.svg";

const About = () => {
    return(
        <section className="about-page">
            <h1>Meet the Maestro!</h1>

            <div className="about-profile">
                <div className="about-photo">
                    <img className="bio-photo" src={MrBob} alt="photo of instructor" /> 
                </div>

                <div className="about-bio">
                    <p>Whether you are just starting your musical journey, picking up where you left off, overcoming challenging skills,
                    looking for creative insights, or wanting to optimize your instrument or recording setup, Bob is excited to join you on your journey.</p>
                    <p>Bob has been playing music since the age of 11, growing up with parents who were both musically inclined—one a luthier and the other a music teacher.
                    He started out on piano before expanding into fretted string instruments at age 14. Today, he teaches Acoustic & Electric Guitar, Dobro/Lap Slide, Bass, 
                    Banjo, Mandolin, Dulcimer, Hammered Dulcimer, Ukulele, and Entry-Level Piano.</p>
                    <p>A Roberto-Venn School of Luthiery Certified Luthier since 2009, Bob brings years of experience in instrument setup and playability. Since 2015, he has 
                    performed live and in the studio with The Owl in the Oak Collective, exploring styles ranging from classical, jazz, world, and folk to blues, rock, 
                    metal, electronic, and hip-hop. He also produces and records in Ableton Live 12 while recognizing the value of all DAWs.</p>
                    <p>Bob encourages sight-reading, ear training, music theory, solfège, and technical exercises to help students build a strong musical foundation, 
                    no matter the style they wish to pursue. He hopes to meet you soon so you can PLAY and enjoy the Magic & Science of Music together!</p>
                </div>
            </div>

            <ContactForm />
        </section>
    );
}

export default About;