import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import MailBox from '../Components/MailBox';

const Contact = () => {
    return (
        <section className="relative min-h-screen pb-24">
            <Helmet>
                <title>Contact & Mail Box | AL SAEF RATUL - Web Developer</title>
                <meta
                    name="description"
                    content="Get in touch with Md. Al Saef Ratul. Send an inquiry via the mail send box, schedule a discussion, or connect for freelance projects and full-stack web development opportunities."
                />
                <link rel="canonical" href="https://developer-ratul.netlify.app/contact" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact & Mail Box | AL SAEF RATUL" />
                <meta
                    property="og:description"
                    content="Send a direct message or hire Md. Al Saef Ratul for your next web application project."
                />
                <meta property="og:url" content="https://developer-ratul.netlify.app/contact" />
                <meta property="og:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact & Mail Box | AL SAEF RATUL" />
                <meta
                    name="twitter:description"
                    content="Send a message or hire Md. Al Saef Ratul for your next web application project."
                />
                <meta name="twitter:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />
            </Helmet>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <MailBox isStandalone={true} />
            </motion.div>
        </section>
    );
};

export default Contact;
