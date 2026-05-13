import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/70 backdrop-blur-xl border-b border-outline-variant py-4 shadow-2xl shadow-black/40'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-8 w-full max-w-screen-2xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-on-surface headline-font uppercase">
          ly<span className="text-primary">.dev</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-headline font-medium tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface/60 hover:text-primary transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div>
          <a
            href="#"
            className="primary-gradient text-on-primary px-5 py-2.5 rounded-lg text-sm font-bold active:scale-95 transition-transform inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
