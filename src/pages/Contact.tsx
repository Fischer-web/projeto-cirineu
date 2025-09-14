import { useState } from 'react';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#00796B] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <ScrollAnimation animation="fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
                  Entre em Contato
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" delay={200}>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-open-sans">
                  Conecte-se conosco para saber mais sobre o Projeto Cirineu em Nacala Porto
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Address */}
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="text-center">
                  <div className="bg-[#00796B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Endereço</h3>
                  <p className="text-gray-600 font-open-sans">
                    Terreno de 6.400m²<br />
                    Nacala Porto, Moçambique<br />
                    Província de Nampula
                  </p>
                </div>
              </ScrollAnimation>

              {/* Phone */}
              <ScrollAnimation animation="slide-up" delay={100}>
                <div className="text-center">
                  <div className="bg-[#00796B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Telefone</h3>
                  <p className="text-gray-600 font-open-sans">
                    +258 26 520 100<br />
                    +258 84 567 8900<br />
                    (Chamadas e WhatsApp)
                  </p>
                </div>
              </ScrollAnimation>

              {/* Email */}
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="text-center">
                  <div className="bg-[#00796B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">E-mail</h3>
                  <p className="text-gray-600 font-open-sans">
                    contato@projetocirineu.org<br />
                    educacao@projetocirineu.org<br />
                    voluntarios@projetocirineu.org
                  </p>
                </div>
              </ScrollAnimation>

              {/* Hours */}
              <ScrollAnimation animation="slide-up" delay={300}>
                <div className="text-center">
                  <div className="bg-[#00796B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Horário</h3>
                  <p className="text-gray-600 font-open-sans">
                    Segunda - Sexta<br />
                    08:00 - 17:00<br />
                    Sábado: 08:00 - 12:00
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollAnimation animation="slide-up">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-[#00796B] mb-6 font-poppins">
                    Envie uma Mensagem
                  </h2>
                  <p className="text-gray-600 mb-8 font-open-sans">
                    Preencha o formulário abaixo para saber mais sobre nossos programas educacionais ou como apoiar o projeto.
                  </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                        placeholder="+258 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="informacoes">Informações Gerais</option>
                        <option value="voluntariado">Voluntariado</option>
                        <option value="doacao">Doações</option>
                        <option value="educacao">Programas Educacionais</option>
                        <option value="parceria">Parcerias</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                      placeholder="Escreva sua mensagem aqui..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00796B] text-white py-4 rounded-lg font-semibold hover:bg-[#00695C] transition-colors duration-200 flex items-center justify-center space-x-2 font-open-sans"
                  >
                    <Send size={20} />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
                </div>
              </ScrollAnimation>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <ScrollAnimation animation="slide-up" delay={200}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin size={48} className="mx-auto mb-2" />
                        <p className="font-open-sans">Mapa interativo será carregado aqui</p>
                        <p className="text-sm font-open-sans">Terreno de 6.400m² - Nacala Porto</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Social Media */}
                <ScrollAnimation animation="slide-up" delay={300}>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-[#00796B] mb-4 font-poppins">
                      Siga-nos nas Redes Sociais
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-[#00796B] text-white p-3 rounded-full hover:bg-[#00695C] transition-colors duration-200"
                        aria-label="Facebook"
                      >
                        <Facebook size={20} />
                      </a>
                      <a
                        href="#"
                        className="bg-[#00796B] text-white p-3 rounded-full hover:bg-[#00695C] transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="#"
                        className="bg-[#00796B] text-white p-3 rounded-full hover:bg-[#00695C] transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                    <p className="text-gray-600 mt-4 font-open-sans">
                      Acompanhe nossas atividades e fique por dentro das novidades do Projeto Cirineu.
                    </p>
                  </div>
                </ScrollAnimation>

                {/* Emergency Contact */}
                <ScrollAnimation animation="slide-up" delay={400}>
                  <div className="bg-[#FFD700] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#00796B] mb-2 font-poppins">
                      Contato Direto
                    </h3>
                    <p className="text-gray-800 font-open-sans">
                      Para informações sobre matrículas e programas:
                    </p>
                    <p className="text-lg font-semibold text-[#00796B] mt-2 font-poppins">
                      +258 84 567 8900
                    </p>
                    <p className="text-sm text-gray-700 mt-1 font-open-sans">
                      Segunda a Sábado, 8h às 17h
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl font-bold text-[#00796B] text-center mb-12 font-poppins">
                Perguntas Frequentes
              </h2>
            </ScrollAnimation>
            <div className="space-y-6">
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                    Como posso me tornar voluntário?
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Você pode se inscrever através da nossa página "Ajude-nos" ou entrar em contato diretamente conosco. Buscamos pessoas dispostas a ensinar e compartilhar conhecimento com a comunidade de Nacala Porto.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={100}>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                    Quais programas educacionais vocês oferecem?
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Oferecemos reforço escolar para crianças, alfabetização e profissionalização para adultos, incluindo cursos de manicure, agricultura e treinamento bíblico.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                    Como posso apoiar o projeto?
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Você pode fazer doações através da nossa página "Ajude-nos", contribuir com materiais de construção e educação, ou se voluntariar para ensinar na comunidade.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;