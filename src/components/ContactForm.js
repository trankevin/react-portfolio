import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react';
import {ReactComponent as LinkedIn} from "../assets/icons/linkedin.svg";
import loadingIcon from "../assets/icons/loading.svg";

const ContactForm = () => {

    const [showLoading, setShowLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        setSent(false);
        setShowLoading(true);

        e.preventDefault();

        emailjs.sendForm('service_e4f9rbv', 'template_wb3b9kj', form.current, 'QpVo9O881Qr7EKfU4')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
              setShowLoading(false);
              setSent(true);
          }, (error) => {
              console.log(error.text);
          });    
        
    }

    return (
        <div id="contact-me" className="section" >

            <h2 className="section__header">Contact Me</h2>

            <p className="section__description">Shoot me a message here or connect on LinkedIn!</p>

            <div className="social-icons">
                <a href="https://www.linkedin.com/in/kevintrandev/" target="_blank"><LinkedIn /></a>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="from_name">Name<sup>*</sup></label>
                <input id="from_name" type="text" name="from_name" required/>

                <label htmlFor="from_email">Email<sup>*</sup></label>
                <input id="from_email" type="email" name="from_email" required/>

                <label htmlFor="message">Message<sup>*</sup></label>
                <textarea id="message" name="message" rows="5" required></textarea>
        
               <button className="btn btn--accent" type="submit">{!showLoading ? 'Send Message' : <img width="13px" src={loadingIcon}/> }</button> 

                {sent && <p>Message Sent!</p>}
                
            </form>

        </div>
    )
}

export default ContactForm;