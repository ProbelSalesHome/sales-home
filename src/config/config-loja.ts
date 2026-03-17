/**
 * ============================================================
 * CONFIGURAÇÕES DA LOJA
 * ============================================================
 * Este arquivo pode ser editado diretamente pelo cliente
 * para alterar dados da loja exibidos no site.
 * ============================================================
 */

// --- Dados gerais da empresa ---
export const LOJA = {
  nome: "Sales Home – Probel Exclusiva",
  logoSrc: "/images/logo-probel.png",
  logoAlt: "Sales Home – Probel Exclusiva",

  // WhatsApp flutuante (número padrão)
  whatsappFlutuante: "https://wa.me/5511991403080",

  // Descrição institucional exibida no rodapé
  descricaoRodape:
    "Grupo Sales Home é franqueado da Probel e possui lojas especializadas em colchões nas cidades de Osasco e Guarulhos, oferecendo atendimento consultivo, entrega cuidadosa e produtos de alta qualidade.",

  // Créditos do rodapé
  creditoSite: {
    texto: "Site criado por",
    autor: "Giovanne Morais",
    url: "https://www.giovannemorais.com.br/",
  },
};

// --- Unidades / Lojas ---
export interface Loja {
  name: string;
  image: string;
  address: string;
  company: string;
  cnpj: string;
  phone: string;
  phoneLink: string;
  whatsapp: string;
  maps: string;
  rating: string;
  facebook: string;
  instagram: string;
}

export const LOJAS: Loja[] = [
  {
    name: "Probel Exclusiva Outlet – Autonomistas",
    image: "/lovable-uploads/2aca33f0-dc99-4eec-94d9-d2de58a39111.jpg",
    address: "Av. dos Autonomistas, 3086\nCentro – Osasco\nCEP 06090-015",
    company: "Exclusive Confort Comércio de Colchões Ltda.",
    cnpj: "52.295.028/0002-88",
    phone: "(11) 98814-4671",
    phoneLink: "tel:+5511988144671",
    whatsapp:
      "https://wa.me/5511988144671?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
    maps: "https://www.google.com/maps/place/Probel+Exclusiva+-+Autonomista/@-23.535218,-46.7842654,17z/data=!3m1!4b1!4m6!3m5!1s0x94ceff0932ed118f:0xeea5b47c467841e!8m2!3d-23.5352229!4d-46.7816905!16s%2Fg%2F11f03zxg4h?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    rating: "4,9",
    facebook: "https://www.facebook.com/profile.php?id=61585728404714",
    instagram: "https://www.instagram.com/probelosasco",
  },
  {
    name: "Probel Exclusiva – Shopping União",
    image: "/lovable-uploads/ae2a456b-3c76-48a9-ab55-2ef18890847c.jpg",
    address:
      "Av. dos Autonomistas, 1400\nArco 326 – Vila Yara\nOsasco – CEP 06020-010",
    company: "Sales Home Comércio de Colchões Ltda.",
    cnpj: "28.333.867/0002-69",
    phone: "(11) 99140-3080",
    phoneLink: "tel:+5511991403080",
    whatsapp:
      "https://wa.me/5511991403080?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
    maps: "https://www.google.com/maps/place/Probel+Exclusiva+-+Shopping+Uni%C3%A3o/@-23.5369738,-46.7672379,17z/data=!3m1!4b1!4m6!3m5!1s0x94ceff40ffdf2849:0xfc8012c141631b3a!8m2!3d-23.5369787!4d-46.764663!16s%2Fg%2F11c6qhqqvq?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    rating: "4,9",
    facebook: "https://www.facebook.com/profile.php?id=61585728404714",
    instagram: "https://www.instagram.com/probelshoppinguniao",
  },
  {
    name: "Probel Exclusiva – Internacional Guarulhos",
    image: "/lovable-uploads/10532564-153b-4ea1-a5c7-fd09450f6e6a.jpg",
    address:
      "Rua Eng. Camilo Olivetti, 295\nLoja D13 e D14\nItapegica – Guarulhos\nCEP 07042-040",
    company: "Imperial Sleep Comércio de Colchões Ltda.",
    cnpj: "42.551.524/0002-00",
    phone: "(11) 94521-3145",
    phoneLink: "tel:+5511945213145",
    whatsapp:
      "https://wa.me/5511945213145?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
    maps: "https://www.google.com/maps/place/Probel+Exclusiva+Shopping+Internacional+Guarulhos/@-23.4897768,-46.5515392,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5f66ec2fa535:0x315c7c21862fe5de!8m2!3d-23.4897817!4d-46.5489643!16s%2Fg%2F11k9z9jzym?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    rating: "4,9",
    facebook: "https://www.facebook.com/profile.php?id=61582698658098",
    instagram: "https://www.instagram.com/probelshoppinginternacional",
  },
];

// --- Lojas no rodapé (versão resumida) ---
export const LOJAS_RODAPE = [
  {
    name: "Shopping União — Osasco/SP",
    phone: "(11) 99140-3080",
    phoneLink: "tel:+5511991403080",
    facebook: "https://www.facebook.com/profile.php?id=61585728404714",
    instagram: "https://www.instagram.com/probelshoppinguniao",
  },
  {
    name: "Outlet Autonomistas — Osasco/SP",
    phone: "(11) 98814-4671",
    phoneLink: "tel:+5511988144671",
    facebook: "https://www.facebook.com/profile.php?id=61585728404714",
    instagram: "https://www.instagram.com/probelosasco",
  },
  {
    name: "Shopping Internacional — Guarulhos/SP",
    phone: "(11) 94521-3145",
    phoneLink: "tel:+5511945213145",
    facebook: "https://www.facebook.com/profile.php?id=61582698658098",
    instagram: "https://www.instagram.com/probelshoppinginternacional",
  },
];
