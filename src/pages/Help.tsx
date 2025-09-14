import { useState } from 'react';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Heart, Users, Gift, CreditCard, Smartphone, Building } from 'lucide-react';

const Help = () => {
  const [activeTab, setActiveTab] = useState('doacao');
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = ['50', '100', '250', '500', '1000'];

  const tabs = [
    { id: 'doacao', name: 'Doação Financeira', icon: Heart },
    { id: 'voluntario', name: 'Seja Voluntário', icon: Users },
    { id: 'materiais', name: 'Doação de Materiais', icon: Gift },
  ];

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setDonationAmount('');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#00796B] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
                Ajude-nos
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-open-sans">
                Sua contribuição faz a diferença na vida da comunidade de Nacala Porto, Moçambique
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <ScrollAnimation animation="slide-up">
                <div>
                  <div className="text-4xl font-bold text-[#00796B] mb-2 font-poppins">10+</div>
                  <p className="text-gray-600 font-open-sans">Anos de projeto</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={100}>
                <div>
                  <div className="text-4xl font-bold text-[#00796B] mb-2 font-poppins">6.400m²</div>
                  <p className="text-gray-600 font-open-sans">Terreno do projeto</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div>
                  <div className="text-4xl font-bold text-[#00796B] mb-2 font-poppins">2</div>
                  <p className="text-gray-600 font-open-sans">Frentes de trabalho</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors duration-200 font-open-sans ${
                        activeTab === tab.id
                          ? 'bg-[#00796B] text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Doação Financeira */}
            {activeTab === 'doacao' && (
              <ScrollAnimation animation="fade-in">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-[#00796B] mb-6 text-center font-poppins">
                    Faça sua Doação
                  </h2>
                  <p className="text-gray-600 text-center mb-8 font-open-sans">
                    Escolha o valor da sua contribuição e ajude-nos a construir a infraestrutura necessária para o Projeto Cirineu
                  </p>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <label className="block text-lg font-semibold text-gray-700 mb-4 font-poppins">
                      Valor da Doação (R$)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => handleAmountSelect(amount)}
                          className={`p-3 rounded-lg border-2 font-semibold transition-colors duration-200 font-open-sans ${
                            donationAmount === amount
                              ? 'border-[#00796B] bg-[#00796B] text-white'
                              : 'border-gray-300 text-gray-700 hover:border-[#00796B]'
                          }`}
                        >
                          R$ {amount}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4">
                      <input
                        type="number"
                        placeholder="Outro valor"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                      />
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-8">
                    <label className="block text-lg font-semibold text-gray-700 mb-4 font-poppins">
                      Método de Pagamento
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border-2 border-gray-300 rounded-lg p-4 hover:border-[#00796B] cursor-pointer transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="text-[#00796B]" size={24} />
                          <span className="font-medium font-open-sans">Cartão de Crédito</span>
                        </div>
                      </div>
                      <div className="border-2 border-gray-300 rounded-lg p-4 hover:border-[#00796B] cursor-pointer transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="text-[#00796B]" size={24} />
                          <span className="font-medium font-open-sans">PIX</span>
                        </div>
                      </div>
                      <div className="border-2 border-gray-300 rounded-lg p-4 hover:border-[#00796B] cursor-pointer transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <Building className="text-[#00796B]" size={24} />
                          <span className="font-medium font-open-sans">Transferência</span>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* Donor Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                  />
                  <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans">
                    <option value="">Selecione o país</option>
                    <option value="mz">Moçambique</option>
                    <option value="br">Brasil</option>
                    <option value="pt">Portugal</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <button className="w-full bg-[#00796B] text-white py-4 rounded-lg font-semibold hover:bg-[#00695C] transition-colors duration-200 font-open-sans">
                  Finalizar Doação
                </button>
              </div>
              </ScrollAnimation>
            )}

            {/* Voluntariado */}
            {activeTab === 'voluntario' && (
              <ScrollAnimation animation="fade-in">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-[#00796B] mb-6 text-center font-poppins">
                    Seja um Voluntário
                  </h2>
                  <p className="text-gray-600 text-center mb-8 font-open-sans">
                    Doe seu tempo e habilidades para ensinar e capacitar a comunidade de Nacala Porto
                  </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nome completo"
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone"
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                    />
                    <input
                      type="text"
                      placeholder="Profissão"
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2 font-poppins">
                      Áreas de Interesse
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Reforço Escolar', 'Alfabetização de Adultos', 'Capacitação Profissional', 'Treinamento Bíblico', 'Administração', 'Agricultura'].map((area) => (
                        <label key={area} className="flex items-center space-x-2">
                          <input type="checkbox" className="text-[#00796B] focus:ring-[#00796B]" />
                          <span className="font-open-sans">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2 font-poppins">
                      Disponibilidade
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans">
                      <option value="">Selecione sua disponibilidade</option>
                      <option value="weekends">Fins de semana</option>
                      <option value="evenings">Noites</option>
                      <option value="flexible">Horário flexível</option>
                      <option value="fulltime">Tempo integral</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Conte-nos sobre sua motivação e experiência relevante"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                  ></textarea>

                  <button className="w-full bg-[#00796B] text-white py-4 rounded-lg font-semibold hover:bg-[#00695C] transition-colors duration-200 font-open-sans">
                    Enviar Candidatura
                  </button>
                </form>
                </div>
              </ScrollAnimation>
            )}

            {/* Doação de Materiais */}
            {activeTab === 'materiais' && (
              <ScrollAnimation animation="fade-in">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-[#00796B] mb-6 text-center font-poppins">
                    Doação de Materiais
                  </h2>
                  <p className="text-gray-600 text-center mb-8 font-open-sans">
                    Materiais necessários para a construção da infraestrutura e programas educacionais
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-[#00796B] mb-4 font-poppins">
                        Materiais de Construção
                      </h3>
                      <ul className="space-y-2 text-gray-600 font-open-sans">
                        <li>• Materiais para construção da Casa 01</li>
                        <li>• Equipamentos para ambulatório</li>
                        <li>• Materiais para salas de aula</li>
                        <li>• Mobiliário escolar</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#00796B] mb-4 font-poppins">
                        Materiais Educativos
                      </h3>
                      <ul className="space-y-2 text-gray-600 font-open-sans">
                        <li>• Livros didáticos e bíblicos</li>
                        <li>• Material de alfabetização</li>
                        <li>• Equipamentos para manicure</li>
                        <li>• Ferramentas agrícolas</li>
                      </ul>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Nome completo"
                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                      />
                      <input
                        type="email"
                        placeholder="E-mail"
                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                      />
                      <input
                        type="tel"
                        placeholder="Telefone"
                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                      />
                      <input
                        type="text"
                        placeholder="Localização"
                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                      />
                    </div>

                    <textarea
                      placeholder="Descreva os materiais que gostaria de doar"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796B] focus:border-transparent font-open-sans"
                    ></textarea>

                    <button className="w-full bg-[#00796B] text-white py-4 rounded-lg font-semibold hover:bg-[#00695C] transition-colors duration-200 font-open-sans">
                      Enviar Proposta de Doação
                    </button>
                  </form>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Help;