import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WhatsAppLink from '@/components/WhatsAppLink';

/**
 * Perguntas frequentes.
 *
 * Só entram aqui respostas que a Vidmar pode sustentar: informação já
 * publicada no site (medição gratuita, região, materiais, horários) ou
 * confirmada pela empresa (prazo de 15 a 20 dias; garantia de 1 ano restrita
 * a desnível, fixação e vazamento). Prazo, garantia e forma de pagamento são
 * promessa comercial: não alterar nem ampliar sem confirmação.
 *
 * O schema.org FAQPage é gerado a partir desta mesma lista: o Google exige
 * que o conteúdo estruturado corresponda ao que o visitante vê na página.
 */
export const faqItems = [
  {
    question: 'A medição no local é realmente gratuita?',
    answer:
      'Sim. Enviamos um profissional com equipamento de precisão para medir seu ambiente sem nenhum custo e sem compromisso de fechamento. A medição é o que garante o corte milimétrico da peça.',
  },
  {
    question: 'Quais regiões vocês atendem?',
    answer:
      'Atendemos São Caetano do Sul, todo o ABC e a Grande São Paulo. Nossa loja fica na Avenida Conde Francisco Matarazzo, 679, em São Caetano do Sul.',
  },
  {
    question: 'Como solicito um orçamento?',
    answer:
      'Pelo WhatsApp (11) 91105-3203, por telefone, ou pelo formulário do site. Precisamos apenas do seu nome e telefone para retornar — e respondemos em até 1 dia útil.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer:
      'O prazo é de 15 a 20 dias. Ele é confirmado no orçamento, junto com a data prevista de instalação, para que você possa se organizar com as outras etapas da obra.',
  },
  {
    question: 'Os serviços têm garantia?',
    answer:
      'Sim. Oferecemos 1 ano de garantia contra desnível, problemas de fixação e vazamentos. A garantia cobre especificamente esses itens de instalação, e não danos causados por uso indevido, impacto ou manutenção inadequada da pedra.',
  },
  {
    question: 'Quais materiais vocês trabalham?',
    answer:
      'Mármores, granitos, quartzitos, superfícies de quartzo e lâminas sinterizadas. Cada material tem características próprias de resistência, manutenção e aparência, e ajudamos você a escolher o mais adequado ao seu projeto e à sua rotina.',
  },
  {
    question: 'Que tipos de peça vocês produzem?',
    answer:
      'Bancadas de cozinha e banheiro, lavatórios, pias, ilhas gourmet, revestimentos de piso e parede, escadas e peças sob medida. Todos os projetos são executados sob medida, a partir da medição do seu ambiente.',
  },
  {
    question: 'Vocês fazem a instalação?',
    answer:
      'Sim. A instalação é feita pela nossa própria equipe, com profissionais qualificados. Da medição à instalação final, o processo é acompanhado por nós.',
  },
  {
    question: 'Qual o horário de atendimento?',
    answer:
      'De segunda a sexta, das 8h às 18h, e aos sábados das 9h às 13h. Mensagens enviadas fora desse horário são respondidas no próximo dia útil.',
  },
];

const FaqItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-zinc-800/80">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-center justify-between gap-4 py-6 text-left group"
    >
      <span className="text-lg md:text-xl font-medium text-white group-hover:text-gold-vidmar transition-colors duration-300">
        {item.question}
      </span>
      <ChevronDown
        size={22}
        className={`flex-shrink-0 text-gold-vidmar transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 pr-10 text-zinc-400 font-light leading-relaxed">
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/**
 * @param {boolean} withSchema - emite o JSON-LD FAQPage. Deve ficar ativo em
 * apenas uma página, para não duplicar o mesmo schema no site.
 */
const FaqSection = ({ withSchema = false }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900/60 overflow-hidden">
      {withSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}

      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gold-vidmar/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 border border-gold-vidmar/20 bg-gold-vidmar/5 px-5 py-2 rounded-full mb-4">
            <span className="text-xs uppercase tracking-widest text-gold-vidmar font-semibold">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-zinc-400 font-light">
            O que nossos clientes costumam perguntar antes de fechar o projeto
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-zinc-800/80"
        >
          {faqItems.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-zinc-400 font-light mb-5">
            Ficou com outra dúvida? Fale direto com um dos nossos consultores.
          </p>
          <WhatsAppLink
            message="Olá, tenho uma dúvida sobre os serviços da Vidmar."
            className="inline-flex items-center justify-center gap-2 bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-semibold px-8 py-4 rounded-xl shadow-lg shadow-gold-vidmar/20 transition-colors duration-300"
          >
            Tirar dúvida no WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
