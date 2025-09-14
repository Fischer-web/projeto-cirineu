import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#00796B] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
                Projeto Cirineu
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-open-sans">
                Conheça nossa história, missão e o impacto que estamos criando em Nacala Porto
              </p>
            </div>
          </div>
        </section>

        {/* Quem Somos */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="slide-up">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#00796B] mb-6 font-poppins">
                    Quem Somos
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 font-open-sans">
                    No ano de 2009, Deus deu uma visão para a Pastora Lita sobre o que hoje vem a ser 
                    Projeto Cirineu. Desde então temos trabalhado para atingir todo o potencial daquele 
                    povo e lugar. O projeto está instalado na cidade de Nacala Porto em Moçambique e 
                    atua em duas frentes de trabalho.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 font-open-sans">
                    A primeira se destaca pela evangelização e aprimoramento daqueles que já conhecem 
                    a Cristo, disponibilizando treinamento bíblico em níveis iniciantes para obreiros 
                    e nível avançado para líderes.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 font-open-sans">
                    A segunda frente de trabalho está focada na transformação sociocultural das pessoas 
                    alcançadas. Contando sempre com a disponibilidade e disposição de outros irmãos de 
                    todas as partes do mundo indo até lá para doarem seu tempo e ensinarem.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" delay={300}>
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=pastor%20lita%20vision%20mozambique%20nacala%20porto%20christian%20project%20community%20work&image_size=landscape_4_3" 
                    alt="Projeto Cirineu em Nacala Porto" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Nossa Missão e Visão */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollAnimation animation="slide-up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-[#00796B] text-2xl font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#00796B] mb-4 font-poppins">Nossa Missão</h3>
                  <p className="text-gray-700 font-open-sans">
                    Transformar vidas através da educação e capacitação, oferecendo reforço escolar 
                    para crianças, alfabetização e profissionalização para adultos, fortalecendo 
                    a comunidade de Nacala Porto através dos valores cristãos.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-[#00796B] text-2xl font-bold">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#00796B] mb-4 font-poppins">Nossa Visão</h3>
                  <p className="text-gray-700 font-open-sans">
                    Ser uma ponte entre pessoas que querem ensinar e pessoas que querem aprender 
                    para transformar suas vidas, criando um centro de referência em educação e 
                    capacitação em Nacala Porto.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Impacto na Comunidade */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#00796B] mb-6 font-poppins">
                  Impacto na Comunidade
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto font-open-sans">
                  Todo trabalho do Projeto Cirineu é focado na transformação social da comunidade em Nacala-Porto.
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation animation="slide-up" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h4 className="text-xl font-semibold text-[#00796B] mb-3 font-poppins">Alfabetização</h4>
                  <p className="text-gray-600 font-open-sans">
                    Muitos adultos foram e são alfabetizados, transformando suas perspectivas de vida.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h4 className="text-xl font-semibold text-[#00796B] mb-3 font-poppins">Profissionalização</h4>
                  <p className="text-gray-600 font-open-sans">
                    Algumas mulheres já têm renda através da profissão de manicure que aprenderam.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h4 className="text-xl font-semibold text-[#00796B] mb-3 font-poppins">Agricultura</h4>
                  <p className="text-gray-600 font-open-sans">
                    Muitos homens receberam treinamento para agricultura e hoje já podem usufruir dos frutos desse trabalho.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Infraestrutura Atual */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#00796B] mb-6 font-poppins">
                  O Projeto
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto font-open-sans mb-8">
                  Nós já possuímos um terreno de 6.400 metros quadrados, onde está instalada uma casa 
                  com instalação hidráulica e elétrica e um 'pareo' (quiosque) onde são ministradas as aulas.
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="slide-up">
                <div>
                  <h3 className="text-2xl font-bold text-[#00796B] mb-6 font-poppins">Infraestrutura Atual</h3>
                  <ul className="space-y-4 text-gray-700 font-open-sans">
                    <li className="flex items-start">
                      <span className="text-[#FFD700] mr-3">✓</span>
                      Terreno de 6.400 metros quadrados
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FFD700] mr-3">✓</span>
                      Casa com instalação hidráulica e elétrica
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FFD700] mr-3">✓</span>
                      Pareo (quiosque) para ministrar aulas
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div>
                  <h3 className="text-2xl font-bold text-[#00796B] mb-6 font-poppins">Necessidades Futuras</h3>
                  <ul className="space-y-4 text-gray-700 font-open-sans">
                    <li className="flex items-start">
                      <span className="text-[#00796B] mr-3">○</span>
                      Construção da Casa 01
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00796B] mr-3">○</span>
                      Ambulatório para cuidados de saúde
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00796B] mr-3">○</span>
                      Casa para orfanato
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00796B] mr-3">○</span>
                      Salas de aula adicionais
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animation="fade-in" delay={400}>
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 font-open-sans">
                  O objetivo é aumentar toda infraestrutura para que obreiros em tempo integral possam 
                  morar, amar e servir naquela cidade, buscando ensinar e profissionalizar aquela comunidade.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;