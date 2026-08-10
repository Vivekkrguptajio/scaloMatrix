import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section id="contact-form" className="relative w-full py-24 md:py-32 bg-[#0a0a0a] font-sans overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(253,88,0,0.08)_0%,transparent_70%)] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side */}
          <div className="lg:sticky lg:top-40 h-fit flex flex-col gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#FD5800] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800]" />
                  Get In Touch
                </div>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-white"
              >
                Let's build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066]">something amazing.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/40 font-medium text-lg max-w-md leading-relaxed"
              >
                Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              {/* Contact Item */}
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-[#FD5800] group-hover:text-white group-hover:border-[#FD5800] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 font-bold uppercase tracking-[0.15em] mb-1">Email Us</p>
                  <a href="mailto:hello@scalomatrix.com" className="text-lg font-bold text-white hover:text-[#FD5800] transition-colors">hello@scalomatrix.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-[#FD5800] group-hover:text-white group-hover:border-[#FD5800] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 font-bold uppercase tracking-[0.15em] mb-1">Call Us</p>
                  <a href="tel:+919876543210" className="text-lg font-bold text-white hover:text-[#FD5800] transition-colors">+91 987 654 3210</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="pt-4 lg:pt-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xl ml-auto">
              
              {[
                { type: 'text', name: 'name', placeholder: 'Your Full Name', delay: 0.2 },
                { type: 'email', name: 'email', placeholder: 'Email Address', delay: 0.3 },
              ].map((field) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: field.delay }}
                >
                  <input 
                    type={field.type} 
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder} 
                    className="w-full bg-white/5 border border-white/10 px-6 py-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FD5800] focus:bg-white/[0.03] transition-all font-medium rounded-2xl text-base"
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border border-white/10 px-6 py-5 text-base font-medium rounded-2xl focus:outline-none focus:border-[#FD5800] focus:bg-white/[0.03] transition-all appearance-none ${!formData.service ? 'text-white/30' : 'text-white'}`}
                  required
                >
                  <option value="" disabled>What are you looking for?</option>
                  <option value="Media Buying">Media Buying & Planning</option>
                  <option value="Content Production">Content Production</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="Social Media">Social Media Management</option>
                  <option value="Influencer">Influencer Marketing</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..." 
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 px-6 py-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FD5800] focus:bg-white/[0.03] transition-all font-medium rounded-2xl text-base resize-none"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-2"
              >
                <button 
                  type="submit"
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-300 tracking-wide hover:shadow-[0_0_40px_rgba(253,88,0,0.3)]"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
