import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 dark:opacity-20">
        <div className="absolute -top-[100px] -right-[100px] w-64 h-64 bg-accent rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[100px] -left-[100px] w-64 h-64 bg-accent rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10 md:mb-16"
        >
          Get In <span className="text-accent">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              to me!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:gadhavimohan71@gmail.com"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:border-accent transition-colors">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Email
                  </p>
                  <p className="font-medium">gadhavimohan71@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919152336862"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:border-accent transition-colors">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Phone
                  </p>
                  <p className="font-medium">+91 9152336862</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group">
                <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Location
                  </p>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-500/20 flex items-center justify-center text-white dark:text-blue-500 hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:bg-blue-500 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-white/20 flex items-center justify-center text-white dark:text-white hover:bg-black hover:text-white dark:hover:text-white dark:hover:bg-gray-500 transition-all"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
