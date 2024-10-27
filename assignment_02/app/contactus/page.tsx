import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import contactStyle from "./contactus.module.css"

const ContactUsPage = () => {
    return (
        <div>
            <Header/>
            <br />
            <div className={contactStyle.contact}>
                <h2>Contact Us</h2>
                <p>This is the contact page where you can reach us.</p>
            </div>
            <br />
            <Footer/>
        </div>
    );
};

export default ContactUsPage;