// Configuração centralizada de todos os links
// Atualize as URLs aqui para os links reais

import InstagramPost2 from "../imports/InstagramPost2-15-374";
import InstagramPost6 from "../imports/InstagramPost6";
import InstagramPost7 from "../imports/InstagramPost7";
import InstagramPost9 from "../imports/InstagramPost9";
import InstagramPost10 from "../imports/InstagramPost10";
import InstagramPost11 from "../imports/InstagramPost11";
import SiteAutomaticoImage from "../imports/SiteAutomaticoImage";
import profilePhoto from "figma:asset/f047008a8c8a122b50b36bde729106166adc5b9b.png";

export const socialLinks = {
  facebook: "https://facebook.com/yohann",
  twitter: "https://twitter.com/yohann",
  instagram: "https://instagram.com/yohann",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/yohann",
  email: import.meta.env.VITE_EMAIL || "yohann@example.com",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "+5511999999999",
};

export const mainLinks = [
  {
    title: "Site Automático",
    description: "Crie seu site profissional em minutos com automação completa",
    url: "/site-automatico",
    image: <SiteAutomaticoImage />,
    category: "Automação",
    featured: true,
    isInternal: true
  },
  {
    title: "Pandoria",
    description: "Open Pandora - Sua plataforma principal de inovação tecnológica",
    url: "#",
    image: <InstagramPost2 />,
    category: "Plataforma",
    featured: true
  },
  {
    title: "DX Tech Solutions",
    description: "Soluções tecnológicas de ponta para transformar sua empresa",
    url: import.meta.env.VITE_DX_TECH_URL || "https://www.dxtechsolutions.com.br/",
    image: <InstagramPost6 />,
    category: "Tecnologia",
    featured: false
  },
  {
    title: "YouTube",
    description: "Conteúdo exclusivo, tutoriais e conhecimento de qualidade",
    url: import.meta.env.VITE_YOUTUBE_URL || "https://www.youtube.com/@Yohannescher",
    image: <InstagramPost7 />,
    category: "Conteúdo",
    featured: false
  },
  {
    title: "Frame To Money",
    description: "Transforme seus designs em projetos lucrativos",
    url: import.meta.env.VITE_FRAME_TO_MONEY_URL || "https://frametomoney.com",
    image: <InstagramPost9 />,
    category: "Design",
    featured: false
  },
  {
    title: "Dev Acelerado",
    description: "Acelere sua carreira como desenvolvedor profissional",
    url: "/dev-acelerado",
    image: <InstagramPost10 />,
    category: "Educação",
    featured: false,
    isInternal: true
  },
  {
    title: "Consultoria",
    description: "Consultoria especializada e estratégica para seu negócio",
    url: "/consultoria",
    image: <InstagramPost11 />,
    category: "Negócios",
    featured: false,
    isInternal: true
  },
];

export const profileInfo = {
  name: import.meta.env.VITE_PROFILE_NAME || "Yohann",
  title: import.meta.env.VITE_PROFILE_TITLE || "Desenvolvedor & Empreendedor",
  bio: "Arquiteto digital, empreendedor visionário, criador de conteúdo e atleta dedicado. Obsessivo por excelência, busco performance máxima em cada área da vida — não apenas para alcançar metas pessoais, mas para elevar o mundo 1% a cada dia. Entre códigos, negócios e treinos, construo legados que transcendem o ordinário.",
  image: profilePhoto,
  tags: [
    { icon: "code", label: "Desenvolvedor" },
    { icon: "rocket", label: "Empreendedor" },
    { icon: "video", label: "Creator" },
    { icon: "zap", label: "Atleta" }
  ],
  heroVideo: import.meta.env.VITE_HERO_VIDEO_URL || "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
};