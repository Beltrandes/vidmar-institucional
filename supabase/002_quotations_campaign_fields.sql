-- Campos de origem de campanha nos pedidos de orçamento.
-- Permite saber qual anúncio/campanha gerou cada lead.
--
-- Rode este script no SQL Editor do Supabase ANTES de publicar a nova versão
-- do formulário, caso contrário o insert falha por coluna inexistente.

alter table public.quotations
  add column if not exists utm_source   text,
  add column if not exists utm_medium   text,
  add column if not exists utm_campaign text,
  add column if not exists utm_term     text,
  add column if not exists utm_content  text,
  add column if not exists gclid        text;

-- Email e descrição deixaram de ser obrigatórios no formulário
-- (apenas nome e telefone são pedidos), então precisam aceitar null.
alter table public.quotations
  alter column email drop not null;

alter table public.quotations
  alter column message drop not null;

alter table public.quotations
  alter column project_type drop not null;

create index if not exists quotations_utm_campaign_idx
  on public.quotations (utm_campaign);
