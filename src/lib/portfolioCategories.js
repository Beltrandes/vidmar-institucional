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
  'Lavanderia',
  'Área Externa',
  'Projeto Comercial',
];

/** Lista do filtro da galeria, com a opcao que mostra tudo. */
export const PORTFOLIO_FILTERS = ['Todos', ...PORTFOLIO_CATEGORIES];

// Valores usados em versoes anteriores. Itens ainda gravados assim aparecem
// so em "Todos" ate serem reclassificados no painel, que os sinaliza com ⚠:
//   por tipo de peca: Bancadas, Lavatórios, Ilhas, Pisos, Escadas
//   no plural:        Lavanderias, Áreas Externas, Projetos Comerciais

/** Indica se a categoria gravada no item ainda e reconhecida pelos filtros. */
export const isKnownCategory = (category) => PORTFOLIO_CATEGORIES.includes(category);
