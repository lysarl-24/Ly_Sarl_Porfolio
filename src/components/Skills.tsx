import { motion } from 'motion/react';
import { Monitor, Terminal, Database, Construction } from 'lucide-react';

const skills = {
  frontend: [
    { name: 'HTML', icon: 'https://icon2.cleanpng.com/20180320/vgw/avew9415g.webp' },
    { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
    { name: 'JavaScript', icon: 'https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
    { name: 'TypeScript', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOWiJ07iKcOZVrnlzWu_0oKnYMTjyrb5i2Q&s' },
    { name: 'React.js', icon: 'https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png' },
    { name: 'Next.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmpE6vbnvmWBmnc0Jome5-IzRjluoF198pA&s' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png' },
  ],
  backend: [
    { name: 'Laravel', icon: 'https://e7.pngegg.com/pngimages/407/190/png-clipart-laravel-new-logo-tech-companies-thumbnail.png' },
    { name: 'PHP', icon: 'https://www.logotypes101.com/logos/203/272663FA02DE2DAA2BBAE2FC39F14783/php.png' },
    { name: 'Node.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kaToY5NaeW3ZXVmFgQCeV9mJaoO9Tki-5g&s' },
    { name: 'RESTful APIs', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s' },
    { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Python-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' },
  ],
  database: [
    { name: 'MySQL', icon: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg' },
    { name: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/500px-Postgresql_elephant.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
    { name: 'MongoDB', icon: 'https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg' },
    { name: 'Redis', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQMFM-qae12rqhcQbmLgZCYqirxwOWc-yQQ&s' },
  ],
  tools: [
    { name: 'Git & GitHub', icon: 'https://media.licdn.com/dms/image/v2/D5612AQFkuauK6Ha3Yg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1690626466559?e=2147483647&v=beta&t=bDO6av8m2DQTTDnXAFVp3WAyplDXG_-2fvmp48KNXnM' },
    { name: 'Docker', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB-4SkvAUqQ3bNPVYi8bAaf-SGvWZqTMztWHTu_X8rY1FtfrBs4qvo6IGfDSgHb189iwtx9I2z5TO2xByNrhus7UObgP4ZIeOy1eZ0l_ghPvxbfmWCqTvdPkd9HXFELa48y6gY6-bAbLoEl6LuWJ1l-UNVxCNKtUIXezuEUsyDZ18eTZRWQJuNaAkHWIi4536SLg6ZjyqGapAcMRutSohRMATWWA9lgs6-GX_5mxZ7T3OdbWagr5AbQNNUnXzkAgfNGiMgTqB9eVI' },
    { name: 'Postman', icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
    { name: 'Figma', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqQ1_eJpgIkYJHKnguZR6Dr9xxJg0-YJradsfnaZj_PqvhhA_-lnUum_PbGRm9adw2uTCOhsAWvMbrwsyD3q9IOmrUyXe1QNMzT1H2HwwNLlEmhO1VK1Zv1-FkJK8aXzfne7ke3_X_IEtCRFsWfob_be76x9ug3tfLnw7jONpLM3Dy3UQ-ObbiKharQJ4SUvQZIMPBk6Z-I0fw4lYPYbIWexhBIAA1LPfZdJOlJj2drnYlKqb9_pHjat7VY-qPQTi-aNw0oD9vnzw' },
    { name: 'Jira', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgmRRD8_qI5GRIo55T9dkP6KQtpzlWan-YCBh9kOfiii1_bfyI7-CSNpPNwiy7FtGuSd73qCYsBjvuzucyfTkG52d-b223epUb5GYa2Dwl6uuiKYfuDqIWNb7Gywblc0PMO-soG6Cu9TUwKmstQwLAXEqg1m4qQ6Xogcr73ZmrI1Ps6ME9btONrARBdcok2_PChnzBFflAk8_5QR0ZwylZ282ceu3dD8t782kupCanSzJ0RKbcEmFrMM8dih1jbjZ-UgU0XKg-o_8' },
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 md:px-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <span className="text-sm text-primary font-bold tracking-[0.2em] mb-6 block uppercase">
          03 / TECH STACK
        </span>
        <h2 className="headline-font text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          Tools of the <span className="text-primary">Trade</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Frontend */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-surface-container p-8 rounded-xl ghost-border hover:bg-surface-container-high transition-all cubic-transition group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="headline-font text-2xl font-bold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-surface-variant/50 rounded-lg border border-outline-variant hover:border-primary/50 transition-all cursor-default">
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-surface-container p-8 rounded-xl ghost-border hover:bg-surface-container-high transition-all cubic-transition group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                <Terminal className="w-8 h-8" />
              </div>
              <h3 className="headline-font text-2xl font-bold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-surface-variant/50 rounded-lg border border-outline-variant hover:border-primary/50 transition-all cursor-default">
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Database */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-surface-container-low p-8 rounded-xl ghost-border hover:bg-surface-container-high transition-all cubic-transition group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="headline-font text-xl font-bold">Database</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {skills.database.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors text-sm">
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-surface-container-low p-8 rounded-xl ghost-border hover:bg-surface-container-high transition-all cubic-transition group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                <Construction className="w-6 h-6" />
              </div>
              <h3 className="headline-font text-xl font-bold">Tools & Environments</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors text-sm px-3 py-1.5 bg-surface-container rounded-lg border border-outline-variant">
                  <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
