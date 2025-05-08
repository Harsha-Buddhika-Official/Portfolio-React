import "./PageContact.css";
import NavigationBar from "../../components/Navigation_Bar/NavigationBar.jsx";
import Contact from "../../pages/page6/Contact.jsx";
import Footer from "../../pages/Footer/Footer.jsx";

function PageAbout() {
  return (
    <div className="page-contact-container">
      <div className="Navigator">
        <NavigationBar />
      </div>
      <div className="page-about">
        <div className="page-about-content">
          <h1>Contact Me</h1>
          <p>This is the contact page.</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
export default PageAbout;
