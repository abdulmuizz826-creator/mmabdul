import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const links = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'skills', path: '/skills' },
    { name: 'experience', path: '/experience' },
    { name: 'contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center group">
          <Globe className="h-10 w-10 text-cyan-600 transition-transform group-hover:rotate-12" />
          <span className="ml-3 text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Net<span className="text-cyan-600">Solutions</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`capitalize px-2 py-1 text-xl font-bold transition-all duration-200 ${
                router.pathname === link.path 
                  ? 'text-cyan-600 underline underline-offset-[12px] decoration-4' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-cyan-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-6 space-y-4">
          {links.map((link) => (
            <Link 
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-bold text-slate-900 dark:text-white capitalize"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}