import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        
        e.preventDefault();

        console.log(form.current);

        emailjs.sendForm('service_e4f9rbv', 'template_wb3b9kj', form.current, 'QpVo9O881Qr7EKfU4')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });        
    }

    return (
        <div id="contact-me" className="section" >

            <h2 className="section__header">Contact Me</h2>

            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="from_name">Name</label>
                <input id="from_name" type="text" name="from_name"/>

                <label htmlFor="from_email">Email</label>
                <input id="from_email" type="email" name="from_email"/>

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5"></textarea>

                <button className="btn btn--accent" type="submit">Send Message</button>
            </form>

        </div>
    )
}

export default ContactForm;