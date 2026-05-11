import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import profileImage from '../images/profile.png';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20 bg-surface overflow-hidden"
    >
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <span className="text-primary font-bold tracking-[0.2em] mb-6 block uppercase text-sm">
            01 / INTRODUCTION
          </span>
          
          <h1 className="headline-font text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
            Hi, I'm <span className="text-gradient">Ly Sarl</span>
          </h1>
          
          <h2 className="headline-font text-2xl md:text-4xl font-light text-on-surface-variant mb-8">
            Backend Web Developer
          </h2>
          
          <p className="text-lg md:text-xl text-on-surface/80 max-w-2xl mb-12 leading-relaxed">
           Designing robust backend systems and efficient database architectures with <span className="text-primary font-medium">Laravel</span>, and <span className="text-primary font-medium">MySQL</span>. I build secure, scalable, and high-performance solutions that power modern web applications.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="primary-gradient text-on-primary px-8 py-4 rounded-lg font-bold flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all duration-300"
            >
              View My Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a 
              whileHover={{ backgroundColor: 'rgb(41, 44, 49)' }}
              href="#contact"
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-bold border border-outline-variant transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]"
        >
          <div className="relative aspect-square [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] bg-primary p-[6px] shadow-[0_0_35px_rgba(129,236,255,0.35)]">
            <div className="h-full w-full [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] bg-surface-container-low p-[8px]">
              <img
                src={profileImage}
                alt="Ly Sarl portrait"
                className="h-full w-full object-cover [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-8 h-12 w-12 border-l-4 border-t-4 border-primary rounded-tl-2xl" />
            <div className="absolute right-0 top-8 h-12 w-12 border-r-4 border-t-4 border-primary rounded-tr-2xl" />
            <div className="absolute bottom-8 left-0 h-12 w-12 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
            <div className="absolute bottom-8 right-0 h-12 w-12 border-b-4 border-r-4 border-primary rounded-br-2xl" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
