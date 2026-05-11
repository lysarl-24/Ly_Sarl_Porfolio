import { motion } from 'motion/react';
import { ExternalLink, Code2 } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  // {
  //   title: 'Design Portfolio',
  //   description: 'Focus on UI/UX design and prototyping. Crafting intuitive user journeys and high-fidelity visual interfaces.',
  //   image: 'https://lh3.googleusercontent.com/aida/ADBb0ug3qss2K7JCU4LnDtAbfWNYxLuMiWUY1fIawf3bba7eKOwFgHp4biFCaboHeR0echQCc64LDjmBLOsnkpzJz-EnP41e8XtaFT6NDC7Vqncc3UppOs4dHa_QddZFdySoDPqTQ4STX48JOfl3Nf2OrwrG4THuGxsVoF-05zH10KHXq2a9LCy4FqwfhzhrRSdqxIAI0nKPYYPdOVFF2P8gbdidkR8qx8o6hzW6DTHUmlgkFv_0ndo6NeFSAQ4',
  //   category: 'UI/UX DESIGNER',
  //   link: '#',
  //   tags: [{ name: 'Figma', icon: '' }]
  // },
  {
    title: 'Web Design Basics',
    description: 'A showcase of core frontend skills, demonstrating proficiency in semantic structure, responsive layouts, and interactive elements.',
    image: 'https://www.simsadvertising.com/wp-content/uploads/2021/07/5-Important-Elements-of-Web-Design-scaled.jpg',
    category: 'FRONTEND DEVELOPER',
    link: '#',
    tags: [{ name: 'HTML', icon: '' }, { name: 'CSS', icon: '' }, { name: 'JS', icon: '' }]
  },
  {
    title: 'Algorithm Bot',
    description: 'A Telegram chatbot built using Python algorithms to solve complex tasks and provide automated data processing.',
    image: 'https://static.flowhunt.io/images/blog/0x9a83d75f3195c205.webp',
    category: 'SOFTWARE ENGINEER',
    link: '#',
    tags: [{ name: 'Python', icon: '' }]
  },
  {
    title: 'Task Management App',
    description: 'A functional productivity tool built with JavaScript, featuring dynamic state management and local data persistence.',
    image: 'https://s3-alpha.figma.com/hub/file/6852965333/bd9d8dc8-619a-41b3-99b5-6df775e329c9-cover.png',
    category: 'WEB DEVELOPER',
    link: '#',
    tags: [{ name: 'JavaScript', icon: '' }]
  },
  // {
  //   title: 'Chomnuoy Web Application',
  //   description: 'A complex VC1 full-stack system designed for large-scale data handling and secure user interaction workflows.',
  //   image: 'https://lh3.googleusercontent.com/aida/ADBb0ujdbKdxMwDmXGg62lqQV1KG0HTBwgB7BOvluTdbMz6710JQoQgk7DqbIBeo8O3MfNClhPyeJm_GaMD-QlIvhbYftxWS65s6WJW3ejPdh-Ia9UbJzB2IdwS1LNg8cwd3-WPcmSH-SGNXt6UHTYPUc9w0arYaEx6--HGJJ10TG3XJ-TVrhVnMlb5Wv_76aDnfeMcGakUJqikH03hwdduLW_sZpQhydkeCjTrriiaG3PrCbM4MmKQVR_cG9yg',
  //   category: 'FULL-STACK DEVELOPER',
  //   link: '#',
  //   tags: [{ name: 'Laravel', icon: '' }, { name: 'React.js', icon: '' }, { name: 'MySQL', icon: '' }]
  // }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
          <div>
            <span className="text-sm text-primary font-bold tracking-[0.2em] mb-6 block uppercase">
              04 / SELECTED WORKS
            </span>
            <h2 className="headline-font text-4xl md:text-6xl font-bold tracking-tight">
              Building <span className="text-primary">Value</span> Through Code
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-sm mt-6 md:mt-0 text-lg">
            A curated collection of systems designed for performance and usability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 bg-surface-container shadow-xl aspect-video cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 cubic-transition"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    className="p-3 bg-surface rounded-full shadow-lg"
                  >
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    className="p-3 bg-surface rounded-full shadow-lg"
                  >
                    <Code2 className="w-6 h-6 text-primary" />
                  </motion.a>
                </div>
              </div>

              <h3 className="headline-font text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-on-surface-variant mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag.name} className="px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant text-[10px] font-bold tracking-wider uppercase text-on-surface-variant">
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="text-xs font-bold text-primary uppercase tracking-widest">
                {project.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
