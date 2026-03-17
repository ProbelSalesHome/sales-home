/**
 * ============================================================
 * PRODUTOS EM DESTAQUE
 * ============================================================
 * Este arquivo pode ser editado diretamente pelo cliente
 * para alterar os produtos exibidos no site.
 *
 * Para adicionar um novo produto, copie um item do array
 * e altere os valores. A imagem deve estar na pasta public/.
 * ============================================================
 */

export interface ProdutoDestaque {
  nome: string;
  preco: string;
  imagem: string;
  descricao?: string;
}

export const PRODUTOS_DESTAQUE: ProdutoDestaque[] = [
  {
    nome: "Colchão Probel Guarda Costas",
    preco: "Consulte",
    imagem: "/placeholder.svg",
    descricao: "O colchão mais vendido do Brasil, com tecnologia ortopédica e suporte reforçado.",
  },
  {
    nome: "Colchão Probel Masterpiece",
    preco: "Consulte",
    imagem: "/placeholder.svg",
    descricao: "Luxo e conforto com molas ensacadas e tecido de alta qualidade.",
  },
  {
    nome: "Colchão Probel Evolution",
    preco: "Consulte",
    imagem: "/placeholder.svg",
    descricao: "Tecnologia de espuma viscoelástica para alívio de pressão.",
  },
];
