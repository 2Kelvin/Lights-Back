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
            <div className='inpContainer'>
                <input type='text' name='emailSubject' required id='inpEmailSubject' />
                <label className='labels' htmlFor='inpEmailSubject'>Email subject</label>
            </div>

            <div className='inpContainer'>
                <input type="text" name="userName" required id='inputName' />
                <label className='labels' htmlFor='inputName'>Name</label>
            </div>

            <div className='inpContainer'>
                <input type="email" name="userEmail" required id='inpEmail' />
                <label className='labels' htmlFor='inpEmail'>Email</label>
            </div>

            <div className='inpContainer'>
                <input type="text" name="userPinLocation" id='inpPin' />
                <label className='labels addedLabels' htmlFor='inpPin'>Pin location</label>
            </div>

            <div className='inpContainer'>
                <input type="tel" name="userPhoneNumber" id='inpPhoneNum' />
                <label className='labels addedLabels' htmlFor='inpPhoneNum'>Phone number</label>
            </div>

            <div className='inpContainer msgContainer'>
                <textarea name="message" required id='inpMessge' />
                <label className='msgLabel' htmlFor='inpMessge'>Message</label>
            </div>

            <input className='sendButton' type="submit" value="Send Email" />
        </form>
    );
};
