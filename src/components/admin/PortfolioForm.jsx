import React, { useEffect, useState } from 'react';
import { Loader2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_CATEGORIES, isKnownCategory } from '@/lib/portfolioCategories';

const VAZIO = {
  title: '',
  category: PORTFOLIO_CATEGORIES[0],
  image_url: '',
  description: '',
  alt_text: '',
  sort_order: '',
  active: true,
};

const campo =
  'w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:ring-2 focus:ring-gold-vidmar focus:border-transparent transition-all';

/**
 * Formulario de criacao/edicao de um item do portfolio.
 * `item` nulo significa criacao.
 */
const PortfolioForm = ({ item, onSave, onCancel, salvando }) => {
  const [dados, setDados] = useState(VAZIO);
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (item) {
      setDados({ ...VAZIO, ...item, sort_order: item.sort_order ?? '' });
    } else {
      setDados(VAZIO);
    }
    setErros({});
  }, [item]);

  const alterar = (e) => {
    const { name, value, type, checked } = e.target;
    setDados((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (erros[name]) setErros((prev) => ({ ...prev, [name]: '' }));
  };

  const validar = () => {
    const novos = {};
    if (!dados.title.trim()) novos.title = 'Informe um título';
    if (!dados.image_url.trim()) {
      novos.image_url = 'Cole a URL da imagem';
    } else if (!/^https?:\/\//i.test(dados.image_url.trim())) {
      novos.image_url = 'A URL deve começar com https://';
    }
    setErros(novos);
    return Object.keys(novos).length === 0;
  };

  const enviar = (e) => {
    e.preventDefault();
    if (!validar()) return;
    onSave({
      ...dados,
      title: dados.title.trim(),
      image_url: dados.image_url.trim(),
      description: dados.description.trim() || null,
      alt_text: dados.alt_text.trim() || null,
      // Vazio vira null para o banco aplicar o default em vez de gravar NaN.
      sort_order: dados.sort_order === '' ? null : Number(dados.sort_order),
    });
  };

  const previa = dados.image_url.trim();

  return (
    <form onSubmit={enviar} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-5">
      <h2 className="text-xl font-bold text-white">
        {item ? 'Editar projeto' : 'Novo projeto'}
      </h2>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Título *
        </label>
        <input
          id="title"
          name="title"
          value={dados.title}
          onChange={alterar}
          className={campo}
          placeholder="Ex.: Bancada em Quartzo Calacata"
        />
        {erros.title && <p className="text-red-400 text-sm mt-1">{erros.title}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-zinc-300 mb-1.5">
            Categoria *
          </label>
          <select id="category" name="category" value={dados.category} onChange={alterar} className={campo}>
            {/* Se o item ainda tem uma categoria antiga, ela entra na lista:
                sem isto o select cairia na primeira opcao e trocaria a
                categoria sem o usuario perceber ao salvar outra alteracao. */}
            {!isKnownCategory(dados.category) && dados.category && (
              <option value={dados.category} className="bg-zinc-950">
                {dados.category} (categoria antiga)
              </option>
            )}
            {PORTFOLIO_CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-zinc-950">{c}</option>
            ))}
          </select>
          {!isKnownCategory(dados.category) && dados.category && (
            <p className="text-amber-400/90 text-xs mt-1">
              Escolha um ambiente: nesta categoria o projeto não aparece em nenhum filtro.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="sort_order" className="block text-sm font-medium text-zinc-300 mb-1.5">
            Ordem <span className="text-zinc-500 font-normal">(menor aparece primeiro)</span>
          </label>
          <input
            id="sort_order"
            name="sort_order"
            type="number"
            value={dados.sort_order}
            onChange={alterar}
            className={campo}
            placeholder="Ex.: 140"
          />
        </div>
      </div>

      <div>
        <label htmlFor="image_url" className="block text-sm font-medium text-zinc-300 mb-1.5">
          URL da imagem no Cloudinary *
        </label>
        <input
          id="image_url"
          name="image_url"
          value={dados.image_url}
          onChange={alterar}
          className={campo}
          placeholder="https://res.cloudinary.com/dcfgsleqw/image/upload/v1779.../foto.jpg"
        />
        {erros.image_url ? (
          <p className="text-red-400 text-sm mt-1">{erros.image_url}</p>
        ) : (
          <p className="text-zinc-500 text-xs mt-1">
            Cole a URL original, sem transformações. O site aplica compressão e redimensionamento sozinho.
          </p>
        )}
      </div>

      {previa && (
        <div>
          <p className="text-sm font-medium text-zinc-300 mb-1.5">Prévia</p>
          <img
            src={previa}
            alt="Prévia do projeto"
            className="w-full max-w-xs aspect-[4/3] object-cover rounded-xl border border-zinc-800"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            onLoad={(e) => { e.currentTarget.style.display = 'block'; }}
          />
        </div>
      )}

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Descrição <span className="text-zinc-500 font-normal">(aparece sobre a foto)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          value={dados.description}
          onChange={alterar}
          className={`${campo} resize-none`}
          placeholder="Ex.: Bancada de cozinha em Calacatta, apartamento em Santo André"
        />
        <p className="text-zinc-500 text-xs mt-1">
          No celular só aparecem 2 linhas. Cite material e ambiente: converte mais que "Bancada".
        </p>
      </div>

      <div>
        <label htmlFor="alt_text" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Texto alternativo <span className="text-zinc-500 font-normal">(para o Google e leitores de tela)</span>
        </label>
        <input
          id="alt_text"
          name="alt_text"
          value={dados.alt_text}
          onChange={alterar}
          className={campo}
          placeholder="Ex.: Bancada de cozinha em quartzo Calacata com rebaixo italiano"
        />
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="active"
          checked={dados.active}
          onChange={alterar}
          className="w-4 h-4 accent-gold-vidmar"
        />
        <span className="text-sm text-zinc-300">Visível no site</span>
      </label>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          type="submit"
          disabled={salvando}
          className="bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-semibold gap-2"
        >
          {salvando ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          {salvando ? 'Salvando...' : 'Salvar'}
        </Button>
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 gap-2"
        >
          <X size={18} />
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default PortfolioForm;
