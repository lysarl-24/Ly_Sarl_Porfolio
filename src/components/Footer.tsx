export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ly-sarl-03a28039a' },
    { name: 'GitHub', href: 'https://github.com/lysarl-24' },
    // { name: 'Twitter', href: '#' },
    { name: 'Email', href: 'https://mail.google.com/mail/u/0/#inbox' },
  ];

  return (
    <footer className="bg-background w-full py-16 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-screen-2xl mx-auto">
        <div className="mb-8 md:mb-0">
          <div className="text-lg font-black text-on-surface headline-font uppercase mb-2 tracking-tighter">
            LySarl<span className="text-primary">.DEV</span>
          </div>
          <p className="text-xs tracking-widest text-on-surface-variant font-bold uppercase">
            © {currentYear} BACKEND DEVELOPER. ALL RIGHTS RESERVED.
          </p>
        </div>
        
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-on-surface/40 hover:text-primary transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
