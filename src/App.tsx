import React, { useState, useEffect } from 'react';
import { Menu, Phone, Mail, MapPin, ChevronRight, MessageCircle, Scale, Gavel, FileText, Users, Shield, Building2, Instagram, X, ArrowUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Scale className="text-[#B8860B] w-12 h-12 mb-4" />,
      title: "Defesa Criminal",
      description: "Atuação em todas as fases do processo criminal, desde a investigação até recursos aos tribunais superiores. Defendemos seus direitos com excelência e dedicação.",
    },
    {
      icon: <Gavel className="text-[#B8860B] w-12 h-12 mb-4" />,
      title: "Tribunal do Júri",
      description: "Experiência em casos complexos perante o Tribunal do Júri, com estratégias de defesa personalizadas e acompanhamento integral do processo.",
    },
    {
      icon: <FileText className="text-[#B8860B] w-12 h-12 mb-4" />,
      title: "Execução Penal",
      description: "Acompanhamento especializado em progressão de regime, livramento condicional, remição de pena e todos os direitos do apenado.",
    },
    {
      icon: <Users className="text-[#B8860B] w-12 h-12 mb-4" />,
      title: "Audiência de Custódia",
      description: "Atendimento emergencial em prisões em flagrante e representação qualificada em audiências de custódia, buscando a liberdade do cliente.",
    },
    {
      icon: <Shield className="text-[#B8860B] w-12 h-12 mb-4" />,
      title: "Habeas Corpus",
      description: "Atuação rápida e eficiente na impetração de Habeas Corpus, garantindo a liberdade e os direitos fundamentais dos nossos clientes.",
    },
    {
      icon: <Building2 className="text-[#B8860B] w-12 h-12 mb-4" />,
      title: "Atuação Completa",
      description: "Presença em delegacias, fóruns e tribunais. Atendimento 24h para casos urgentes em todo o território nacional.",
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1A1A1A] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <img 
              src="/header-logo.png.png" 
              alt="Logo Angelita Lourenço Advogados Associados" 
              className="h-16"
            />
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-[#B8860B] transition">Início</button>
              <button onClick={() => scrollToSection('contato')} className="text-white hover:text-[#B8860B] transition">Contato</button>
              <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-[#B8860B] transition">Sobre Nós</button>
              <a 
                href="https://www.instagram.com/adv.angelita?igsh=Y28xN3Roc3RraDJs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#B8860B] transition"
              >
                Instagram
              </a>
              <a 
                href="https://wa.me/5521994051994" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B8860B] hover:text-[#DAA520] transition"
              >
                WhatsApp
              </a>
            </div>
            <button 
              className="md:hidden text-white p-2 hover:bg-[#222222] rounded-lg transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-[#1A1A1A] border-t border-[#B8860B] transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-4 p-6">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-white hover:text-[#B8860B] transition flex items-center space-x-2 p-2 rounded hover:bg-[#222222] text-left"
            >
              <span>Início</span>
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-white hover:text-[#B8860B] transition flex items-center space-x-2 p-2 rounded hover:bg-[#222222] text-left"
            >
              <span>Contato</span>
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-white hover:text-[#B8860B] transition flex items-center space-x-2 p-2 rounded hover:bg-[#222222] text-left"
            >
              <span>Sobre Nós</span>
            </button>
            <a 
              href="https://www.instagram.com/adv.angelita?igsh=Y28xN3Roc3RraDJs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#B8860B] transition flex items-center space-x-2 p-2 rounded hover:bg-[#222222]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a 
              href="https://wa.me/5521994051994" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B8860B] hover:text-[#DAA520] transition flex items-center space-x-2 p-2 rounded hover:bg-[#222222]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section with adjusted padding for fixed header */}
      <header className="relative h-screen pt-24" id="inicio">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="/profile.jpg.jpg"
          alt="Dra. Angelita Lourenço na OAB"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-7xl mb-4">Dra. Angelita Lourenço</h1>
            <p className="text-xl md:text-2xl mb-8">Advocacia Criminal – Atuação em todo o território nacional</p>
            <a 
              href="https://wa.me/5521994051994"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#B8860B] text-white px-8 py-3 rounded hover:bg-[#DAA520] transition"
            >
              Fale Agora
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Areas of Expertise */}
      <section className="py-20 bg-[#111111]" id="atuacao">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-16 text-[#B8860B]">Áreas de Atuação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1A1A1A] p-8 rounded-lg border border-[#B8860B] flex flex-col items-center text-center hover:bg-[#222222] transition duration-300">
                {service.icon}
                <h3 className="text-[#B8860B] text-xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-[#1A1A1A]" id="sobre">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/advogada.jpg.jpeg"
                alt="Dra. Angelita Lourenço"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl mb-8 text-[#B8860B]">Sobre Nós</h2>
              <p className="text-lg mb-8 text-justify">
                Dra. Angelita Lourenço é advogada criminalista, graduada em Direito pela Universidade Cândido Mendes (RJ), concluída em 2015. É pós-graduada em Direito Penal e Processo Penal e atualmente pós-graduanda em Prática Criminal. Também atua como professora de Direito Penal.
                Com forte presença na defesa em Tribunal do Júri, sua atuação é marcada pela técnica, ética e compromisso com os direitos fundamentais.
                O escritório é especializado em Defesa Criminal, com atuação em todo o território nacional, prestando atendimento personalizado, sigiloso e focado na proteção das garantias individuais.
              </p>
              <h3 className="text-2xl font-serif text-[#B8860B] mb-2">Dra. Angelita Lourenço</h3>
              <p className="text-xl mb-8">OAB/RJ 260.381</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-16 text-[#B8860B]">Por que escolher nosso escritório?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Atuação estratégica e personalizada',
              'Experiência em casos complexos',
              'Atendimento humanizado e sigiloso',
              'Disponibilidade 24h para urgências',
              'Foco na proteção dos direitos individuais'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-[#1A1A1A] p-6 rounded-lg">
                <ChevronRight className="text-[#B8860B] mr-2 flex-shrink-0" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#1A1A1A]" id="faq">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-16 text-[#B8860B]">Dúvidas Frequentes</h2>
          <div className="space-y-8">
            {[
              {
                question: "Fui preso em flagrante. O que fazer?",
                answer: "Ligue imediatamente para nossa equipe. É essencial garantir seus direitos desde o início da abordagem policial."
              },
              {
                question: "Como funciona a audiência de custódia?",
                answer: "O preso é apresentado a um juiz em até 24h. É fundamental a presença de um defensor qualificado."
              },
              {
                question: "Meu parente está no sistema prisional. Posso buscar progressão?",
                answer: "Sim, atuamos com Execução Penal em todo território nacional."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg">
                <h3 className="text-xl font-serif text-[#B8860B] mb-4">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#111111]" id="contato">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-16">
            <img 
              src="/logo.png.png" 
              alt="Logo Angelita Lourenço Advogados Associados" 
              className="h-24"
            />
          </div>
          <h2 className="font-serif text-4xl text-center mb-16 text-[#B8860B]">Contato</h2>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <a 
              href="https://maps.app.goo.gl/pMDuQCqB7SZJ6rmZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-[#222222] rounded-lg transition"
            >
              <MapPin className="text-[#B8860B] mb-4" size={32} />
              <p>Praça Roberto Silveira, 15 sala 507, Centro, Duque de Caxias / RJ<br/>CEP: 25070-005</p>
            </a>
            <a 
              href="https://maps.app.goo.gl/gpZdBaWHS9pzmkvg9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-[#222222] rounded-lg transition"
            >
              <MapPin className="text-[#B8860B] mb-4" size={32} />
              <p>Rua México 31 sala 703, Centro / RJ<br/>CEP: 20031-144</p>
            </a>
            <a 
              href="tel:+5521994051994"
              className="flex flex-col items-center p-6 hover:bg-[#222222] rounded-lg transition"
            >
              <Phone className="text-[#B8860B] mb-4" size={32} />
              <p>(21) 99405-1994</p>
            </a>
            <a 
              href="mailto:adv.angel.lourenco@gmail.com"
              className="flex flex-col items-center p-6 hover:bg-[#222222] rounded-lg transition"
            >
              <Mail className="text-[#B8860B] mb-4" size={32} />
              <p>adv.angel.lourenco@gmail.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/5521994051994"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition z-50"
      >
        <MessageCircle size={32} />
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 bg-[#B8860B] text-white p-4 rounded-full shadow-lg hover:bg-[#DAA520] transition z-50 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp size={32} />
      </button>

      {/* Footer */}
      <footer className="bg-[#111111] py-8 border-t border-[#B8860B]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#B8860B]">
            © {new Date().getFullYear()} Dra. Angelita Lourenço – Advocacia Criminal. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;