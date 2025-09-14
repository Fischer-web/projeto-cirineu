import React from 'react';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { ShoppingBag, Package, Truck, CreditCard, Star, Heart, Leaf, Recycle, Users } from 'lucide-react';

const Shop = () => {
  const comingSoonFeatures = [
    {
      icon: ShoppingBag,
      title: 'Camisas Sustentáveis',
      description: 'Camisas em tons naturais feitas com materiais de qualidade'
    },
    {
      icon: Package,
      title: 'Designs Exclusivos',
      description: 'Estampas únicas que representam nossa missão educativa'
    },
    {
      icon: Heart,
      title: 'Apoio Direto',
      description: 'Cada camisa vendida apoia diretamente nossos programas'
    }
  ];

  const mockProducts = [
    {
      id: 1,
      name: 'Camisa Verde Esperança',
      price: 'R$ 45,00',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=green%20t-shirt%20forest%20green%20color%20projeto%20cirineu%20logo%20educational%20nonprofit%20clean%20modern%20design%20cotton%20fabric&image_size=square',
      category: 'Camisas',
      rating: 5
    },
    {
      id: 2,
      name: 'Camisa Bege Natural',
      price: 'R$ 42,00',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=beige%20t-shirt%20natural%20sand%20color%20projeto%20cirineu%20minimalist%20logo%20organic%20cotton%20sustainable%20fashion&image_size=square',
      category: 'Camisas',
      rating: 5
    },
    {
      id: 3,
      name: 'Camisa Verde Oliva',
      price: 'R$ 48,00',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=olive%20green%20t-shirt%20dark%20green%20tone%20projeto%20cirineu%20educational%20mission%20premium%20quality%20cotton&image_size=square',
      category: 'Camisas',
      rating: 4
    },
    {
      id: 4,
      name: 'Camisa Bege Areia',
      price: 'R$ 40,00',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=light%20beige%20t-shirt%20sandy%20cream%20color%20projeto%20cirineu%20simple%20elegant%20design%20comfortable%20fit&image_size=square',
      category: 'Camisas',
      rating: 4
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#00796B] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <ShoppingBag className="mx-auto mb-6 text-[#FFD700]" size={64} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
                Coleção de Camisas Projeto Cirineu
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-open-sans">
                Em breve: camisas sustentáveis em tons verdes e beges que apoiam nossa missão
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-16 bg-[#FFD700]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl font-bold text-[#00796B] mb-4 font-poppins">
                Loja em Desenvolvimento
              </h2>
              <p className="text-lg text-gray-800 mb-6 font-open-sans">
                Nossa coleção de camisas está sendo desenvolvida para oferecer peças sustentáveis que apoiam nossa missão.
                Enquanto isso, você pode fazer doações através da nossa página "Ajude-nos".
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={300}>
              <a
                href="/ajude-nos"
                className="inline-block bg-[#00796B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00695C] transition-colors duration-200 font-open-sans"
              >
                Fazer Doação Agora
              </a>
            </ScrollAnimation>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl font-bold text-[#00796B] text-center mb-12 font-poppins">
                Nossa Coleção de Camisas
              </h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {comingSoonFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <ScrollAnimation key={index} animation="slide-up" delay={index * 100}>
                    <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200">
                      <div className="bg-[#00796B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 font-open-sans">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mock Products Preview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl font-bold text-[#00796B] text-center mb-12 font-poppins">
                Prévia das Camisas
              </h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockProducts.map((product, index) => (
                <ScrollAnimation key={product.id} animation="slide-up" delay={index * 100}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                        <Heart className="text-gray-400 hover:text-red-500 cursor-pointer" size={20} />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < product.rating ? 'text-[#FFD700] fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 font-open-sans">
                        {product.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#00796B] font-poppins">
                          {product.price}
                        </span>
                        <button
                          disabled
                          className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg font-semibold cursor-not-allowed font-open-sans"
                        >
                          Em Breve
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* How It Will Work */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl font-bold text-[#00796B] text-center mb-12 font-poppins">
                Como Funcionará
              </h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="text-center">
                  <div className="bg-[#00796B] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                    Escolha sua Camisa
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Navegue por nossa coleção de camisas em tons verdes e beges
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={100}>
                <div className="text-center">
                  <div className="bg-[#00796B] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                    Faça o Pagamento
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Pague com segurança via PIX, cartão ou transferência
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="text-center">
                  <div className="bg-[#00796B] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                    Receba em Casa
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Entregamos em todo o Brasil via Correios
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={300}>
                <div className="text-center">
                  <div className="bg-[#00796B] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                    Apoie a Causa
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Cada camisa vendida ajuda a financiar nossos programas educativos
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-[#00796B] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl font-bold mb-4 font-poppins">
                Seja o Primeiro a Saber
              </h2>
              <p className="text-xl text-gray-200 mb-8 font-open-sans">
                Cadastre-se para receber notificações quando nossa loja estiver disponível
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={300}>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-open-sans"
                />
                <button className="bg-[#FFD700] text-[#00796B] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 font-open-sans">
                  Notificar-me
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Payment Methods Preview */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl font-bold text-[#00796B] text-center mb-12 font-poppins">
                Métodos de Pagamento Aceitos
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
                  <CreditCard className="text-[#00796B]" size={24} />
                  <span className="font-semibold font-open-sans">Cartão de Crédito</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <span className="font-semibold font-open-sans">PIX</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
                  <Truck className="text-[#00796B]" size={24} />
                  <span className="font-semibold font-open-sans">Pagamento na Entrega</span>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-6 font-open-sans">
                Métodos de pagamento disponíveis quando a loja estiver ativa
              </p>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Shop;