import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import profileImage from '../images/photo.png';

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -inset-4 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img 
            src={profileImage} 
            alt="Ly Sarl" 
            className="relative rounded-xl w-full aspect-[4/5] object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <span className="text-sm text-primary font-bold tracking-[0.2em] mb-6 block uppercase">
            02 / THE BACKEND ENGINEER
          </span>
          <h2 className="headline-font text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Passionate about <span className="text-primary">Backend Systems & Database Architecture</span>
          </h2>
          
          <div className="space-y-6 text-on-surface/70 text-lg leading-relaxed font-sans">
            <p>
              Based in the heart of <span className="text-on-surface font-semibold">Cambodia</span>, I am a software engineer dedicated to the intersection of technical rigor and human-centric design. My journey began with a curiosity for how complex systems breathe, leading me to specialize in full-stack ecosystems.
            </p>
            <p>
              My goal is to evolve into a professional software engineer who doesn't just write code, but designs digital environments that solve real-world problems. I believe in clean code and the beauty of a well-optimized database.
            </p>
          </div>

          <div className="mt-12 p-8 bg-surface-container rounded-xl ghost-border overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <GraduationCap className="w-24 h-24" />
            </div>
            <h3 className="headline-font text-xl font-bold mb-4 relative z-10">Education</h3>
            <div className="flex items-start gap-4 relative z-10">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-bold text-on-surface">Associate of Web Development</p>
                <p className="text-on-surface-variant">Passerelles Numériques Cambodia</p>
                <p className="text-xs text-primary/60 mt-1 uppercase tracking-widest font-bold">Ongoing Academic Journey</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
