import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import aboutStyle from './about.module.css'

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <br />
            <div className={aboutStyle.about}>
            <h2>About Page</h2>
            <p>This is about page where we describe our missions.</p>
            </div>
            <br />
            <Footer/>
        </div>
    );
};

export default AboutPage;