import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Stub usado APENAS em desenvolvimento quando o .env não está configurado.
 * Permite abrir o site para mexer no layout sem credenciais do Supabase:
 * leituras devolvem lista vazia e escritas/auth falham de forma controlada,
 * em vez de derrubar a aplicação inteira no boot.
 */
const createStubClient = () => {
  const emptyResult = { data: [], error: null };
  const noBackend = { data: null, error: new Error('Supabase não configurado (modo dev sem .env)') };

  const queryBuilder = () => {
    const builder = {
      select: () => builder,
      eq: () => builder,
      order: () => builder,
      limit: () => builder,
      single: () => Promise.resolve({ data: null, error: null }),
      insert: () => Promise.resolve(noBackend),
      update: () => Promise.resolve(noBackend),
      delete: () => Promise.resolve(noBackend),
      then: (resolve, reject) => Promise.resolve(emptyResult).then(resolve, reject),
    };
    return builder;
  };

  return {
    from: queryBuilder,
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: () => Promise.resolve(noBackend),
      signInWithPassword: () => Promise.resolve(noBackend),
      signOut: () => Promise.resolve({ error: null }),
    },
  };
};

const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isConfigured && !import.meta.env.DEV) {
  throw new Error(
    'VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY são obrigatórios em produção.'
  );
}

if (!isConfigured) {
  console.warn(
    '[dev] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY ausentes: usando cliente Supabase stub. ' +
    'Portfólio e formulário de contato não funcionam. Crie um .env para usar os dados reais.'
  );
}

const customSupabaseClient = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createStubClient();

export default customSupabaseClient;

export {
    customSupabaseClient,
    customSupabaseClient as supabase,
};
