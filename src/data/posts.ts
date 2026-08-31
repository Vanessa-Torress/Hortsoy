export interface BlogSection {
  heading?: string;
  image?: string;
  imageAlt?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  author: string;
  category: string;
  featuredImage: string;
  excerpt: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'plantando-ideias',
    title: 'Plantando Ideias – Um Encontro Inspirador no Grupo Hortsoy',
    date: '16 Jun 2025',
    isoDate: '2025-06-16',
    author: 'Grupo Hortsoy',
    category: 'Cultura & Pessoas',
    featuredImage: '/assets/img/blog-plantando-ideias.png',
    excerpt:
      'Encontro focado no engajamento, bem-estar e no compartilhamento de conhecimento essencial para impulsionar a inovação no dia a dia da equipe Hortsoy.',
    sections: [
      {
        paragraphs: [
          'O programa **Plantando Ideias** reuniu colaboradores e lideranças do **Grupo HortSoy** para um momento especial de escuta ativa, planejamento colaborativo e desenvolvimento humano.',
        ],
      },
      {
        heading: 'Cultura corporativa focada no aprendizado contínuo.',
        image: '/assets/img/blog-plantando-ideias-1.png',
        imageAlt: 'Encontro Plantando Ideias imagem interna',
        paragraphs: [
          'Acreditamos que uma empresa inovadora se constrói através de pessoas capacitadas, motivadas e conectadas com a missão de transformar o agronegócio sustentável.',
          'Durante o encontro, foram debatidas práticas diárias de integração entre filiais, melhorias nos fluxos de atendimento ao produtor rural e iniciativas de sustentabilidade que geram impacto positivo nas comunidades onde atuamos.',
        ],
      },
    ],
  },
  {
    slug: 'expo2025',
    title: 'Hortsoy — Conectando o Campo ao Futuro.',
    date: '23 Mai 2025',
    isoDate: '2025-05-23',
    author: 'Grupo Hortsoy',
    category: 'Eventos & Tecnologia',
    featuredImage: '/assets/img/blog-expo2025.png',
    excerpt:
      'A Hortsoy marcou presença com soluções tecnológicas inovadoras de bioestimulantes, nutrição de plantas e controle biológico para otimizar os resultados das safras.',
    sections: [
      {
        heading:
          'HortSoy marca presença em uma das maiores feiras do Cerrado Mineiro, realizada em Patrocínio.',
        image: '/assets/img/blog-expo2025-1.jpg',
        imageAlt: 'Hortsoy Conectando o Campo ao Futuro imagem interna',
        paragraphs: [
          'Participar de uma das maiores feiras do Cerrado Mineiro, realizada na cidade de Patrocínio e promovida pela Expoccacer e Andav, foi um verdadeiro marco para a **Hortsoy**.',
          'Com orgulho, estivemos presentes com nosso stand, em um evento que celebrou a força e a tradição da cafeicultura. Mais do que expor nossos produtos e soluções, tivemos a honra de recepcionar nossos clientes – as verdadeiras estrelas da nossa corporação – e de fortalecer os laços com nossos parceiros, peças fundamentais em nossas estratégias.',
          'Foram dias intensos de trocas, aprendizado e negociações de excelência, reafirmando nosso compromisso com a inovação, o desenvolvimento e o sucesso de todos que fazem parte do universo **Hortsoy**.',
          'Seguimos juntos, cultivando resultados e colhendo grandes conquistas. Juntos somos mais fortes! 🚜💚',
        ],
      },
      {
        heading: 'Conectando conhecimento e oportunidades no agronegócio.',
        image: '/assets/img/blog-expo2025-2.jpg',
        imageAlt: 'Hortsoy na feira do Cerrado Mineiro',
        paragraphs: [
          'Nosso objetivo foi promover dias absolutos de negociações oportunas, compartilhamento de conteúdos relevantes e estratégicos, com foco em timing, atualizações de tendências e mercadologia aplicada ao universo da cafeicultura.',
        ],
      },
      {
        heading: 'Fortalecendo parcerias, cultivando resultados.',
        image: '/assets/img/blog-expo2025-3.jpg',
        imageAlt: 'Equipe Hortsoy no evento',
        paragraphs: [
          'Ser Patrocinador deste evento sempre resulta em avanços marcantes, pois é um movimento amplamente reconhecido por toda a região. Como resultado, houve um aumento significativo em nossa demanda, onde a **HortSoy** com seus Parceiros estratégicos garante as melhores soluções em plantio, nutrição e proteção de cultivos.',
          'Seguiremos promovendo encontros técnicos e capacitações para continuar impulsionando a excelência no campo!',
        ],
      },
    ],
  },
  {
    slug: 'novo-centro',
    title: 'Inauguração do Novo Centro Administrativo da HortSoy',
    date: '14 Fev 2025',
    isoDate: '2025-02-14',
    author: 'Grupo Hortsoy',
    category: 'Institucional',
    featuredImage: '/assets/img/blog-novo-centro.jpg',
    excerpt:
      'Celebramos a inauguração oficial de nossa nova sede administrativa em Uberaba-MG. Um espaço moderno planejado para promover integração, colaboração e suporte de alta eficiência.',
    sections: [
      {
        heading: 'Mais que um espaço físico: um marco de crescimento e modernização.',
        image: '/assets/img/blog-novo-centro-1.jpg',
        imageAlt: 'Inauguração do Novo Centro Administrativo imagem interna',
        paragraphs: [
          'Com imensa alegria e sentimento de realização, celebramos a inauguração oficial de nossa nova sede administrativa em Uberaba-MG. Um espaço moderno planejado para promover integração, colaboração e suporte de alta eficiência.',
          'A nova estrutura reflete a evolução constante do **Grupo HortSoy**, reforçando nossos pilares de governança, excelência operacional e atendimento próximo aos produtores rurais de toda a região do Triângulo Mineiro e Alto Paranaíba.',
        ],
      },
      {
        heading: 'Ambiente planejado para as pessoas.',
        image: '/assets/img/blog-novo-centro-2.jpg',
        imageAlt: 'Instalações do novo centro administrativo',
        paragraphs: [
          'Projetado com conceito aberto e áreas dedicadas à capacitação contínua, o novo centro integra nossas equipes de inteligência de mercado, suprimentos, tecnologia e relacionamento com o cliente.',
          'Com essa expansão, aceleramos os tempos de resposta para cotações, suporte agronômico e logística de distribuição de insumos em todas as nossas 16 unidades.',
        ],
      },
    ],
  },
  {
    slug: 'barter-cafe',
    title: 'HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer',
    date: '14 Fev 2025',
    isoDate: '2025-02-14',
    author: 'Grupo Hortsoy',
    category: 'Mercado & Finanças',
    featuredImage: '/assets/img/blog-barter-cafe.jpg',
    excerpt:
      'Nossos consultores estiveram presentes no Barter Café da Bayer em Ribeirão Preto-SP, fortalecendo a parceria comercial e as inovações no manejo e mercado cafeeiro.',
    sections: [
      {
        paragraphs: [
          'Nossos consultores estiveram presentes no conceituado **Barter Café da Bayer**, realizado em Ribeirão Preto-SP. Um encontro que reuniu as principais lideranças do setor para debater estratégias financeiras e tendências de mercado para as próximas safras.',
        ],
      },
      {
        heading: 'Segurança financeira e planejamento para o cafeicultor.',
        image: '/assets/img/blog-barter-cafe-1.jpg',
        imageAlt: 'Barter Café Bayer e Hortsoy imagem interna',
        paragraphs: [
          'As operações de Barter representam uma das ferramentas mais inteligentes para a gestão de risco do produtor rural, permitindo travar custos de insumos de alta tecnologia com a própria produção futura de café.',
          'A parceria estratégica entre HortSoy e Bayer assegura condições comerciais competitivas e pacotes tecnológicos completos adaptados às particularidades do Cerrado Mineiro e do Sul de Minas.',
        ],
      },
    ],
  },
  {
    slug: 'manejo-soja',
    title: 'HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição',
    date: '14 Fev 2025',
    isoDate: '2025-02-14',
    author: 'Grupo Hortsoy',
    category: 'Manejo Técnico',
    featuredImage: '/assets/img/blog-manejo-soja.jpg',
    excerpt:
      'Um encontro de campo focado na transferência de novas tecnologias de nutrição avançada e manejo de solo para alavancar a produtividade da cultura da soja.',
    sections: [
      {
        paragraphs: [
          'A **HortSoy** em parceria com a **Vittia** realizou um dia de campo técnico de alto nível, reunindo produtores e agrônomos na Fazenda Cantão em Piumhi/MG.',
        ],
      },
      {
        heading: 'Nutrição equilibrada e biologia do solo.',
        image: '/assets/img/blog-manejo-soja-1.jpg',
        imageAlt: 'Evento de Manejo de Soja imagem interna',
        paragraphs: [
          'Foram apresentados resultados práticos de biofertilizantes, inoculantes e nutrição foliar que promovem o enraizamento vigoroso e a resistência das plantas a estresses hídricos.',
          'O manejo integrado do perfil de solo, associado ao equilíbrio nutricional de macro e micronutrientes, tem se consolidado como o diferencial decisivo para romper os tetos produtivos médios da cultura da soja na região.',
        ],
      },
    ],
  },
  {
    slug: 'produtividade-bayer',
    title: 'Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola',
    date: '11 Fev 2025',
    isoDate: '2025-02-11',
    author: 'Grupo Hortsoy',
    category: 'Biotecnologia',
    featuredImage: '/assets/img/blog-produtividade-bayer.jpg',
    excerpt:
      'Uma parceria sólida que une biotecnologia de ponta, defensivos e suporte especializado para reduzir o estresse de gestão e otimizar cada safra no campo.',
    sections: [
      {
        paragraphs: [
          'A união de genética de alto teto produtivo, proteção química avançada e assistência técnica permanente no campo tem garantido recordes de colheita para os produtores atendidos pelo **Grupo HortSoy**.',
        ],
      },
      {
        heading: 'Tecnologia e inteligência agronômica lado a lado.',
        image: '/assets/img/blog-produtividade-bayer-1.jpg',
        imageAlt: 'Produtividade Agrícola Bayer e Hortsoy imagem interna',
        paragraphs: [
          'Com o portfólio completo da Bayer e a presença técnica consultiva dos agrônomos da Hortsoy, cada talhão é manejado com dosagens e épocas de aplicação ideais, evitando perdas e potencializando cada grão colhido.',
          'Da escolha da semente ao tratamento fitossanitário e monitoramento digital, oferecemos uma consultoria de ponta a ponta para que o produtor rural obtenha a máxima rentabilidade por hectare.',
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(limit = 5, excludeSlug?: string): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== excludeSlug).slice(0, limit);
}
