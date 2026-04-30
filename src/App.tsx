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
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-neutral-800 selection:text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-neutral-950/80 backdrop-blur-md border-neutral-800"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold tracking-tighter">
                BM.
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/+2348123689153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-white text-black hover:bg-neutral-200 rounded-md"
                >
                  Hire Me
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-300 hover:text-white p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-950 border-b border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/+2348123689153"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-black bg-white hover:bg-neutral-200 rounded-md transition-colors mt-4 text-center"
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
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
                  Hi, I'm <span className="text-neutral-400">Bryan Myles</span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 max-w-2xl text-xl text-neutral-400"
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
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-colors bg-white text-black hover:bg-neutral-200 rounded-md"
                >
                  Hire Me
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-colors border border-neutral-800 text-white hover:bg-neutral-800 rounded-md"
                >
                  View My Work
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square sm:aspect-[4/5] max-w-md mx-auto w-full"
            >
              <div className="absolute inset-0 bg-neutral-900 rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden group">
                <img
                  src="/Bryan4wordpress.png"
                  alt="Bryan Myles"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "https://placehold.co/800x1000/171717/white?text=Upload+profile.jpg";
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 bg-neutral-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About Me</h2>
              <p className="text-lg text-neutral-400">
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
                className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white mb-6">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">No-Code Expert</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Mastering platforms like WordPress, Webflow, and Squarespace to
                  build professional websites without traditional coding barriers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white mb-6">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Vibe Coding</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Blending creativity with AI-assisted development to craft unique,
                  modern web experiences that stand out from the crowd.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white mb-6">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Efficient workflows mean your website gets launched quickly
                  without compromising on quality or attention to detail.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">My Skills</h2>
              <p className="text-lg text-neutral-400">
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
                  className="group p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 hover:bg-neutral-800/60 transition-all duration-300"
                >
                  <skill.icon className="w-8 h-8 mb-4 text-neutral-400 group-hover:text-white transition-colors" />
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-neutral-400">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 px-4 bg-neutral-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Work</h2>
              <p className="text-lg text-neutral-400">
                A selection of projects showcasing my diverse skill set.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "E-Commerce Boutique", desc: "A full-featured online store with custom product pages and seamless checkout experience." },
                { title: "Creative Agency Site", desc: "Dynamic portfolio website with custom animations and CMS-driven content." },
                { title: "Restaurant Website", desc: "Elegant dining website with online reservations and menu management.", img: "/restaurant.png" },
                { title: "SaaS Landing Page", desc: "Modern, conversion-focused landing page built with AI-assisted development." },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col h-full"
                >
                  <div className="aspect-[16/9] w-full bg-neutral-900 border-b border-neutral-800 flex items-center justify-center overflow-hidden">
                    {project.img ? (
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.dataset.failed) {
                            target.dataset.failed = 'true';
                            // Fallback to text if the image is missing
                            target.src = `https://placehold.co/800x450/171717/333333?text=Missing+Image`;
                          }
                        }}
                      />
                    ) : (
                      <Globe className="w-16 h-16 text-neutral-700 group-hover:text-neutral-500 transition-colors" />
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                        {project.title}
                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-neutral-400">{project.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 pb-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Let's Work Together</h2>
              <p className="text-lg text-neutral-400">
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
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Whether you need a new website, want to revamp an existing one,
                  or have questions about my services, feel free to reach out. I
                  typically respond within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="w-6 h-6 text-neutral-400" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-1">Email</h4>
                      <a href="mailto:hello@bryanmyles.dev" className="text-lg hover:text-white transition-colors">hello@bryanmyles.dev</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="w-6 h-6 text-neutral-400" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                      <a href="https://wa.me/+2348123689153" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-white transition-colors">+234 812 368 9153</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-neutral-400" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-1">Location</h4>
                      <p className="text-lg">Available Worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-black bg-white hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:ring-offset-neutral-950 transition-colors"
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
      <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold tracking-tighter mb-2">BM.</span>
            <span className="text-sm text-neutral-500">Bryan Myles — Web Developer</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-neutral-500">
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-neutral-900 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} Bryan Myles. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

