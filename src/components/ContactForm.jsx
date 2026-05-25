import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoServico: '',
    descricao: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    'Bancadas em Mármore',
    'Lavatórios',
    'Pias',
    'Ilhas',
    'Pisos',
    'Escadas',
    'Outros Trabalhos'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    if (!formData.tipoServico) {
      newErrors.tipoServico = 'Selecione um tipo de serviço';
    }

    if (!formData.descricao.trim()) {
      newErrors.descricao = 'Descrição do projeto é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Erro na validação",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('quotations')
        .insert([
          {
            name: formData.nome,
            email: formData.email,
            phone: formData.telefone,
            project_type: formData.tipoServico,
            message: formData.descricao
          }
        ]);

      if (error) throw error;

      toast({
        title: "Orçamento enviado com sucesso!",
        description: "Entraremos em contato em breve para agendar sua medição gratuita.",
        duration: 5000,
        className: "bg-green-50 border-green-200"
      });

      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        tipoServico: '',
        descricao: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar sua solicitação. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-zinc-900/40 rounded-2xl shadow-2xl p-8 border border-zinc-800/80 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">
            Solicite seu Orçamento
          </h2>
          <p className="text-zinc-400 font-light">
            Solicite uma medição gratuita e orçamento sem compromisso
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-zinc-300 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-zinc-950 border rounded-lg focus:ring-2 focus:ring-gold-vidmar focus:border-transparent transition-all text-white placeholder-zinc-600 ${
                errors.nome ? 'border-red-500' : 'border-zinc-800/80'
              }`}
              placeholder="Seu nome completo"
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-zinc-950 border rounded-lg focus:ring-2 focus:ring-gold-vidmar focus:border-transparent transition-all text-white placeholder-zinc-600 ${
                errors.email ? 'border-red-500' : 'border-zinc-800/80'
              }`}
              placeholder="seu@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-zinc-300 mb-2">
              Telefone *
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-zinc-950 border rounded-lg focus:ring-2 focus:ring-gold-vidmar focus:border-transparent transition-all text-white placeholder-zinc-600 ${
                errors.telefone ? 'border-red-500' : 'border-zinc-800/80'
              }`}
              placeholder="(11) 91234-5678"
            />
            {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
          </div>

          {/* Tipo de Serviço */}
          <div>
            <label htmlFor="tipoServico" className="block text-sm font-medium text-zinc-300 mb-2">
              Tipo de Serviço *
            </label>
            <select
              id="tipoServico"
              name="tipoServico"
              value={formData.tipoServico}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-zinc-950 border rounded-lg focus:ring-2 focus:ring-gold-vidmar focus:border-transparent transition-all text-white ${
                errors.tipoServico ? 'border-red-500' : 'border-zinc-800/80'
              }`}
            >
              <option value="" className="text-zinc-600">Selecione um serviço</option>
              {serviceTypes.map((service) => (
                <option key={service} value={service} className="bg-zinc-950 text-white">
                  {service}
                </option>
              ))}
            </select>
            {errors.tipoServico && <p className="text-red-500 text-sm mt-1">{errors.tipoServico}</p>}
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-zinc-300 mb-2">
              Descrição do Projeto *
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleInputChange}
              rows={5}
              className={`w-full px-4 py-3 bg-zinc-950 border rounded-lg focus:ring-2 focus:ring-gold-vidmar focus:border-transparent transition-all resize-none text-white placeholder-zinc-600 ${
                errors.descricao ? 'border-red-500' : 'border-zinc-800/80'
              }`}
              placeholder="Descreva seu projeto em detalhes..."
            />
            {errors.descricao && <p className="text-red-500 text-sm mt-1">{errors.descricao}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold-vidmar hover:bg-gold-vidmar/90 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 shadow-[0_4px_15px_-3px_rgba(209,146,23,0.4)]"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Send size={20} />
                Solicitar Orçamento Gratuito
              </span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;