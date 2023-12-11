import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import StatusCard from '../StatusCard/StatusCard';
import { MdMarkEmailRead } from "react-icons/md";
import { RiMailCloseLine } from "react-icons/ri";

// this is the actual form; it's used to send the email
export function ContactUs() {
    const form = useRef();
    // if email is sent, it updates this state & displays a successful email sent card
    const [success, setSuccess] = useState('');
    // if email is not sent, it updates this state & displays an error sending email card
    const [error, setError] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_3zl05qc', 'template_xtev06r', form.current, 'm83FmjUWYqxNFbQeK')
            .then((result) => {
                console.log(result.text);
                // displaying an email sent successfully card
                setSuccess('successful')
                // removing the email sent successfully sent card after 3seconds
                setTimeout(() => { setSuccess('') }, 3000);
                // clearing all input fields
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                // displaying an 'error sending email' card
                setError('error');
                // removing the 'error sending email' card after 3seconds
                setTimeout(() => { setError('') }, 3000);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className='inpContainer'>
                <input type='text' name='emailSubject' required placeholder='' />
                <label className='labels'>Email subject</label>
            </div>

            <div className='inpContainer'>
                <input type="text" name="userName" required placeholder='' />
                <label className='labels'>Name</label>
            </div>

            <div className='inpContainer'>
                <input type="email" name="userEmail" required placeholder='' />
                <label className='labels'>Email</label>
            </div>

            <div className='inpContainer'>
                <input type="text" name="userPinLocation" placeholder='' />
                <label className='labels addedLabels'>Pin location</label>
            </div>

            <div className='inpContainer'>
                <input type="tel" name="userPhoneNumber" placeholder='' />
                <label className='labels addedLabels'>Phone number</label>
            </div>

            <div className='inpContainer msgContainer'>
                <textarea name="message" required />
                <label className='msgLabel'>Message</label>
            </div>

            <input className='sendButton' type="submit" value="Send Email" />

            {success === 'successful' ?
                <StatusCard
                    theIcon={<MdMarkEmailRead className='emailIcon' />}
                    msg='Email sent!'
                /> : null}

            {error === 'error' ?
                <StatusCard
                    theIcon={<RiMailCloseLine className='errIcon' />}
                    msg='Email not sent! Check your network connection'
                /> : null}
        </form>
    );
};
