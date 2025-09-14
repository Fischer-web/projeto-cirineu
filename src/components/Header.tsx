import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'O Projeto', href: '/o-projeto' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Ajude-nos', href: '/ajude-nos' },
    { name: 'Loja', href: '/loja' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo width={80} height={80} />
            <span className="text-2xl font-bold text-[#00796B] font-['Poppins']" title="Associação Cirineu Levanta-te África">
              ACLA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 font-['Open_Sans'] ${
                  isActive(item.href)
                    ? 'text-[#00796B] border-b-2 border-[#00796B]'
                    : 'text-gray-700 hover:text-[#00796B] hover:border-b-2 hover:border-[#00796B]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/ajude-nos"
              className="bg-[#FFD700] text-[#00796B] px-6 py-2 rounded-full font-semibold hover:bg-[#FFC107] transition-colors duration-200 font-['Open_Sans']"
            >
              Doe Agora
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#00796B] focus:outline-none focus:text-[#00796B]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 font-['Open_Sans'] ${
                    isActive(item.href)
                      ? 'text-[#00796B] bg-gray-50'
                      : 'text-gray-700 hover:text-[#00796B] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/ajude-nos"
                className="block w-full text-center bg-[#FFD700] text-[#00796B] px-6 py-2 rounded-full font-semibold hover:bg-[#FFC107] transition-colors duration-200 mt-4 font-['Open_Sans']"
                onClick={() => setIsMenuOpen(false)}
              >
                Doe Agora
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;