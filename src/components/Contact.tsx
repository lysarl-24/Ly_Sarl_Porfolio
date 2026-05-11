import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-primary font-bold tracking-[0.2em] mb-6 block uppercase">
              06 / GET IN TOUCH
            </span>
            <h2 className="headline-font text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
              Let's build something <span className="text-primary italic">legendary</span>.
            </h2>
            <p className="text-on-surface/70 text-lg mb-12 max-w-lg leading-relaxed">
              Whether you have a project in mind or just want to chat about tech, my inbox is always open. I'm currently looking for new opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:primary-gradient group-hover:text-on-primary transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-1">Email</p>
                  <a href="mailto:contact@darasok.dev" className="text-xl font-bold hover:text-primary transition-colors">
                    contact@darasok.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:primary-gradient group-hover:text-on-primary transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-1">Phone</p>
                  <p className="text-xl font-bold transition-colors group-hover:text-primary">+855 12 345 678</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:primary-gradient group-hover:text-on-primary transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-xl font-bold transition-colors group-hover:text-primary">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface-container p-10 rounded-2xl ghost-border shadow-2xl relative overflow-hidden"
          >
            {/* Form decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full translate-x-10 -translate-y-10" />

            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em]">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary transition-all text-on-surface outline-none placeholder:text-outline/30 font-medium"
                  placeholder="John Doe" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em]">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary transition-all text-on-surface outline-none placeholder:text-outline/30 font-medium"
                  placeholder="john@example.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em]">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary transition-all text-on-surface outline-none placeholder:text-outline/30 font-medium resize-none"
                  placeholder="Tell me about your project..." 
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full primary-gradient text-on-primary py-5 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(129,236,255,0.3)] transition-all duration-300 flex items-center justify-center gap-3"
                type="button"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
