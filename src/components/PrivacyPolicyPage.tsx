import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, MapPin, AlertCircle, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-neutral-50 min-h-screen">
      {/* Breadcrumb & Top Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Navegação estrutural" className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 mb-6">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-[#E30613] transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Início</span>
          </button>
          <span>/</span>
          <span className="text-neutral-800 font-semibold">Política de Privacidade</span>
        </nav>

        {/* Hero Header Institucional */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#E30613]" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E30613] bg-red-50 border border-red-100">
                <ShieldCheck className="w-4 h-4" />
                <span>Transparência e LGPD</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Política de Privacidade
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                Diretrizes de transparência, proteção e tratamento de dados pessoais no site institucional do Grupo Marsol Materiais de Construção (<code>www.grupomarsol.com.br</code>).
              </p>
            </div>
            <div className="text-xs text-neutral-500 bg-neutral-50 px-3.5 py-2 rounded-xl border border-neutral-200 shrink-0 self-stretch sm:self-auto flex sm:flex-col justify-between sm:text-right">
              <span className="font-semibold text-neutral-700">Versão 1.0</span>
              <span className="flex items-center gap-1 sm:justify-end text-neutral-500">
                <Calendar className="w-3 h-3 text-neutral-400" /> Outubro/2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Aviso de Dados Corporativos Pendentes */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 sm:p-6 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <p className="font-bold text-amber-950">
              Nota sobre dados cadastrais da empresa e do Encarregado de Dados (DPO):
            </p>
            <p>
              Os dados formais societários do Grupo Marsol e o canal direto do Encarregado de Proteção de Dados estão assinalados nos campos correspondentes deste documento e devem ser confirmados pela diretoria antes da publicação definitiva em produção:
            </p>
            <p className="font-mono text-xs text-amber-950 bg-amber-100/70 p-2 rounded border border-amber-300/60">
              [Informação pendente de preenchimento pela Marsol antes da publicação oficial: CNPJ, Razão Social, Endereço da Sede, E-mail do Encarregado de Proteção de Dados (DPO)]
            </p>
          </div>
        </div>

        {/* Corpo Textual Estruturado */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm space-y-10 text-neutral-700 text-sm sm:text-base leading-relaxed">

          {/* 1. Apresentação */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              1. Apresentação da Marsol e Finalidade desta Política
            </h2>
            <p>
              O <strong>Grupo Marsol</strong> atua no comércio varejista de materiais de construção, acabamento, hidráulica, elétrica, tintas e ferramentas, com presença estabelecida por meio de 7 (sete) unidades físicas estrategicamente distribuídas em São Luís e região metropolitana (Maranhão).
            </p>
            <p>
              Esta Política de Privacidade tem por objetivo esclarecer de forma clara, objetiva e transparente como realizamos a gestão de informações e a proteção de dados pessoais durante o uso do site institucional <strong>www.grupomarsol.com.br</strong>, em estrita observância à Lei Geral de Proteção de Dados Pessoais (LGPD – Lei Federal nº 13.709/2018), ao Marco Civil da Internet (Lei nº 12.965/2014) e às demais normas aplicáveis.
            </p>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs sm:text-sm text-neutral-600">
              <strong>Identificação do Controlador:</strong><br />
              Razão Social: <em>[Informação pendente de preenchimento pela Marsol antes da publicação oficial: Razão Social da Empresa]</em><br />
              CNPJ: <em>[Informação pendente de preenchimento pela Marsol antes da publicação oficial: CNPJ]</em><br />
              Sede Administrativa: <em>[Informação pendente de preenchimento pela Marsol antes da publicação oficial: Endereço Completo da Sede, São Luís - MA]</em>
            </div>
          </section>

          {/* 2. Quais dados pessoais podem ser coletados */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              2. Quais Dados Pessoais Podem Ser Coletados
            </h2>
            <p>
              A Marsol adota o princípio da <strong>minimização da coleta de dados</strong>. Nosso site possui perfil estritamente institucional, não realizando transações financeiras on-line, nem mantendo áreas de login com senha ou carrinhos de e-commerce.
            </p>
            <p>Os dados tratados podem compreender:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-neutral-700">
              <li>
                <strong>Dados fornecidos voluntariamente no contato:</strong> Nome, número de telefone celular, mensagem de texto ou áudio e especificações de materiais de construção quando o visitante clica no botão de atendimento de uma loja e inicia conversa com nossa equipe no WhatsApp.
              </li>
              <li>
                <strong>Dados de navegação e técnicos:</strong> Endereço IP anonimizado, tipo de navegador, sistema operacional, data e hora da conexão, páginas consultadas e preferências de consentimento (armazenadas localmente no navegador via chave técnica essencial).
              </li>
              <li>
                <strong>Filtro de proximidade por CEP:</strong> Quando o visitante utiliza o localizador de unidades informando os primeiros dígitos do seu CEP ou bairro para descobrir a loja mais próxima, a consulta é realizada de forma computacional para triagem e não é vinculada a cadastro nominal permanente.
              </li>
            </ul>
          </section>

          {/* 3. Como os dados são coletados */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              3. Como os Dados São Coletados
            </h2>
            <p>A coleta de informações ocorre apenas das seguintes formas legítimas:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-1">
                <span className="font-bold text-neutral-900 text-sm">Diretamente pelo Usuário</span>
                <p className="text-xs text-neutral-600">
                  Ao clicar voluntariamente em um dos links oficiais de WhatsApp para atendimento em uma das sete lojas (Araçagy, Alphaville, Santa Rosa, Vila Luizão, São Francisco, Pindaí e Maioba).
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-1">
                <span className="font-bold text-neutral-900 text-sm">Tecnologias de Navegação</span>
                <p className="text-xs text-neutral-600">
                  Através de cookies estritamente necessários para manter a funcionalidade do site, ou cookies opcionais de análise e estatística quando devidamente autorizados.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Finalidades do tratamento */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              4. Para Quais Finalidades os Dados São Utilizados
            </h2>
            <p>Os dados tratados destinam-se exclusivamente às seguintes finalidades legítimas:</p>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#E30613] shrink-0 mt-0.5" />
                <span><strong>Atendimento comercial e cotações:</strong> Responder a dúvidas técnicas sobre materiais de construção, cotação de preços, conferência de estoque físico e suporte pós-venda.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#E30613] shrink-0 mt-0.5" />
                <span><strong>Direcionamento logístico:</strong> Indicar a unidade física mais conveniente para o cliente em São Luís e região metropolitana.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#E30613] shrink-0 mt-0.5" />
                <span><strong>Segurança e integridade técnica:</strong> Proteger o site institucional contra ataques cibernéticos, fraudes, spams e indisponibilidades.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#E30613] shrink-0 mt-0.5" />
                <span><strong>Aprimoramento contínuo:</strong> Compreender a usabilidade da página e melhorar a experiência de navegação do usuário.</span>
              </li>
            </ul>
          </section>

          {/* 5. Bases legais */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              5. Bases Legais Aplicáveis ao Tratamento de Dados
            </h2>
            <p>
              Todo e qualquer tratamento de dados pessoais realizado pela Marsol está fundamentado em uma das hipóteses legais previstas no Artigo 7º da LGPD:
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <strong>Procedimentos pré-contratuais (Art. 7º, V):</strong> Aplica-se ao atendimento e elaboração de orçamentos solicitados ativamente pelo cliente através dos canais de WhatsApp das lojas.
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <strong>Consentimento (Art. 7º, I):</strong> Aplica-se à aceitação de cookies opcionais de análise estatística ou marketing no banner de consentimento do site.
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <strong>Legítimo Interesse (Art. 7º, IX):</strong> Aplica-se à geração de métricas agregadas anônimas e aperfeiçoamento da estabilidade do portal institucional.
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <strong>Cumprimento de obrigação legal (Art. 7º, II):</strong> Manutenção de registros de conexão exigidos pelo Marco Civil da Internet (Art. 15 da Lei 12.965/2014).
              </div>
            </div>
          </section>

          {/* 6. Compartilhamento de dados */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              6. Compartilhamento de Dados com Fornecedores e Prestadores de Serviços
            </h2>
            <p>
              A Marsol <strong>não vende, não aluga e não comercializa</strong> dados pessoais ou listas de contatos com terceiros para quaisquer finalidades publicitárias ou econômicas.
            </p>
            <p>O compartilhamento estritamente necessário ocorre apenas com:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-neutral-700">
              <li><strong>Provedores de infraestrutura e hospedagem:</strong> Empresas de tecnologia que sustentam os servidores onde o site é executado com padrões modernos de criptografia.</li>
              <li><strong>Plataformas de comunicação (WhatsApp / Meta):</strong> Quando o usuário opta por iniciar conversa com os atendentes das lojas.</li>
              <li><strong>Autoridades judiciais ou regulatórias:</strong> Exclusivamente mediante ordem judicial fundamentada ou exigência legal expressa.</li>
            </ul>
          </section>

          {/* 7. Serviços externos: WhatsApp e Google Maps */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              7. Utilização de Serviços Externos (WhatsApp e Google Maps)
            </h2>
            <p>
              Para oferecer comodidade e praticidade aos clientes, o site da Marsol contém links diretos que interagem com plataformas mantidas por terceiros:
            </p>
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70">
                <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm mb-1">
                  <span>WhatsApp (Meta Platforms Inc.)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Ao clicar em &quot;Falar no WhatsApp&quot;, você será transferido para a interface do aplicativo WhatsApp. A comunicação enviada a partir desse momento passa a ser regida também pelos termos de serviço e pela política de privacidade da Meta, com criptografia de ponta a ponta.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70">
                <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm mb-1">
                  <span>Google Maps (Google LLC)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Ao clicar em &quot;Como chegar&quot; em qualquer uma das nossas unidades, você será direcionado ao Google Maps para traçar rotas e obter direções de trânsito. O tratamento da sua localização geográfica nessa plataforma é regulado pelas diretrizes de privacidade do Google.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Armazenamento, segurança e conservação */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              8. Armazenamento, Segurança e Conservação dos Dados
            </h2>
            <p>
              A Marsol adota medidas técnicas, organizacionais e administrativas para proteger os dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração ou vazamento.
            </p>
            <p>Entre as salvaguardas implementadas destacam-se:</p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700">
              <li>Protocolo seguro HTTPS (TLS/SSL) em todas as páginas do domínio <code>www.grupomarsol.com.br</code>;</li>
              <li>Acesso restrito e autenticado aos canais de atendimento das lojas;</li>
              <li>Retenção de registros técnicos estritamente pelos prazos legalmente determinados no Marco Civil da Internet (6 meses).</li>
            </ul>
          </section>

          {/* 9. Direitos dos titulares */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              9. Direitos dos Titulares de Dados Pessoais (Art. 18 da LGPD)
            </h2>
            <p>
              Você, como titular de dados pessoais, tem o direito de obter da Marsol, a qualquer momento e mediante requisição facilitada:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                <strong>Confirmação e Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados.
              </div>
              <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                <strong>Correção:</strong> Solicitar a retificação de dados incompletos, inexatos ou desatualizados.
              </div>
              <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                <strong>Anonimização ou Eliminação:</strong> Requerer o bloqueio ou exclusão de dados desnecessários ou tratados em desconformidade.
              </div>
              <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                <strong>Revogação do Consentimento:</strong> Revogar autorizações concedidas a qualquer momento de forma simples e gratuita.
              </div>
            </div>
          </section>

          {/* 10. Canal DPO */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              10. Canal de Atendimento e Encarregado de Proteção de Dados (DPO)
            </h2>
            <p>
              Para exercer quaisquer de seus direitos de titular, solicitar esclarecimentos ou apresentar sugestões sobre o tratamento de dados pessoais pela Marsol, entre em contato diretamente com o nosso Encarregado de Proteção de Dados (DPO):
            </p>
            <div className="p-5 rounded-2xl bg-neutral-100 border border-neutral-200/90 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-neutral-900 font-bold">
                <Mail className="w-4 h-4 text-[#E30613]" />
                <span>Encarregado pelo Tratamento de Dados Pessoais (DPO):</span>
              </div>
              <p className="text-neutral-700">
                Nome: <em>[Informação pendente de preenchimento pela Marsol antes da publicação oficial: Nome do DPO / Encarregado]</em>
              </p>
              <p className="text-neutral-700">
                Canal Oficial de Privacidade: <strong>contato@grupomarsol.com.br</strong> / <em>[Informação pendente: dpo@grupomarsol.com.br ou canal específico]</em>
              </p>
              <p className="text-neutral-500 text-xs">
                Prazo legal de resposta em conformidade com as diretrizes da Autoridade Nacional de Proteção de Dados (ANPD).
              </p>
            </div>
          </section>

          {/* 11. Transferência internacional */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              11. Transferência Internacional de Dados
            </h2>
            <p>
              Alguns dos serviços terceirizados utilizados para suporte à comunicação e hospedagem de infraestrutura (como WhatsApp e servidores de nuvem de padrão global) podem realizar o processamento de informações em centros de dados localizados fora do território nacional.
            </p>
            <p>
              Nesses casos, a Marsol assegura que tais prestadores de serviço cumprem exigências legais com salvaguardas de conformidade equivalentes à legislação brasileira e aos padrões internacionais de segurança.
            </p>
          </section>

          {/* 12. Alterações desta política */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              12. Alterações e Atualizações Desta Política
            </h2>
            <p>
              A Marsol reserva-se o direito de atualizar esta Política de Privacidade periodicamente para refletir melhorias contínuas em seus processos internos, novas funcionalidades ou eventuais alterações regulatórias estabelecidas pela ANPD.
            </p>
            <p>
              A data da última revisão constará sempre no topo desta página. Recomendamos consultas regulares para manter-se informado.
            </p>
          </section>

          {/* 13. Foro e Legislação */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              13. Legislação Aplicável e Foro
            </h2>
            <p>
              Este documento é regido e interpretado segundo a legislação da República Federativa do Brasil, em especial a Lei nº 13.709/2018 (LGPD).
            </p>
            <p>
              Fica eleito o Foro da Comarca de <strong>São Luís, Estado do Maranhão</strong>, para dirimir eventuais controvérsias oriundas desta política, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>
        </div>

        {/* Botão de retorno e links complementares */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <button
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#E30613] hover:bg-[#C50510] transition-colors cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à página inicial</span>
          </button>

          <button
            onClick={() => onNavigate('/politica-de-cookies')}
            className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-[#E30613] hover:underline cursor-pointer"
          >
            Consultar a Política de Cookies &rarr;
          </button>
        </div>
      </article>
    </div>
  );
};
