import React from 'react';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import AdminGate from '@/components/admin/AdminGate';

/**
 * Conteudo do painel, carregado sob demanda pelo AdminPage.
 *
 * O AuthProvider e montado só aqui, e nao no App inteiro: no site publico
 * ele custaria uma chamada de sessao ao Supabase em toda visita, sem
 * nenhum uso.
 */
const AdminContent = () => (
  <AuthProvider>
    <AdminGate />
  </AuthProvider>
);

export default AdminContent;
