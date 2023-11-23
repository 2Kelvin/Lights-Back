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
                alert('success');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor='inpEmailSubject'>Email subject</label>
            <input type='text' name='emailSubject' required id='inpEmailSubject' />

            <label htmlFor='inputName'>Name</label>
            <input type="text" name="userName" required id='inputName' />

            <label htmlFor='inpEmail'>Email</label>
            <input type="email" name="userEmail" required id='inpEmail' />

            <label htmlFor='inpPin'>Pin location</label>
            <input type="text" name="userPinLocation" id='inpPin' />

            <label htmlFor='inpPhoneNum'>Phone number</label>
            <input type="tel" name="userPhoneNumber" id='inpPhoneNum' />

            <label htmlFor='inpMessge'>Message</label>
            <textarea name="message" required id='inpMessge' />

            <input className='sendButton' type="submit" value="Send" />
        </form>
    );
};
