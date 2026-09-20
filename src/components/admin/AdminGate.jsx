import React, { useState } from 'react';
import { Loader2, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import PortfolioManager from '@/components/admin/PortfolioManager';

const campo =
  'w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:ring-2 focus:ring-gold-vidmar focus:border-transparent transition-all';

const LoginForm = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [entrando, setEntrando] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setEntrando(true);
    await signIn(email, senha);
    setEntrando(false);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16 bg-zinc-950 flex items-center justify-center px-4">
      <form
        onSubmit={enviar}
        className="w-full max-w-sm bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 space-y-5"
      >
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-white mb-1">Administração</h1>
          <p className="text-sm text-zinc-500">Gestão do portfólio</p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={campo}
            required
          />
        </div>

        <div>
          <label htmlFor="senha" className="block text-sm font-medium text-zinc-300 mb-1.5">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            autoComplete="current-password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={campo}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={entrando}
          className="w-full bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-semibold py-5 gap-2"
        >
          {entrando ? <Loader2 size={18} className="animate-spin" /> : <LogIn size={18} />}
          {entrando ? 'Entrando...' : 'Entrar'}
        </Button>

        {/* Nao existe cadastro publico: o usuario e criado no painel do Supabase. */}
      </form>
    </div>
  );
};

/** Mostra o painel para quem esta autenticado e o login para os demais. */
const AdminGate = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen pt-24 bg-zinc-950 flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-gold-vidmar" />
      </div>
    );
  }

  return user ? <PortfolioManager /> : <LoginForm />;
};

export default AdminGate;
