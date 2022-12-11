import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>

            <Banner></Banner>
            <Projects></Projects>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" /><br />
                <label>Email</label>
                <input type="email" name="user_email" />
                <br />
                <label>Message</label>
                <textarea name="message" />
                <br />
                <input type="submit" value="Send" />
            </form>

        </div>
    );
};

export default Home;