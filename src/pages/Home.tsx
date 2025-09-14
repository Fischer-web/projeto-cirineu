import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Heart, Users, BookOpen, Award, ArrowRight, Calendar, MapPin, Phone } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Projeto Cirineu',
      subtitle: 'Transformando vidas através da educação e capacitação em Nacala Porto',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=african%20children%20learning%20classroom%20mozambique%20nacala%20education%20hope%20bright%20colors&image_size=landscape_16_9'
    },
    {
      title: 'Reforço Escolar para Crianças',
      subtitle: 'Apoio educacional para o desenvolvimento das crianças da comunidade',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=children%20studying%20books%20mozambique%20classroom%20learning%20education%20bright%20hopeful&image_size=landscape_16_9'
    },
    {
      title: 'Alfabetização e Profissionalização',
      subtitle: 'Capacitação de adultos para transformação social e geração de renda',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=adults%20learning%20skills%20training%20mozambique%20empowerment%20professional%20development&image_size=landscape_16_9'
    }
  ];

  const stats = [
    { number: '15+', label: 'Anos de Visão', icon: Award },
    { number: '200+', label: 'Pessoas Impactadas', icon: Users },
    { number: '1', label: 'Comunidade Atendida', icon: MapPin },
    { number: '6.400m²', label: 'Área do Terreno', icon: Heart }
  ];

  const programs = [
    {
      title: 'Reforço Escolar',
      description: 'Apoio educacional para crianças da comunidade com aulas de reforço e acompanhamento pedagógico',
      icon: BookOpen,
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=children%20studying%20books%20classroom%20mozambique%20education%20learning&image_size=square'
    },
    {
      title: 'Alfabetização de Adultos',
      description: 'Programa de alfabetização para adultos que não tiveram oportunidade de estudar',
      icon: Heart,
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=adults%20learning%20reading%20writing%20mozambique%20literacy%20education&image_size=square'
    },
    {
      title: 'Capacitação Profissional',
      description: 'Treinamentos em manicure, agricultura e outras profissões para geração de renda',
      icon: Users,
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20training%20skills%20manicure%20agriculture%20mozambique%20empowerment&image_size=square'
    }
  ];

  const news = [
    {
      title: 'Novo Programa de Reforço Escolar',
      date: '15 de Janeiro, 2024',
      excerpt: 'Iniciamos uma nova turma de reforço escolar atendendo 30 crianças da comunidade.',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=children%20classroom%20learning%20mozambique%20nacala%20education%20books&image_size=landscape_4_3'
    },
    {
      title: 'Formação em Manicure para Mulheres',
      date: '10 de Janeiro, 2024',
      excerpt: 'Capacitamos 15 mulheres em técnicas de manicure para geração de renda.',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=women%20learning%20manicure%20skills%20mozambique%20professional%20training&image_size=landscape_4_3'
    },
    {
      title: 'Treinamento Agrícola para Homens',
      date: '5 de Janeiro, 2024',
      excerpt: 'Homens da comunidade receberam treinamento em técnicas agrícolas modernas.',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=men%20agriculture%20training%20farming%20mozambique%20rural%20development&image_size=landscape_4_3'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section with Carousel */}
        <section className="relative h-screen overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 font-open-sans">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/ajude-nos"
                      className="bg-[#FFD700] text-[#00796B] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center space-x-2 font-open-sans"
                    >
                      <Heart size={20} />
                      <span>Faça uma Doação</span>
                    </a>
                    <a
                      href="/o-projeto"
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00796B] transition-colors duration-200 flex items-center justify-center space-x-2 font-open-sans"
                    >
                      <span>Conheça Nosso Trabalho</span>
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-[#FFD700]' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#00796B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <ScrollAnimation key={index} animation="slide-up" delay={index * 100}>
                    <div className="text-center">
                      <Icon className="mx-auto mb-4 text-[#FFD700]" size={48} />
                      <div className="text-4xl font-bold mb-2 font-poppins">{stat.number}</div>
                      <p className="text-gray-200 font-open-sans">{stat.label}</p>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#00796B] mb-6 font-poppins">
                  Nossa Missão
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto font-open-sans">
                  Transformar vidas através da educação, oferecendo reforço escolar para crianças, 
                  alfabetização e profissionalização para adultos, fortalecendo a comunidade de Nacala Porto desde 2014.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <ScrollAnimation key={index} animation="slide-up" delay={index * 200}>
                    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <Icon className="text-[#00796B] mr-3" size={24} />
                          <h3 className="text-xl font-semibold text-gray-900 font-poppins">
                            {program.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 font-open-sans">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>

        {/* Últimas Notícias */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#00796B] mb-6 font-poppins">
                  Últimas Notícias
                </h2>
                <p className="text-xl text-gray-600 font-open-sans">
                  Acompanhe nossas atividades e conquistas mais recentes
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <ScrollAnimation key={index} animation="slide-up" delay={index * 200}>
                  <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3 font-open-sans">
                        <Calendar size={16} className="mr-2" />
                        {article.date}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 font-open-sans">
                        {article.excerpt}
                      </p>
                      <a
                        href="#"
                        className="text-[#00796B] font-semibold hover:text-[#00695C] transition-colors duration-200 flex items-center font-open-sans"
                      >
                        Ler mais
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#00796B] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-4xl font-bold mb-6 font-poppins">
                Faça Parte da Mudança
              </h2>
              <p className="text-xl mb-8 font-open-sans">
                Sua contribuição pode transformar vidas através da educação e capacitação. 
                Junte-se a nós para construir um futuro melhor para Nacala Porto.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/ajude-nos"
                  className="bg-[#FFD700] text-[#00796B] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center space-x-2 font-open-sans"
                >
                  <Heart size={20} />
                  <span>Doar Agora</span>
                </a>
                <a
                  href="/ajude-nos"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00796B] transition-colors duration-200 flex items-center justify-center space-x-2 font-open-sans"
                >
                  <Users size={20} />
                  <span>Seja Voluntário</span>
                </a>
                <a
                  href="/contato"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00796B] transition-colors duration-200 flex items-center justify-center space-x-2 font-open-sans"
                >
                  <Phone size={20} />
                  <span>Entre em Contato</span>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;