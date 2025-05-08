import "./Contact.css";
import ContactForm from "../../components/Contact_form/ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Get In Touch</h1>
        <p>Feel free to contact me for any questions or opportunities!</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
