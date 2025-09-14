import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'O Projeto', href: '/o-projeto' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Ajude-nos', href: '/ajude-nos' },
    { name: 'Contato', href: '/contato' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/acla',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/acla',
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-[#00796B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/acla-logo-new.png" 
                alt="ACLA Logo" 
                className="w-10 h-10 rounded-full object-contain bg-white p-0.05"
              />
              <span className="text-2xl font-bold font-['Poppins']" title="Associação Cirineu Levanta-te África">ACLA</span>
            </div>
            <p className="text-gray-200 mb-4 max-w-md font-['Open_Sans']">Associação Cirineu Levanta-te África em Moçambique. Trabalhamos para transformar vidas através de educação, reforço escolar, alfabetização e capacitação profissional para fortalecer a comunidade de Nacala Porto.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Poppins']">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-200 hover:text-white transition-colors duration-200 font-['Open_Sans']"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Poppins']">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-300" />
                <span className="text-gray-200 text-sm font-['Open_Sans']">
                  Maputo, Moçambique
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-300" />
                <span className="text-gray-200 text-sm font-['Open_Sans']">
                  +258 XX XXX XXXX
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-300" />
                <span className="text-gray-200 text-sm font-['Open_Sans']">
                  contato@acla.org.mz
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm font-['Open_Sans'] mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ACLA - Associação Cirineu Levanta-te África. 
              Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-1 text-gray-200 text-sm font-['Open_Sans']">
              <span>Feito com</span>
              <Heart size={14} className="text-[#FFD700] fill-current" />
              <span>para Moçambique</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;