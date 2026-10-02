import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import {
    AiOutlineMail,
    AiOutlineUser,
    AiOutlineMessage,
    AiOutlinePhone,
    AiOutlineCheck,
    AiOutlineCopy,
    AiOutlineSend
} from 'react-icons/ai';
import { BsWhatsapp, BsGeoAlt, BsClockHistory, BsLightningChargeFill } from 'react-icons/bs';

const quickTopics = [
    { label: "💼 Freelance Project", subject: "Inquiry about a Freelance Project", text: "Hi Ratul, I have a web project and would love to collaborate with you..." },
    { label: "🚀 Job Opportunity", subject: "Full-Time / Contract Developer Role", text: "Hi Ratul, we have an exciting opportunity that matches your frontend skillset..." },
    { label: "🤝 Tech Collaboration", subject: "Open Source / Tech Collaboration", text: "Hey Ratul, saw your work on GitHub and wanted to discuss collaborating on..." },
    { label: "👋 Quick Inquiry", subject: "General Inquiry / Hello", text: "Hello Md. Al Saef Ratul, I was checking out your portfolio and wanted to connect..." },
];

const MailBox = ({ isStandalone = false }) => {
    // ✅ Formspree integration — form ID: xleynpgl
    const [state, handleFormspreeSubmit] = useForm("xleynpgl");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [copiedField, setCopiedField] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errorMsg) setErrorMsg('');
    };

    const handleTopicClick = (topic) => {
        setFormData((prev) => ({
            ...prev,
            subject: topic.subject,
            message: prev.message ? prev.message : topic.text
        }));
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedField(type);
        setTimeout(() => setCopiedField(null), 2500);
    };

    // Delegate directly to Formspree's handleSubmit — it manages state.submitting & state.succeeded
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setErrorMsg("Please fill in your name, email, and message.");
            return;
        }
        setErrorMsg('');
        handleFormspreeSubmit(e);
    };

    const handleReset = () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    // ✅ state.succeeded is the single source of truth (from Formspree)
    const isSuccess = state.succeeded;

    return (
        <section id="contact" className={`relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 ${isStandalone ? 'mt-28 mb-20' : 'mt-32'}`}>
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[var(--color-primary)] opacity-5 blur-[120px] pointer-events-none rounded-full" />

            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)] text-sm font-medium mb-4">
                        <BsLightningChargeFill className="animate-pulse" />
                        <span>Let's Build Something Together</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
                        Send Me A <span className="text-[var(--color-primary)]">Message</span>
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg mt-3 max-w-2xl mx-auto">
                        Have an idea, project, or opportunity in mind? Drop a message in the box below and I will get back to you promptly!
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Direct Contact Details & Availability Card */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5 space-y-6"
                >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-bl-full pointer-events-none" />

                        <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                            <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping inline-block" />
                            <span>Quick Contact Info</span>
                        </h3>
                        <p className="text-gray-400 text-sm mt-2">
                            Prefer direct communication? Feel free to copy my contacts or reach out on WhatsApp.
                        </p>

                        <div className="mt-6 space-y-4">
                            {/* Email Card with 1-Click Copy */}
                            <div className="group relative flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--color-primary)]/40 transition-all duration-300">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
                                        <AiOutlineMail size={20} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-xs text-gray-400 block font-medium">Email Address</span>
                                        <a href="mailto:saef.ratul@gmail.com" className="text-sm font-semibold text-white truncate block hover:text-[var(--color-primary)] transition-colors">
                                            saef.ratul@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => copyToClipboard('saef.ratul@gmail.com', 'email')}
                                    className="p-2 rounded-lg bg-white/10 hover:bg-[var(--color-primary)]/20 text-gray-300 hover:text-white transition-all ml-2"
                                    title="Copy Email"
                                    aria-label="Copy Email Address"
                                >
                                    {copiedField === 'email' ? (
                                        <span className="flex items-center text-xs text-emerald-400 gap-1 font-semibold">
                                            <AiOutlineCheck size={16} /> Copied!
                                        </span>
                                    ) : (
                                        <AiOutlineCopy size={16} />
                                    )}
                                </button>
                            </div>

                            {/* Phone Card with 1-Click Copy */}
                            <div className="group relative flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--color-primary)]/40 transition-all duration-300">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
                                        <AiOutlinePhone size={20} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-xs text-gray-400 block font-medium">Direct Phone / WhatsApp</span>
                                        <a href="tel:01867781018" className="text-sm font-semibold text-white truncate block hover:text-[var(--color-primary)] transition-colors">
                                            +880 1867-781018
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => copyToClipboard('+8801867781018', 'phone')}
                                    className="p-2 rounded-lg bg-white/10 hover:bg-[var(--color-primary)]/20 text-gray-300 hover:text-white transition-all ml-2"
                                    title="Copy Phone Number"
                                    aria-label="Copy Phone Number"
                                >
                                    {copiedField === 'phone' ? (
                                        <span className="flex items-center text-xs text-emerald-400 gap-1 font-semibold">
                                            <AiOutlineCheck size={16} /> Copied!
                                        </span>
                                    ) : (
                                        <AiOutlineCopy size={16} />
                                    )}
                                </button>
                            </div>

                            {/* WhatsApp Direct Chat Button */}
                            <a
                                href="https://wa.me/8801867781018?text=Hello%20Ratul,%20I%20am%20reaching%20out%20from%20your%20portfolio!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:text-white font-medium text-sm transition-all duration-300 shadow-sm"
                            >
                                <BsWhatsapp size={18} />
                                <span>Message Directly on WhatsApp</span>
                            </a>
                        </div>

                        {/* Status Badges */}
                        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs text-gray-400">
                            <div className="flex items-center gap-2">
                                <BsGeoAlt className="text-[var(--color-primary)] shrink-0" size={16} />
                                <span>Dhaka, Bangladesh (Remote)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BsClockHistory className="text-[var(--color-primary)] shrink-0" size={16} />
                                <span>Response: &lt; 12 Hours</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Interactive Mail Send Box Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7"
                >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                        
                        {/* Topic Pre-fill Chips */}
                        <div className="mb-6">
                            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">
                                💡 Quick Topic Starters (Click to pre-fill)
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {quickTopics.map((topic, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => handleTopicClick(topic)}
                                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[var(--color-primary)]/20 border border-white/10 hover:border-[var(--color-primary)]/50 text-gray-300 hover:text-white transition-all duration-200"
                                    >
                                        {topic.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success-box"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="py-12 px-4 text-center space-y-4"
                                >
                                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 text-3xl">
                                        <AiOutlineCheck />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                                    <p className="text-gray-300 text-sm max-w-md mx-auto">
                                        Thank you for getting in touch, <strong className="text-white">{formData.name || 'Friend'}</strong>. I will review your inquiry and respond to your email shortly!
                                    </p>
                                    <div className="pt-4 flex justify-center gap-4">
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all"
                                        >
                                            Send Another Message
                                        </button>
                                        <a
                                            href={`mailto:saef.ratul@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                                            className="px-6 py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-medium text-sm hover:opacity-90 transition-all"
                                        >
                                            Open in Mail App
                                        </a>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="mail-form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                >
                                    {errorMsg && (
                                        <div className="p-3 text-sm text-red-300 bg-red-500/20 border border-red-500/40 rounded-xl">
                                            {errorMsg}
                                        </div>
                                    )}

                                    {/* Name and Email Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="user_name" className="block text-xs text-gray-300 font-medium mb-1.5">
                                                Your Name <span className="text-[var(--color-primary)]">*</span>
                                            </label>
                                            <div className="relative">
                                                <AiOutlineUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    id="user_name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="w-full bg-white/5 border border-white/15 focus:border-[var(--color-primary)] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                                                />
                                            </div>
                                            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-1" />
                                        </div>

                                        <div>
                                            <label htmlFor="user_email" className="block text-xs text-gray-300 font-medium mb-1.5">
                                                Your Email Address <span className="text-[var(--color-primary)]">*</span>
                                            </label>
                                            <div className="relative">
                                                <AiOutlineMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    id="user_email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className="w-full bg-white/5 border border-white/15 focus:border-[var(--color-primary)] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                                                />
                                            </div>
                                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="mail_subject" className="block text-xs text-gray-300 font-medium mb-1.5">
                                            Subject
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="mail_subject"
                                                name="subject"
                                                type="text"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Project Inquiry / Job Opportunity..."
                                                className="w-full bg-white/5 border border-white/15 focus:border-[var(--color-primary)] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Message Area */}
                                    <div>
                                        <div className="flex justify-between items-center mb-1.5">
                                            <label htmlFor="mail_message" className="text-xs text-gray-300 font-medium">
                                                Your Message <span className="text-[var(--color-primary)]">*</span>
                                            </label>
                                            <span className="text-[11px] text-gray-500">
                                                {formData.message.length} characters
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <textarea
                                                id="mail_message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your project details, timeline, questions or just say hi..."
                                                className="w-full bg-white/5 border border-white/15 focus:border-[var(--color-primary)] rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
                                            />
                                        </div>
                                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1" />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="group relative w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[#9b42cf] hover:from-[#d685fa] hover:to-[var(--color-primary)] text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(var(--color-primary-rgb),0.5)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                                    >
                                        {/* Shine sweep animation */}
                                        <span className="absolute inset-0 w-full h-full bg-white opacity-20 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700 ease-out" />
                                        
                                        {state.submitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                <span>Sending Mail...</span>
                                            </>
                                        ) : (
                                            <>
                                                <AiOutlineSend className="text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                                <span>Send Mail Now</span>
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default MailBox;
