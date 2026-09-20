import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Flame,
  Droplets,
  Info,
  ArrowRight,
  Plus,
  Minus,
  Check,
  X,
  Compass,
  Award,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const MaterialsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all'); // all, natural, engineered
  const [expandedMaterial, setExpandedMaterial] = useState(null);

  const filters = [
    { id: 'all', label: 'Todos os Materiais' },
    { id: 'natural', label: 'Rochas Naturais' },
    { id: 'engineered', label: 'Superfícies Tecnológicas' }
  ];

  const materialsData = [
    {
      id: 'quartzite',
      name: 'Quartzitos',
      category: 'natural',
      subtitle: 'O ápice da exuberância natural e durabilidade extrema',
      tag: 'Rocha Natural Premium',
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779743873/pia-ilha-cuba-gourmet-yellow-bamboo_r8vt98.jpg',
      alt: 'Bancada gourmet esculpida em quartzito exótico de alto padrão',
      description: 'O quartzito é uma rocha metamórfica natural que representa a escolha mais nobre do mercado. Ele une o melhor de dois mundos: os veios artísticos e a translucidez refinada dos mármores mais raros com uma dureza física e química superior à do granito.',
      properties: [
        { label: 'Dureza / Resistência a Riscos', value: 'Extrema', score: 5, icon: <Sparkles size={16} /> },
        { label: 'Resistência a Manchas / Porosidade', value: 'Altíssima (Mto Baixa)', score: 5, icon: <Droplets size={16} /> },
        { label: 'Resistência a Calor / Panelhas', value: 'Excelente', score: 5, icon: <Flame size={16} /> },
        { label: 'Uso em Áreas Externas / Raios UV', value: 'Totalmente Recomendado', score: 5, icon: <ShieldCheck size={16} /> }
      ],
      pros: [
        'Estética incrivelmente exótica e luxuosa, com veios e cores raras.',
        'Extremamente duro: não risca com o uso normal de facas.',
        'Suporta altas temperaturas e choques térmicos.',
        'Totalmente imune a substâncias ácidas que mancham mármores comuns.'
      ],
      cons: [
        'Investimento superior devido à complexidade de extração, corte e acabamento sofisticado.'
      ],
      applications: ['Bancadas Gourmet', 'Ilhas Centrais', 'Paineis de Parede', 'Lareiras', 'Banheiros de Luxo'],
      care: 'A limpeza diária requer apenas água e sabão neutro. Embora seja altamente denso, recomendamos uma impermeabilização básica anual para blindagem total da superfície contra óleos corantes.'
    },
    {
      id: 'sintered',
      name: 'Lâminas Sinterizadas',
      category: 'engineered',
      subtitle: 'A revolução tecnológica ultracompacta e indestrutível',
      tag: 'Superfície Sintética Avançada',
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/f_auto,q_auto,w_800/v1779759851/pia-calacata-rebaixo-italiano_xkinvo.jpg',
      alt: 'Cozinha moderna com acabamento em lâmina sinterizada de alta tecnologia',
      description: 'Produzidas através de uma fusão térmica e por pressão extrema que simula em poucas horas o metamorfismo terrestre de milhões de anos, estas lâminas ultracompactas não contêm resinas. Trata-se de minerais puros sinterizados, resultando na superfície mais tecnológica e resistente do mundo.',
      properties: [
        { label: 'Dureza / Resistência a Riscos', value: 'Imbatível (Corte Direto)', score: 5, icon: <Sparkles size={16} /> },
        { label: 'Resistência a Manchas / Porosidade', value: 'Imune (Absorção Zero)', score: 5, icon: <Droplets size={16} /> },
        { label: 'Resistência a Calor / Panelhas', value: 'Extrema (À prova de fogo)', score: 5, icon: <Flame size={16} /> },
        { label: 'Uso em Áreas Externas / Raios UV', value: 'Totalmente Recomendado', score: 5, icon: <ShieldCheck size={16} /> }
      ],
      pros: [
        'Porosidade zero absoluta: imune a café, vinho, limão, tintas e ácidos.',
        'Suporta panelas tiradas diretamente do fogo e até fogo direto.',
        'Não risca nem com facas ou palhas de aço.',
        'Estabilidade de cores perfeita mesmo sob radiação solar extrema (sem desbotar).'
      ],
      cons: [
        'Exige maquinário especial na marmoraria e mão de obra de altíssima precisão técnica para evitar lascas durante o corte e a montagem das quinas.'
      ],
      applications: ['Churrasqueiras', 'Bancadas de Cozinha de Alta Performance', 'Áreas Externas', 'Fachadas', 'Pisos Integrados'],
      care: 'Não exige impermeabilização. A limpeza é totalmente descomplicada, aceitando sabão, detergentes comuns e até limpadores mais pesados. Evite apenas impactos diretos de objetos muito pesados nas quinas vivas expostas.'
    },
    {
      id: 'marble',
      name: 'Mármores',
      category: 'natural',
      subtitle: 'O clássico atemporal que exala luxo e exclusividade',
      tag: 'Rocha Natural Nobre',
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154375/pia-balcao-branco-parana_penbzp.jpg', // representation
      alt: 'Banheiro master de luxo revestido em mármore nobre',
      description: 'O mármore é o material mais clássico e consagrado da história do design mundial. Com veios orgânicos inconfundíveis, ele confere brilho refinado, sofisticação imediata e altíssimo valor agregado a qualquer espaço de prestígio.',
      properties: [
        { label: 'Dureza / Resistência a Riscos', value: 'Moderada / Delicada', score: 3, icon: <Sparkles size={16} /> },
        { label: 'Resistência a Manchas / Porosidade', value: 'Moderada (Exige Cuidado)', score: 3, icon: <Droplets size={16} /> },
        { label: 'Resistência a Calor / Panelhas', value: 'Alta', score: 4, icon: <Flame size={16} /> },
        { label: 'Uso em Áreas Externas / Raios UV', value: 'Áreas Cobertas/Sem Tráfego', score: 3, icon: <ShieldCheck size={16} /> }
      ],
      pros: [
        'Elegância estética superior incomparável com veios imponentes.',
        'Toque agradável e brilho vítreo natural insuperável.',
        'Ideal para destacar painéis decorativos, banheiros master e lareiras residenciais.'
      ],
      cons: [
        'Roxa porosa: absorve líquidos coloridos rapidamente se não impermeabilizada.',
        'Sensível ao ácido do limão, vinagres e produtos químicos de limpeza fortes, que podem corroer o polimento.'
      ],
      applications: ['Banheiros Sociais e Masters', 'Lareiras', 'Painéis Decorativos', 'Escadas Internas', 'Pisos de Baixo Tráfego'],
      care: 'Limpar estritamente com água, sabão neutro e pano de microfibra macio. Seque logo após a limpeza. É fundamental aplicar impermeabilizante profissional a cada 6 ou 12 meses para proteger os poros da rocha.'
    },
    {
      id: 'granite',
      name: 'Granitos',
      category: 'natural',
      subtitle: 'A força da natureza ideal para projetos robustos',
      tag: 'Rocha Natural Tradicional',
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154378/pia-l-preto-sao-gabriel_woj65b.jpg',
      alt: 'Bancada robusta em granito escuro escovado',
      description: 'Uma das rochas naturais mais densas e abundantes do mundo, o granito é sinônimo de resiliência. Formado por quartzo, feldspato e mica sob calor tectônico, ele oferece uma solidez incrível a impactos e calor, com uma padronagem uniforme granular.',
      properties: [
        { label: 'Dureza / Resistência a Riscos', value: 'Altíssima', score: 4, icon: <Sparkles size={16} /> },
        { label: 'Resistência a Manchas / Porosidade', value: 'Alta (Baixa Absorção)', score: 4, icon: <Droplets size={16} /> },
        { label: 'Resistência a Calor / Panelhas', value: 'Excelente', score: 5, icon: <Flame size={16} /> },
        { label: 'Uso em Áreas Externas / Raios UV', value: 'Totalmente Recomendado', score: 5, icon: <ShieldCheck size={16} /> }
      ],
      pros: [
        'Excelente custo-benefício para tampos grandes e de alta frequência.',
        'Altamente durável, resistente a choques térmicos e a riscos normais de uso.',
        'Estabilidade de cor perfeita sob o sol, ideal para áreas externas e churrasqueiras.'
      ],
      cons: [
        'Possui uma estética menos fluida e mais granulada ou salpicada, sem o apelo de veios majestosos contínuos.'
      ],
      applications: ['Cozinhas de Frequência Intensa', 'Áreas de Serviço', 'Soleiras e Pingadeiras', 'Churrasqueiras externas', 'Pisos de Alto Fluxo'],
      care: 'A manutenção é muito simples: detergente neutro e água. Para granitos claros, recomenda-se impermeabilização anual para prevenir pequenas infiltrações de umidade.'
    },
    {
      id: 'quartz',
      name: 'Superfícies de Quartzo',
      category: 'engineered',
      subtitle: 'O design minimalista e higiene impecável para interiores',
      tag: 'Superfície de Engenharia Nobre',
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154374/lavanderia-tanque-inox-quartzo-branco_fye7gj.jpg', // representation
      alt: 'Lavatório minimalista moderno esculpido em superfície de quartzo cinza',
      description: 'Desenvolvido industrialmente com alta engenharia, este composto é formado por cerca de 90% a 94% de quartzo natural britado aglutinado com resinas de poliéster premium e pigmentos. Isso gera uma superfície homogênea de brilho elegante, com cores uniformes e ausência total de porosidade.',
      properties: [
        { label: 'Dureza / Resistência a Riscos', value: 'Alta', score: 4, icon: <Sparkles size={16} /> },
        { label: 'Resistência a Manchas / Porosidade', value: 'Imune (Porosidade Zero)', score: 5, icon: <Droplets size={16} /> },
        { label: 'Resistência a Calor / Panelhas', value: 'Moderada (Exige Cuidado)', score: 3, icon: <Flame size={16} /> },
        { label: 'Uso em Áreas Externas / Raios UV', value: 'Não Recomendado', score: 1, icon: <ShieldCheck size={16} /> }
      ],
      pros: [
        'Porosidade zero absoluta: não mancha com vinhos, molhos, óleos ou maquiagens.',
        'Cores lisas, homogêneas e puras (brancos e cinzas puros), ideias para visuais limpos.',
        'Superfície antibacteriana e de facílima higienização diária.'
      ],
      cons: [
        'As resinas aglutinantes sofrem danos térmicos se receberem panelas ferventes diretamente.',
        'Os raios ultravioleta do sol danificam as resinas ao longo do tempo, fazendo a pedra amarelar e desbotar em áreas externas.'
      ],
      applications: ['Cozinhas Internas modernas', 'Lavatórios de Banheiros Internos', 'Balcões Comerciais', 'Mesas e Aparadores'],
      care: 'Basta usar água e detergente neutro. Nunca pouse panelas ou assadeiras quentes diretamente na pedra; use sempre descansos térmicos. Jamais instale em locais expostos ao sol direto.'
    }
  ];

  const filteredMaterials = materialsData.filter(material => {
    if (activeFilter === 'all') return true;
    return material.category === activeFilter;
  });

  const toggleExpand = (id) => {
    if (expandedMaterial === id) {
      setExpandedMaterial(null);
    } else {
      setExpandedMaterial(id);
    }
  };

  return (
    <>
      <Helmet>
        <title>Materiais Nobres e Superfícies | Mármores, Quartzitos, Lâminas | VIDMAR SP</title>
        <meta
          name="description"
          content="Conheça os diferenciais técnicos e estéticos dos principais materiais do mercado: Mármores, Granitos, Quartzos, Quartzitos e Lâminas Sinterizadas. Escolha a pedra ideal para o seu projeto."
        />
        <link rel="canonical" href="https://marmorariavidmar.com.br/materiais/" />
        <meta property="og:title" content="Materiais Nobres e Superfícies | VIDMAR Marmoraria" />
        <meta property="og:description" content="Guia técnico e comparativo completo sobre mármores, quartzitos, lâminas sinterizadas e quartzos. Escolha com inteligência o material para sua bancada de cozinha ou banheiro." />
        <meta property="og:image" content="https://res.cloudinary.com/dcfgsleqw/image/upload/f_auto,q_auto,w_800/v1779154375/pia-calacata-rebaixo-italiano_cryp97.jpg" />
        <meta property="og:url" content="https://marmorariavidmar.com.br/materiais/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>

      <div className="min-h-screen pt-24 md:pt-28 bg-zinc-950 text-white font-sans overflow-hidden">
        {/* Breadcrumb */}
        <div className="bg-zinc-950 border-b border-zinc-900/60 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-zinc-500 hover:text-gold-vidmar transition-colors flex items-center">
                <Home size={16} className="mr-1" />
                Home
              </Link>
              <ChevronRight size={16} className="text-zinc-700" />
              <span className="text-zinc-300 font-medium">Materiais</span>
            </nav>
          </div>
        </div>

        {/* Ambient Lights */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold-vidmar/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-2/3 right-1/4 w-[500px] h-[500px] bg-gold-vidmar/3 rounded-full blur-[160px] pointer-events-none" />

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-1.5 border border-gold-vidmar/20 bg-gold-vidmar/5 px-5 py-2 rounded-full mb-2">
                <Sparkles size={14} className="text-gold-vidmar fill-gold-vidmar/20 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-gold-vidmar font-semibold">Guia Exclusivo de Superfícies</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight font-serif">
                A Alma do Seu Projeto:<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-vidmar via-amber-300 to-gold-vidmar">
                  Nossos Materiais
                </span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
                Selecionamos e trabalhamos com as pedras mais cobiçadas do design mundial. Do clássico mármore natural às superfícies tecnológicas mais modernas do planeta, encontre a base estrutural perfeita para o seu sonho.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="relative pb-20 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 ${activeFilter === filter.id
                    ? 'bg-gold-vidmar text-zinc-950 border-gold-vidmar shadow-lg shadow-gold-vidmar/15'
                    : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Materials List */}
        <section className="relative pb-24 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <AnimatePresence mode="popLayout">
                {filteredMaterials.map((material, index) => {
                  const isExpanded = expandedMaterial === material.id;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      key={material.id}
                      className="bg-zinc-900/35 border border-zinc-800/80 hover:border-gold-vidmar/30 rounded-3xl overflow-hidden backdrop-blur-md transition-colors duration-500 shadow-2xl relative"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
                        {/* Material Image */}
                        <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[300px] rounded-2xl overflow-hidden group shadow-inner">
                          <img
                            src={material.image}
                            alt={material.alt}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-zinc-950/85 backdrop-blur-md text-gold-vidmar border border-gold-vidmar/40 text-xs uppercase font-bold tracking-widest px-4 py-2 rounded-xl shadow-lg">
                              {material.tag}
                            </span>
                          </div>
                        </div>

                        {/* Material Content Info */}
                        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                          <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white group-hover:text-gold-vidmar transition-colors">
                              {material.name}
                            </h2>
                            <p className="text-gold-vidmar/90 font-medium text-lg leading-relaxed font-sans italic">
                              "{material.subtitle}"
                            </p>
                            <p className="text-zinc-300 font-light leading-relaxed text-base md:text-lg">
                              {material.description}
                            </p>

                            {/* Key Technical Properties mini meters */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/60">
                              {material.properties.map((prop, idx) => (
                                <div key={idx} className="space-y-1">
                                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                                    <span className="text-gold-vidmar">{prop.icon}</span>
                                    {prop.label}
                                  </div>
                                  <div className="flex items-center gap-2.5">
                                    <span className="text-sm font-semibold text-white">{prop.value}</span>
                                    <div className="flex gap-0.5 ml-auto">
                                      {[...Array(5)].map((_, bulletIdx) => (
                                        <div
                                          key={bulletIdx}
                                          className={`w-3.5 h-1.5 rounded-full ${bulletIdx < prop.score
                                            ? 'bg-gold-vidmar shadow-sm shadow-gold-vidmar/40'
                                            : 'bg-zinc-800'
                                            }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-zinc-800/40">
                            <button
                              onClick={() => toggleExpand(material.id)}
                              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-gold-vidmar text-zinc-300 hover:text-white rounded-xl text-sm font-semibold tracking-wide transition-all duration-300"
                            >
                              {isExpanded ? (
                                <>
                                  <Minus size={16} />
                                  Ocultar Ficha Técnica
                                </>
                              ) : (
                                <>
                                  <Plus size={16} />
                                  Ver Ficha Técnica Completa
                                </>
                              )}
                            </button>
                            <Link to="/contact" className="sm:ml-auto w-full sm:w-auto">
                              <Button className="bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-bold text-sm tracking-wide px-8 py-6 rounded-xl shadow-lg shadow-gold-vidmar/10 hover:shadow-gold-vidmar/25 transition-all duration-300 w-full">
                                Cotação sob medida
                                <ArrowRight className="ml-2" size={16} />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Technical Sheet */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="border-t border-zinc-800/80 bg-zinc-950/40 overflow-hidden"
                          >
                            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base border-t border-zinc-800/40">
                              {/* Pros and Cons */}
                              <div className="space-y-6">
                                <div className="space-y-3">
                                  <h4 className="text-gold-vidmar font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                                    <Check size={16} className="text-emerald-500" />
                                    Vantagens Principais
                                  </h4>
                                  <ul className="space-y-2">
                                    {material.pros.map((pro, pIdx) => (
                                      <li key={pIdx} className="text-zinc-300 font-light leading-relaxed flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                                        {pro}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="space-y-3">
                                  <h4 className="text-gold-vidmar font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                                    <X size={16} className="text-amber-500" />
                                    Limitações / Cuidados
                                  </h4>
                                  <ul className="space-y-2">
                                    {material.cons.map((con, cIdx) => (
                                      <li key={cIdx} className="text-zinc-300 font-light leading-relaxed flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                        {con}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Applications & Care */}
                              <div className="space-y-6">
                                <div className="space-y-3">
                                  <h4 className="text-gold-vidmar font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                                    <Compass size={16} />
                                    Aplicações Recomendadas pela Vidmar
                                  </h4>
                                  <div className="flex flex-wrap gap-2.5">
                                    {material.applications.map((app, aIdx) => (
                                      <span
                                        key={aIdx}
                                        className="inline-flex items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-4 py-2.5 rounded-xl font-medium shadow-sm transition-colors hover:border-gold-vidmar/30"
                                      >
                                        {app}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div className="space-y-4 p-6 md:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                                  <h4 className="text-gold-vidmar font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                                    <ShieldAlert size={16} />
                                    Guia de Limpeza e Conservação
                                  </h4>
                                  <p className="text-zinc-300 font-light leading-relaxed text-sm md:text-base">
                                    {material.care}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Technical Matrix Table */}
        <section className="py-24 bg-zinc-900/20 border-t border-b border-zinc-900/80 relative overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <div className="inline-flex items-center gap-1.5 border border-gold-vidmar/20 bg-gold-vidmar/5 px-5 py-2 rounded-full">
                <span className="text-xs uppercase tracking-widest text-gold-vidmar font-bold">Matriz Comparativa</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">
                Comparativo Técnico Direto
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light">
                Consulte nossa tabela resumida de propriedades físicas para ter absoluta certeza sobre qual superfície atende perfeitamente ao seu uso.
              </p>
            </motion.div>

            {/* Table wrapper for horizontal scroll in mobile */}
            <div className="overflow-x-auto rounded-3xl border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-md shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-zinc-800/80 bg-zinc-900/50">
                    <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider text-gold-vidmar font-sans w-[20%]">Material</th>
                    <th className="py-6 px-6 text-sm font-bold uppercase tracking-wider text-zinc-300 font-sans">Porosidade</th>
                    <th className="py-6 px-6 text-sm font-bold uppercase tracking-wider text-zinc-300 font-sans">Resistência Riscos</th>
                    <th className="py-6 px-6 text-sm font-bold uppercase tracking-wider text-zinc-300 font-sans">Choque Térmico</th>
                    <th className="py-6 px-6 text-sm font-bold uppercase tracking-wider text-zinc-300 font-sans">Uso Externo</th>
                    <th className="py-6 px-6 text-sm font-bold uppercase tracking-wider text-zinc-300 font-sans text-center">Nível Preço</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900/90 text-sm font-light text-zinc-300">
                  <tr className="hover:bg-zinc-900/20 transition-colors">
                    <td className="py-6 px-8 font-bold text-white text-base font-serif">Mármores</td>
                    <td className="py-6 px-6">Média/Alta <span className="text-[10px] text-zinc-500">(Mancha fácil)</span></td>
                    <td className="py-6 px-6">Moderada <span className="text-[10px] text-zinc-500">(Risca com faca)</span></td>
                    <td className="py-6 px-6">Alta <span className="text-[10px] text-zinc-500">(Suporta lareiras)</span></td>
                    <td className="py-6 px-6">Áreas cobertas / painéis</td>
                    <td className="py-6 px-6 text-center text-gold-vidmar font-bold text-base">$$$$</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/20 transition-colors">
                    <td className="py-6 px-8 font-bold text-white text-base font-serif">Granitos</td>
                    <td className="py-6 px-6">Baixa <span className="text-[10px] text-zinc-500">(Difícil manchar)</span></td>
                    <td className="py-6 px-6">Alta <span className="text-[10px] text-zinc-500">(Resistente)</span></td>
                    <td className="py-6 px-6">Excelente <span className="text-[10px] text-zinc-500">(Suporta panelas)</span></td>
                    <td className="py-6 px-6">Totalmente Recomendado</td>
                    <td className="py-6 px-6 text-center text-gold-vidmar font-bold text-base">$$</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/20 transition-colors bg-gold-vidmar/5 border-l-2 border-gold-vidmar">
                    <td className="py-6 px-8 font-bold text-white text-base font-serif flex items-center gap-1.5">
                      Quartzitos
                      <span className="bg-gold-vidmar/15 border border-gold-vidmar/30 text-[9px] font-bold text-gold-vidmar uppercase px-2 py-0.5 rounded-full">Recomendado</span>
                    </td>
                    <td className="py-6 px-6 font-medium text-zinc-200">Muito Baixa <span className="text-[10px] text-zinc-500">(Impermeável)</span></td>
                    <td className="py-6 px-6 font-medium text-zinc-200">Extrema <span className="text-[10px] text-zinc-500">(Supera granito)</span></td>
                    <td className="py-6 px-6 font-medium text-zinc-200">Excelente <span className="text-[10px] text-zinc-500">(Imutável a panelas)</span></td>
                    <td className="py-6 px-6 font-medium text-zinc-200">Totalmente Recomendado</td>
                    <td className="py-6 px-6 text-center text-gold-vidmar font-bold text-base">$$$$$</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/20 transition-colors">
                    <td className="py-6 px-8 font-bold text-white text-base font-serif">Superfícies de Quartzo</td>
                    <td className="py-6 px-6">Nula <span className="text-[10px] text-zinc-500">(Porosidade zero)</span></td>
                    <td className="py-6 px-6">Alta <span className="text-[10px] text-zinc-500">(Duro)</span></td>
                    <td className="py-6 px-6">Moderada <span className="text-[10px] text-zinc-500">(Não suporta chamas)</span></td>
                    <td className="py-6 px-6 text-rose-500 font-medium">Não recomendado <span className="text-[9px] block text-rose-500/70">(Amarela no sol)</span></td>
                    <td className="py-6 px-6 text-center text-gold-vidmar font-bold text-base">$$$</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/20 transition-colors">
                    <td className="py-6 px-8 font-bold text-white text-base font-serif">Lâminas Sinterizadas</td>
                    <td className="py-6 px-6">Nula <span className="text-[10px] text-zinc-500">(Absorção zero)</span></td>
                    <td className="py-6 px-6">Extrema <span className="text-[10px] text-zinc-500">(Corte direto)</span></td>
                    <td className="py-6 px-6">Extrema <span className="text-[10px] text-zinc-500">(À prova de fogo)</span></td>
                    <td className="py-6 px-6">Totalmente Recomendado</td>
                    <td className="py-6 px-6 text-center text-gold-vidmar font-bold text-base">$$$$$</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex items-center gap-3 p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 text-zinc-400 text-sm">
              <Info size={20} className="text-gold-vidmar flex-shrink-0" />
              <span>
                <strong>Nota Comercial sobre Preço:</strong> A classificação de preço ($ a $$$$$) é uma referência de faixa de custo média. Rochas naturais (Mármores, Quartzitos e Granitos) podem ter variações significativas de preço de acordo com a exclusividade do lote e exoticidade dos veios.
              </span>
            </div>
          </div>
        </section>

        {/* Dynamic Consultation Call to Action */}
        <section className="py-28 relative overflow-hidden z-10 border-t border-zinc-900/60">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-vidmar/5 rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/60 rounded-3xl p-12 md:p-16 backdrop-blur-md shadow-2xl relative"
            >
              <div className="space-y-8 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-1.5 border border-gold-vidmar/30 bg-gold-vidmar/10 px-5 py-2 rounded-full">
                  <Award size={14} className="text-gold-vidmar" />
                  <span className="text-xs uppercase tracking-widest text-gold-vidmar font-bold">Consultoria sob Medida</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                  Ainda com dúvidas de qual pedra escolher?
                </h2>
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                  Cada ambiente tem exigências particulares. Nossa equipe de engenheiros e consultores técnicos está de prontidão para analisar a planta do seu projeto e indicar a rocha perfeita que alinhe beleza singular e máxima funcionalidade.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-bold text-lg px-8 py-6 rounded-xl shadow-xl shadow-gold-vidmar/10 hover:shadow-gold-vidmar/25 transition-all duration-300 w-full sm:w-auto">
                      Falar com Especialista
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant="outline" className="bg-zinc-900/50 border-zinc-700 text-white hover:bg-zinc-800 hover:border-gold-vidmar text-lg px-8 py-6 rounded-xl transition-all duration-300 w-full sm:w-auto">
                      Ver no Portfólio
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MaterialsPage;
