import heroImage from "@/assets/harmoniza-dona.png";
import mobileHeroImage from "@/assets/harmoniza-dona.png";
import doutoraHarmoniza from "@/assets/doutora-harmoniza.png";
import tecPonta from "@/assets/tec-ponta.png";
import resultado1 from "@/assets/resultado1.png";
import resultado2 from "@/assets/resultado2.png";
import harmonizaLocal from "@/assets/harmoniza-local.png";

/**
 * SALON CONFIGURATION FILE
 * 
 * Você pode alterar todos os textos, links e fotos desta página aqui.
 * Para alterar cores, edite o arquivo `src/styles.css` onde as variáveis base estão definidas.
 */

export const siteConfig = {
    // Informações Gerais
    salonName: "Dra. Laira Munik",
    salonFullName: "Dra. Laira Munik | Harmonização Facial em Curitiba",
    headTitle: "Dra. Laira Munik | Harmonização Facial",
    headDescription: "+2.000 rostos transformados com o Protocolo Golden Face✨",

    whatsappLink: "https://wa.me/5541987928174",

    // Navegação
    navLinks: [
        { label: "Serviços", href: "#services" },
        { label: "Portfólio", href: "#gallery" },
        { label: "O Espaço", href: "#salon" },
        { label: "Sobre Nós", href: "#about" },
        { label: "Contato", href: "#contact" },
    ],
    bookNowText: "Agendar Agora",

    // Seção Hero (Banner)
    hero: {
        image: heroImage,
        mobileImage: mobileHeroImage,
        imageAlt: "Dra. Laira Munik — Especialista em Harmonização Facial",
        tagline: "Protocolo Golden Face✨ | CRO/PR 26635",
        title: "Dra. Laira Munik",
        subtitle: "A referência em Harmonização Facial em Curitiba. Descubra a sua versão mais radiante e natural.",
        primaryButtonText: "Agendar Agora",
        secondaryButtonText: "Nossos Serviços",
    },

    // Seção de Serviços
    servicesSection: {
        tagline: "Especialidades",
        title: "Procedimentos de Alto Padrão",
        services: [
            {
                title: "Protocolo Golden Face",
                description: "Nosso procedimento de assinatura que realça seus contornos de forma luxuosa, natural e segura.",
                icon: "✦",
                price: "Avaliação Personalizada",
            },
            {
                title: "Planejamento Completo e Individualizado",
                description: "Avaliação especializada detalhada para tratar todas as camadas da sua pele, garantindo saúde facial a longo prazo.",
                icon: "◈",
                price: "Agende sua Consulta",
            },
            {
                title: "Alta Performance em Estética",
                description: "Integração das melhores tecnologias e preenchedores de última geração para realçar sua autoestima.",
                icon: "❋",
                price: "Atendimento Premium",
            }
        ]
    },

    // Seção de Portfólio (Galeria)
    gallerySection: {
        tagline: "Portfólio",
        title: "Resultados que falam por si",
        description: "Cada transformação é uma assinatura. Conheça alguns dos nossos trabalhos mais recentes — feitos com técnica, cuidado e arte.",
        images: [
            { src: resultado1, alt: "Resultado de Harmonização Facial 1", label: "Golden Face" },
            { src: resultado2, alt: "Resultado de Harmonização Facial 2", label: "Contorno Facial" },
            { src: resultado1, alt: "Resultado de Harmonização Facial 3", label: "Golden Face" },
            { src: resultado2, alt: "Resultado de Harmonização Facial 4", label: "Rejuvenescimento" },
            { src: resultado1, alt: "Resultado de Harmonização Facial 5", label: "Protocolo Luxo" },
            { src: resultado2, alt: "Resultado de Harmonização Facial 6", label: "Estética Avançada" },
        ]
    },

    // Seção do Salão / Espaço
    salonSection: {
        tagline: "Nosso Espaço",
        title: "Um refúgio para você",
        description: "Projetado para acolher e encantar — cada detalhe da nossa clínica foi pensado para que seu momento de luxo seja inesquecível.",
        images: [
            {
                src: doutoraHarmoniza,
                alt: "Dra. Laira Munik",
                title: "Dra. Laira Munik",
                subtitle: "Atendimento especializado"
            },
            {
                src: harmonizaLocal,
                alt: "Ambiente sofisticado",
                title: "Luxo e Conforto",
                subtitle: "Hospitalidade VIP"
            },
            {
                src: tecPonta,
                alt: "Consultório exclusivo",
                title: "Tecnologia de Ponta",
                subtitle: "Ambiente Impecável"
            }
        ]
    },

    // Seção "Sobre Nós"
    aboutSection: {
        tagline: "Sobre a Especialista",
        title: "Experiência \ne Excelência",
        paragraphs: [
            "Com dedicação absoluta ao Protocolo Golden Face, meu objetivo é realçar a sua beleza de forma natural, luxuosa e segura. Priorizamos resultados elegantes que elevam a sua autoestima e valorizam seus traços únicos.",
            "São milhares de pacientes que confiaram em nossos procedimentos, conquistando uma estética facial balanceada com a melhor tecnologia e cuidados disponíveis."
        ],
        stats: [
            { value: "387", label: "Posts no Instagram" },
            { value: "10,6 Mil", label: "Seguidores" },
            { value: "+2.000", label: "Rostos Transformados" },
            { value: "26635", label: "CRO/PR" },
        ]
    },

    // Seção de Depoimentos
    testimonialsSection: {
        tagline: "Depoimentos",
        title: "O Que Dizem Nossas Clientes",
        testimonials: [
            {
                name: "Sofia M.",
                text: "O Reflexos da Beleza transformou não apenas meu cabelo, mas toda a minha confiança. A equipe é incrivelmente talentosa e amável.",
                service: "Corte & Coloração",
            },
            {
                name: "Helena R.",
                text: "Minha experiência como noiva foi pura magia. Cada detalhe foi perfeito — me senti na minha versão mais bonita e incrível.",
                service: "Pacote de Noiva",
            },
            {
                name: "Alice T.",
                text: "Eu frequento o salão há 3 anos e nunca vou a outro lugar. Os tratamentos faciais e a limpeza de pele são divinos.",
                service: "Cuidados com a Pele",
            },
        ]
    },

    // Seção de Contato
    contactSection: {
        tagline: "Fale Conosco",
        title: "Agende sua Visita",
        description: "Pronta para vivenciar a experiência Reflexos? Agende seu horário hoje mesmo ou passe em nosso espaço botânico. Adoraríamos receber você.",
        primaryButtonText: "Agendar Horário",
        secondaryButtonText: "Ligue para nós",
        infoBlocks: [
            {
                title: "Localização",
                lines: ["Rua das Flores, Centro", "Curitiba, PR"]
            },
            {
                title: "Horário de Funcionamento",
                lines: ["Seg – Sex: 09h às 20h", "Sáb – Dom: 10h às 18h"]
            },
            {
                title: "Contato",
                lines: ["ola@salon.com.br", "(41) 99999-0190"]
            }
        ]
    },

    // Rodapé
    footer: {
        copyrightText: "Todos os direitos reservados."
    }
};
