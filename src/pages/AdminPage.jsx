import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';

// O peso do painel (login, listagem, formulario) fica em um chunk a parte,
// fora do bundle de quem so visita o site. O Helmet abaixo NAO entra nesse
// lazy de proposito: assim o noindex aparece no HTML pre-renderizado, sem
// depender de o buscador executar o JavaScript.
const AdminContent = lazy(() => import('@/components/admin/AdminContent'));

/** Area interna de gestao do portfolio. */
const AdminPage = () => (
  <>
    <Helmet>
      <title>Administração | VIDMAR</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
      <AdminContent />
    </Suspense>
  </>
);

export default AdminPage;
