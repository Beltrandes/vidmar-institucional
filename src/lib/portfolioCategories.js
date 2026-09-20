/**
 * Categorias do portfolio.
 *
 * Fonte unica para o filtro da galeria publica e para o select do painel
 * admin: o valor gravado em portfolio_items.category precisa bater
 * exatamente com um destes, acentos inclusive, senao o item nao aparece
 * em nenhum filtro.
 */
export const PORTFOLIO_CATEGORIES = [
  'Bancadas',
  'Lavatórios',
  'Ilhas',
  'Pisos',
  'Escadas',
];

/** Lista do filtro da galeria, com a opcao que mostra tudo. */
export const PORTFOLIO_FILTERS = ['Todos', ...PORTFOLIO_CATEGORIES];
