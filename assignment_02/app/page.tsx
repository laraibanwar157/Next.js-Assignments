import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import pageStyle from "./page.module.css"
const HomePage = () => {
  return (
    <div>
      <h1 className={pageStyle.welcome}>Welcome <br/>We're thrilled to have you here!</h1><br />
      <Header/> <br />
      <ul className={pageStyle.ul}>
        <li><Link href="/about"><h3>About</h3></Link></li>
        <li><Link href="/contactus"><h3>Contact Us</h3></Link></li>
      </ul> <br />
      <Hero/><br/> 
      <Footer/>
    </div>
  );
};

export default HomePage;