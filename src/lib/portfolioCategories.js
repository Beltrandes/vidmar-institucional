/**
 * Categorias do portfolio.
 *
 * Fonte unica para o filtro da galeria publica e para o select do painel
 * admin: o valor gravado em portfolio_items.category precisa bater
 * exatamente com um destes, acentos inclusive, senao o item nao aparece
 * em nenhum filtro.
 */
export const PORTFOLIO_CATEGORIES = [
  'Cozinha',
  'Banheiro',
  'Área Gourmet',
  'Lavanderias',
  'Áreas Externas',
  'Projetos Comerciais',
];

/** Lista do filtro da galeria, com a opcao que mostra tudo. */
export const PORTFOLIO_FILTERS = ['Todos', ...PORTFOLIO_CATEGORIES];

/**
 * Categorias da versao anterior, organizadas por tipo de peca em vez de
 * ambiente. Itens ainda gravados com estes valores aparecem so em "Todos"
 * ate serem reclassificados no painel, que os sinaliza.
 */
export const LEGACY_CATEGORIES = ['Bancadas', 'Lavatórios', 'Ilhas', 'Pisos', 'Escadas'];

/** Indica se a categoria gravada no item ainda e reconhecida pelos filtros. */
export const isKnownCategory = (category) => PORTFOLIO_CATEGORIES.includes(category);
