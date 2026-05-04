/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, MonitorSmartphone, Rocket, Layout, Box, Globe, ExternalLink, Mail, MapPin, Phone, Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans scroll-smooth">
      {/* Navigation */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold tracking-tighter text-blue-600">
                BM.
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/+2348123689153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                >
                  Hire Me
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/+2348123689153"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors mt-4 text-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative px-4 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 flex items-center min-h-[90vh]"
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 text-slate-900">
                  Hi, I'm <span className="text-blue-600">Bryan Myles</span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 max-w-2xl text-xl text-slate-600"
              >
                A web developer who transforms ideas into beautiful, functional
                websites using modern no-code tools and vibe coding.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-start"
              >
                <a
                  href="https://wa.me/+2348123689153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg rounded-md"
                >
                  Hire Me
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-colors border-2 border-slate-200 text-slate-700 hover:bg-slate-100 rounded-md"
                >
                  View My Work
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square max-w-sm mx-auto w-full"
            >
              <div className="absolute inset-0 bg-slate-100 rounded-full border-4 border-white shadow-[0_0_40px_rgba(59,130,246,0.3)] overflow-hidden group">
                <img
                  src="/Bryan4wordpress.png"
                  alt="Bryan Myles"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "https://placehold.co/800x1000/e2e8f0/64748b?text=Upload+profile.jpg";
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_60%,transparent_100%)] opacity-80"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">About Me</h2>
              <p className="text-lg text-slate-600">
                Passionate about creating websites that look great and perform
                even better.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">No-Code Expert</h3>
                <p className="text-slate-600 leading-relaxed">
                  Mastering platforms like WordPress, Webflow, and Squarespace to
                  build professional websites without traditional coding barriers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Vibe Coding</h3>
                <p className="text-slate-600 leading-relaxed">
                  Blending creativity with AI-assisted development to craft unique,
                  modern web experiences that stand out from the crowd.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Delivery</h3>
                <p className="text-slate-600 leading-relaxed">
                  Efficient workflows mean your website gets launched quickly
                  without compromising on quality or attention to detail.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">My Skills</h2>
              <p className="text-lg text-slate-600">
                Tools and platforms I use to bring your vision to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "WordPress", desc: "Custom themes, plugins, WooCommerce, and full site builds", icon: Box },
                { name: "Webflow", desc: "Responsive designs, CMS collections, and custom interactions", icon: Layout },
                { name: "Squarespace", desc: "Beautiful templates, e-commerce, and brand-focused websites", icon: MonitorSmartphone },
                { name: "Vibe Coding", desc: "AI-assisted development for modern, cutting-edge web apps", icon: Code2 },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <skill.icon className="w-8 h-8 mb-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{skill.name}</h3>
                  <p className="text-sm text-slate-600">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">Featured Work</h2>
              <p className="text-lg text-slate-600">
                A selection of projects showcasing my diverse skill set.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "E-Commerce Boutique", desc: "A full-featured online store with custom product pages and seamless checkout experience.", img: "/E-COMMERCE WEBSITE.jpg" },
                { title: "Blog Website", desc: "Dynamic and engaging blog platform with CMS-driven content and modern typography.", img: "/Blog website.jpg" },
                { title: "Restaurant Website", desc: "Elegant dining website with online reservations, menu management, and fluid layout.", img: "/Food website.jpg" },
                { title: "NGO Platform", desc: "Impactful non-profit website to drive donations and community engagement.", img: "/NGO website.jpg" },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 flex flex-col h-full shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/9] w-full bg-slate-100 border-b border-slate-200 flex items-center justify-center overflow-hidden">
                    {project.img ? (
                      <img 
                        src={project.img} 
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.dataset.failed) {
                            target.dataset.failed = 'true';
                            // Fallback to text if the image is missing
                            target.src = `https://placehold.co/800x450/e2e8f0/64748b?text=Missing+Image`;
                          }
                        }}
                      />
                    ) : (
                      <Globe className="w-16 h-16 text-slate-300 group-hover:text-blue-400 transition-colors" />
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                        {project.title}
                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                      </h3>
                      <p className="text-slate-600">{project.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 pb-32 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">Let's Work Together</h2>
              <p className="text-lg text-slate-600">
                Have a project in mind? I'd love to hear about it.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Get in Touch</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Whether you need a new website, want to revamp an existing one,
                  or have questions about my services, feel free to reach out. I
                  typically respond within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email</h4>
                      <a href="mailto:hello@bryanmyles.dev" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">hello@bryanmyles.dev</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                      <a href="https://wa.me/+2348123689153" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">+234 812 368 9153</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Location</h4>
                      <p className="text-lg font-medium text-slate-900">Available Worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-bold rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-4 text-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold tracking-tighter mb-2 text-blue-600">BM.</span>
            <span className="text-sm text-slate-500">Bryan Myles — Web Developer</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-100 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Bryan Myles. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
