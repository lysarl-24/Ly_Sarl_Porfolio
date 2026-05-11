import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Intern Web Developer',
    company: 'ABC Company',
    period: 'JAN 2025 - PRESENT',
    description: 'Contributing to the development of internal tools and client-facing web applications. Collaborating with cross-functional teams to implement responsive designs and optimize backend performance using Laravel.',
    achievements: [
      'Assisting in database schema design and optimization for high-traffic apps.',
      'Implementing UI components using React and Tailwind CSS.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-8 md:px-24 bg-surface">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm text-primary font-bold tracking-[0.2em] mb-6 block uppercase">
          05 / EXPERIENCE
          <br />Professional Journey
        </span>
        <h2 className="headline-font text-4xl md:text-6xl font-bold mb-16 tracking-tight">
           <span className="text-primary">Backend Developer & Database Enthusiast
Personal & Academic Projects</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-12 pb-12 border-l border-outline-variant/30 group last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(129,236,255,1)]" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="headline-font text-2xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-on-surface-variant font-bold text-sm tracking-widest md:text-right mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-on-surface/70 leading-relaxed mb-6 text-lg">
                {exp.description}
              </p>
              
              <ul className="space-y-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* End marker */}
          <div className="relative pl-12">
            <div className="absolute left-[-9px] top-0 w-4 h-4 border-2 border-outline-variant rounded-full" />
            <p className="text-on-surface-variant italic font-medium">The journey continues...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
