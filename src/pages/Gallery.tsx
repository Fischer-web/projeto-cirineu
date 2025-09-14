import { useState } from 'react';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Filter } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', name: 'Todos' },
    { id: 'educacao', name: 'Educação' },
    { id: 'capacitacao', name: 'Capacitação' },
    { id: 'infraestrutura', name: 'Infraestrutura' },
    { id: 'comunidade', name: 'Comunidade' },
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Reforço Escolar',
      category: 'educacao',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Children%20studying%20in%20classroom%20in%20Nacala%20Porto%20Mozambique%2C%20educational%20reinforcement%20program%2C%20bright%20learning%20environment&image_size=landscape_4_3',
      description: 'Programa de reforço escolar para crianças da comunidade'
    },
    {
      id: 2,
      title: 'Alfabetização de Adultos',
      category: 'educacao',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Adult%20literacy%20class%20in%20Mozambique%2C%20adults%20learning%20to%20read%20and%20write%2C%20empowerment%20through%20education&image_size=landscape_4_3',
      description: 'Aulas de alfabetização para adultos da comunidade'
    },
    {
      id: 3,
      title: 'Curso de Manicure',
      category: 'capacitacao',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Women%20learning%20manicure%20skills%20in%20Mozambique%2C%20professional%20training%20workshop%2C%20empowerment%20and%20income%20generation&image_size=landscape_4_3',
      description: 'Mulheres aprendendo a profissão de manicure para geração de renda'
    },
    {
      id: 4,
      title: 'Treinamento Agrícola',
      category: 'capacitacao',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Men%20receiving%20agricultural%20training%20in%20Mozambique%2C%20farming%20techniques%2C%20sustainable%20agriculture%20education&image_size=landscape_4_3',
      description: 'Homens recebendo treinamento em técnicas agrícolas'
    },
    {
      id: 5,
      title: 'Infraestrutura do Projeto',
      category: 'infraestrutura',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Project%20infrastructure%20in%20Nacala%20Porto%20Mozambique%2C%206400%20square%20meters%20land%2C%20house%20and%20kiosk%20for%20classes&image_size=landscape_4_3',
      description: 'Terreno de 6.400m² com casa e pareo para as aulas'
    },
    {
      id: 6,
      title: 'Comunidade Unida',
      category: 'comunidade',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Community%20gathering%20in%20Nacala%20Porto%20Mozambique%2C%20people%20coming%20together%2C%20unity%20and%20transformation&image_size=landscape_4_3',
      description: 'Comunidade de Nacala Porto unida pela transformação social'
    },
  ];

  const filteredItems = activeFilter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#00796B] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
                Galeria
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-open-sans">
                Conheça o Projeto Cirineu através de imagens das nossas atividades educacionais em Nacala Porto
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                  <Filter size={20} className="text-[#00796B]" />
                  <span className="text-lg font-semibold text-[#00796B] font-poppins">
                    Filtrar por categoria:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 font-open-sans ${
                        activeFilter === filter.id
                          ? 'bg-[#00796B] text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <ScrollAnimation
                  key={item.id}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#00796B] mb-2 font-poppins">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-open-sans">
                        {item.description}
                      </p>
                      <div className="mt-4">
                        <span className="inline-block bg-[#FFD700] text-[#00796B] px-3 py-1 rounded-full text-sm font-medium font-open-sans">
                          {filters.find(f => f.id === item.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg font-open-sans">
                  Nenhuma imagem encontrada para esta categoria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#00796B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                Faça Parte da Transformação
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-open-sans">
                Sua contribuição pode transformar vidas através da educação. Junte-se ao Projeto Cirineu.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/ajude-nos"
                  className="bg-[#FFD700] text-[#00796B] px-8 py-3 rounded-full font-semibold hover:bg-[#FFC107] transition-colors duration-200 font-open-sans"
                >
                  Apoiar o Projeto
                </a>
                <a
                  href="/contato"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#00796B] transition-colors duration-200 font-open-sans"
                >
                  Entre em Contato
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;