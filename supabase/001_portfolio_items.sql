-- ============================================================
-- PASSO 1: Criar a tabela portfolio_items
-- Cole este arquivo no SQL Editor do Supabase e execute
-- ============================================================

create table if not exists portfolio_items (
  id          uuid        default gen_random_uuid() primary key,
  title       text        not null,
  category    text        not null,         -- 'Bancadas' | 'Lavatórios' | 'Ilhas' | 'Pisos' | 'Escadas'
  image_url   text        not null,         -- URL base do Cloudinary (sem transformações)
  description text,
  alt_text    text,
  sort_order  integer     default 0,        -- controla a ordem de exibição
  active      boolean     default true,     -- false = não aparece no site
  created_at  timestamptz default now()
);

-- ============================================================
-- PASSO 2: Row Level Security
-- Leitura pública para itens ativos; escrita apenas para usuários autenticados
-- ============================================================

alter table portfolio_items enable row level security;

create policy "Leitura pública de itens ativos"
  on portfolio_items for select
  using (active = true);

create policy "Admin pode gerenciar itens"
  on portfolio_items for all
  using (auth.role() = 'authenticated');

-- ============================================================
-- PASSO 3: Seed — migra os 13 projetos existentes
-- ============================================================

insert into portfolio_items (title, category, image_url, description, alt_text, sort_order) values
  (
    'Bancada em Granito Preto São Gabriel',
    'Bancadas',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154378/pia-l-preto-sao-gabriel_woj65b.jpg',
    'Bancada em L em hotel de alto padrão',
    'Bancada de cozinha em granito preto São Gabriel em formato L de alto padrão',
    10
  ),
  (
    'Bancada em Quartzo Calacata',
    'Bancadas',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779759851/pia-calacata-rebaixo-italiano_xkinvo.jpg',
    'Bancada slim com rebaixo italiano',
    'Bancada de cozinha em quartzo Calacata com acabamento rebaixo italiano',
    20
  ),
  (
    'Lavatório em Granito Branco Alaska',
    'Lavatórios',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154374/lavatorio-branco-alaska-esculpido_r8b5uj.jpg',
    'Lavatório caixote com cuba esculpida',
    'Lavatório esculpido caixote em granito branco Alaska para banheiro',
    30
  ),
  (
    'Bancada em Granito Branco Pitaya',
    'Bancadas',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779743381/pia-churrasqueira-super-white-rodabase_g0gw6c.jpg',
    'Bancada em Área Gourmet com churrasqueira embutida',
    'Bancada de área gourmet em granito branco Pitaya com churrasqueira embutida',
    40
  ),
  (
    'Lavatório em Quartzo Branco',
    'Lavatórios',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154375/lavatorio-quartzo-branco-cuba-sobrepor_s72wx1.jpg',
    'Lavatório com frontão alto e cuba sobrepor',
    'Lavatório moderno em quartzo branco com cuba de sobrepor',
    50
  ),
  (
    'Nicho em Quartzo Branco',
    'Bancadas',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779743523/nicho-cozinha-quartzo-branco_vaya1s.jpg',
    'Bancada em nicho para cozinha',
    'Nicho planejado esculpido para cozinha em quartzo branco',
    60
  ),
  (
    'Bancadas em Mármore Branco Paraná',
    'Bancadas',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154375/pia-balcao-branco-parana_penbzp.jpg',
    'Bancada e balcão de cozinha',
    'Bancada e balcão americano de cozinha em mármore nobre branco Paraná',
    70
  ),
  (
    'Lavatório em Granito Branco Itaúnas Levigado',
    'Lavatórios',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154374/lavatorio-esculpido-branco-itaunas_uuxfpu.jpg',
    'Design exclusivo em granito com cuba esculpida',
    'Lavatório com design exclusivo em granito branco Itaúnas levigado e cuba esculpida',
    80
  ),
  (
    'Bancada em Granito Preto São Gabriel',
    'Bancadas',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154379/pia-preto-sao-gabriel-cuba-gourmet_wf7tfg.jpg',
    'Bancada extensa com cuba gourmet e cooktop',
    'Bancada de cozinha extensa com cooktop e cuba gourmet em granito preto São Gabriel',
    90
  ),
  (
    'Ilha em Quartzo Branco',
    'Ilhas',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779743745/ilha-banquetas-quartzo-branco_nhbxds.jpg',
    'Ilha em quartzo branco com pé lateral para banquetas',
    'Ilha central em quartzo branco com acabamento em cascata para banquetas',
    100
  ),
  (
    'Lavatório em Quartzo Bege',
    'Lavatórios',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154376/lavatorio-esculpido-cuba-extensa-quartzo-bege_ft1s62.jpg',
    'Lavatório esculpido com cuba extensa',
    'Lavatório com cuba esculpida extensa em quartzo bege de alto padrão',
    110
  ),
  (
    'Ilha em Quartzito Yellow Bamboo',
    'Ilhas',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779743873/pia-ilha-cuba-gourmet-yellow-bamboo_r8vt98.jpg',
    'Bancada em ilha com cuba gourmet e cooktop',
    'Ilha central gourmet com cooktop em quartzito nobre Yellow Bamboo',
    120
  ),
  (
    'Lavatório Branco Itaúnas Levigado',
    'Lavatórios',
    'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154375/lavatorio-esculpido-nicho-branco-itaunas_qvcduf.jpg',
    'Lavatório embutido em nicho com cuba esculpida',
    'Lavatório embutido em nicho de banheiro com cuba esculpida em granito branco Itaúnas',
    130
  );
