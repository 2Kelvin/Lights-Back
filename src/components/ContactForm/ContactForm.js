import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export function ContactUs() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_3zl05qc', 'template_xtev06r', form.current, 'm83FmjUWYqxNFbQeK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label type='hidden'>Email subject</label>
            <input type='text' name='emailSubject' required />

            <label for='inputName'>Name</label>
            <input type="text" name="userName" required id='inputName' />

            <label>Email</label>
            <input type="email" name="userEmail" required />

            <label>Pin location</label>
            <input type="text" name="userPinLocation" />

            <label>Phone number</label>
            <input type="tel" name="userPhoneNumber" />

            <label>Message</label>
            <textarea name="message" required />

            <input className='sendButton' type="submit" value="Send" />
        </form>
    );
};
