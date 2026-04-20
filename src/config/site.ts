import heroImage from "@/assets/hero-salon.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import salon1 from "@/assets/salon-interior-1.jpg";
import salon2 from "@/assets/salon-interior-2.jpg";
import salon3 from "@/assets/salon-interior-3.jpg";

/**
 * SALON CONFIGURATION FILE
 * 
 * Você pode alterar todos os textos, links e fotos desta página aqui.
 * Para alterar cores, edite o arquivo `src/styles.css` onde as variáveis base estão definidas.
 */

export const siteConfig = {
    // Informações Gerais
    salonName: "Salon",
    salonFullName: "Salon Beauty",
    headTitle: "Salon — Beleza & Bem-estar",
    headDescription: "Salon é um salão de beleza de luxo oferecendo penteados, cuidados com a pele, pacotes para noivas e tratamentos maravilhosos.",

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
        imageAlt: "Salon — experiência de beleza",
        tagline: "Beleza & Bem-Estar",
        title: "Salon",
        subtitle: "Onde a elegância encontra a arte. Um santuário dedicado a revelar o seu lado mais radiante.",
        primaryButtonText: "Agendar Agora",
        secondaryButtonText: "Nossos Serviços",
    },

    // Seção de Serviços
    servicesSection: {
        tagline: "O Que Oferecemos",
        title: "Nossos Serviços",
        services: [
            {
                title: "Corte e Estilização",
                description: "De cortes precisos a ondas fluidas, nossos estilistas criam visuais que chamam a atenção.",
                icon: "✦",
                price: "A partir de R$ 150",
            },
            {
                title: "Coloração e Mechas",
                description: "Balayage, ombré ou coloração clássica — damos vida e cor à sua visão.",
                icon: "◈",
                price: "A partir de R$ 350",
            },
            {
                title: "Cuidados com a Pele",
                description: "Tratamentos faciais rejuvenescedores que deixam sua pele incrível e brilhante.",
                icon: "❋",
                price: "A partir de R$ 200",
            },
            {
                title: "Unhas e Beleza",
                description: "Manicures, pedicures e nail art com atenção meticulosa aos detalhes.",
                icon: "✿",
                price: "A partir de R$ 80",
            },
            {
                title: "Dia da Noiva",
                description: "Pacotes completos para noivas, para o dia mais inesquecível da sua vida.",
                icon: "♡",
                price: "A partir de R$ 1200",
            },
            {
                title: "Massagem e Spa",
                description: "Alivie a tensão com nossos tratamentos relaxantes mágicos de assinatura.",
                icon: "❁",
                price: "A partir de R$ 180",
            },
        ]
    },

    // Seção de Portfólio (Galeria)
    gallerySection: {
        tagline: "Portfólio",
        title: "Resultados que falam por si",
        description: "Cada transformação é uma assinatura. Conheça alguns dos nossos trabalhos mais recentes — feitos com técnica, cuidado e arte.",
        images: [
            { src: gallery1, alt: "Balayage loiro com ondas suaves", label: "Coloração" },
            { src: gallery2, alt: "Penteado de noiva elegante", label: "Noivas" },
            { src: gallery3, alt: "Skincare e produtos premium", label: "Skincare" },
            { src: gallery4, alt: "Cabelo ruivo vibrante", label: "Cor Fashion" },
            { src: gallery5, alt: "Manicure rosa nude elegante", label: "Manicure" },
            { src: gallery6, alt: "Cabelo liso brilhante longo", label: "Hair Styling" },
        ]
    },

    // Seção do Salão / Espaço
    salonSection: {
        tagline: "Nosso Espaço",
        title: "Um refúgio para você",
        description: "Projetado para acolher e encantar — cada detalhe do nosso salão foi pensado para que seu momento de beleza seja também um momento de paz.",
        images: [
            {
                src: salon1,
                alt: "Área de estilização do salão Salon com cadeiras elegantes e mármore",
                title: "Estúdio principal",
                subtitle: "Onde a magia acontece"
            },
            {
                src: salon2,
                alt: "Recepção elegante do salão com flores",
                title: "Recepção",
                subtitle: "Bem-vinda ao Salon"
            },
            {
                src: salon3,
                alt: "Sala de spa e tratamentos faciais com iluminação suave",
                title: "Spa & Skincare",
                subtitle: "Tranquilidade absoluta"
            }
        ]
    },

    // Seção "Sobre Nós"
    aboutSection: {
        tagline: "Nossa História",
        title: "Feito com \nPaixão e Cuidado",
        paragraphs: [
            "No Salon, acreditamos que a beleza é uma experiência, e não apenas um resultado. Fundado com a visão de criar um espaço caloroso e acolhedor onde cada mulher se sente celebrada, nossa equipe de estilistas premiados e especialistas em beleza traz décadas de experiência técnica combinada.",
            "A partir do momento em que você passa por nossas portas, você será envolvida em uma atmosfera de luxo calmo — música suave, essências aromáticas e a essência da verdadeira arte capilar."
        ],
        stats: [
            { value: "12+", label: "Anos de Excelência" },
            { value: "5K", label: "Clientes Satisfeitas" },
            { value: "15", label: "Especialistas" },
            { value: "4.9", label: "Estrelas (Avaliação)" },
        ]
    },

    // Seção de Depoimentos
    testimonialsSection: {
        tagline: "Depoimentos",
        title: "O Que Dizem Nossas Clientes",
        testimonials: [
            {
                name: "Sofia M.",
                text: "O Salon transformou não apenas meu cabelo, mas toda a minha confiança. A equipe é incrivelmente talentosa e amável.",
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
        description: "Pronta para vivenciar a experiência Salon? Agende seu horário hoje mesmo ou passe em nosso salão. Adoraríamos receber você.",
        primaryButtonText: "Agendar Horário",
        secondaryButtonText: "Ligue para nós",
        infoBlocks: [
            {
                title: "Localização",
                lines: ["Avenida das Flores, 450", "São José dos Pinhais, PR"]
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
