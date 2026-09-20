import React, { useCallback, useEffect, useState } from 'react';
import { Eye, EyeOff, Loader2, LogOut, Pencil, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import PortfolioForm from '@/components/admin/PortfolioForm';

const miniatura = (url) =>
  url && url.includes('cloudinary.com')
    ? url.replace('/image/upload/', '/image/upload/f_auto,q_auto,w_160/')
    : url;

const PortfolioManager = () => {
  const { signOut, user } = useAuth();
  const { toast } = useToast();

  const [itens, setItens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [editando, setEditando] = useState(null); // item em edicao, ou 'novo'
  const [salvando, setSalvando] = useState(false);

  const carregar = useCallback(async () => {
    setCarregando(true);
    // Sem filtro de `active`: o painel precisa enxergar tambem os ocultos.
    const { data, error } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      toast({ variant: 'destructive', title: 'Erro ao carregar', description: error.message });
    } else {
      setItens(data || []);
    }
    setCarregando(false);
  }, [toast]);

  useEffect(() => { carregar(); }, [carregar]);

  const salvar = async (dados) => {
    setSalvando(true);
    const ehEdicao = editando && editando !== 'novo';

    const { error } = ehEdicao
      ? await supabase.from('portfolio_items').update(dados).eq('id', editando.id)
      : await supabase.from('portfolio_items').insert([dados]);

    setSalvando(false);

    if (error) {
      toast({ variant: 'destructive', title: 'Não foi possível salvar', description: error.message });
      return;
    }

    toast({ title: ehEdicao ? 'Projeto atualizado' : 'Projeto adicionado' });
    setEditando(null);
    carregar();
  };

  const alternarVisibilidade = async (item) => {
    const { error } = await supabase
      .from('portfolio_items')
      .update({ active: !item.active })
      .eq('id', item.id);

    if (error) {
      toast({ variant: 'destructive', title: 'Erro', description: error.message });
      return;
    }
    carregar();
  };

  const excluir = async (item) => {
    // Exclusao e irreversivel: a alternativa nao destrutiva e ocultar.
    if (!window.confirm(`Excluir "${item.title}" definitivamente?\n\nPara apenas tirar do site, use o botão de ocultar.`)) {
      return;
    }

    const { error } = await supabase.from('portfolio_items').delete().eq('id', item.id);

    if (error) {
      toast({ variant: 'destructive', title: 'Erro ao excluir', description: error.message });
      return;
    }
    toast({ title: 'Projeto excluído' });
    carregar();
  };

  const visiveis = itens.filter((i) => i.active).length;

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Portfólio</h1>
            <p className="text-sm text-zinc-500 mt-1">
              {itens.length} {itens.length === 1 ? 'projeto' : 'projetos'} · {visiveis} visíveis no site
              {user?.email && <> · {user.email}</>}
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => setEditando('novo')}
              className="bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-semibold gap-2"
            >
              <Plus size={18} />
              Novo projeto
            </Button>
            <Button
              onClick={signOut}
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 gap-2"
            >
              <LogOut size={18} />
              Sair
            </Button>
          </div>
        </div>

        {editando && (
          <div className="mb-8">
            <PortfolioForm
              item={editando === 'novo' ? null : editando}
              onSave={salvar}
              onCancel={() => setEditando(null)}
              salvando={salvando}
            />
          </div>
        )}

        {carregando ? (
          <div className="flex justify-center py-20">
            <Loader2 size={32} className="animate-spin text-gold-vidmar" />
          </div>
        ) : itens.length === 0 ? (
          <p className="text-center text-zinc-500 py-20">
            Nenhum projeto cadastrado ainda.
          </p>
        ) : (
          <div className="space-y-3">
            {itens.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row sm:items-center gap-4 bg-zinc-900/50 border rounded-xl p-4 transition-colors ${
                  item.active ? 'border-zinc-800' : 'border-zinc-800/50 opacity-60'
                }`}
              >
                <img
                  src={miniatura(item.image_url)}
                  alt=""
                  loading="lazy"
                  className="w-full sm:w-28 h-28 sm:h-20 object-cover rounded-lg border border-zinc-800 flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-gold-vidmar bg-gold-vidmar/10 border border-gold-vidmar/20 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-zinc-600">ordem {item.sort_order}</span>
                    {!item.active && (
                      <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">
                        oculto
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-medium mt-1 truncate">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-zinc-500 truncate">{item.description}</p>
                  )}
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => alternarVisibilidade(item)}
                    title={item.active ? 'Ocultar do site' : 'Mostrar no site'}
                    className="p-2.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                  >
                    {item.active ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                  <button
                    onClick={() => setEditando(item)}
                    title="Editar"
                    className="p-2.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-gold-vidmar hover:border-gold-vidmar/50 transition-colors"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => excluir(item)}
                    title="Excluir"
                    className="p-2.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-red-400 hover:border-red-500/50 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioManager;
