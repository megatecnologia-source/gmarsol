import React from 'react';
import { ArrowLeft, Cookie, Settings, ShieldCheck, CheckCircle2, Sliders, ExternalLink, RefreshCw } from 'lucide-react';
import { openCookiePreferencesModal } from '../utils/cookieConsent';

interface CookiePolicyPageProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-neutral-50 min-h-screen">
      {/* Breadcrumb */}
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
          <span className="text-neutral-800 font-semibold">Política de Cookies</span>
        </nav>

        {/* Hero Header Institucional */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#E30613]" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E30613] bg-red-50 border border-red-100">
                <Cookie className="w-4 h-4" />
                <span>Gestão de Privacidade</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Política de Cookies
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                Entenda como e por que utilizamos cookies no portal do Grupo Marsol Materiais de Construção (<code>www.grupomarsol.com.br</code>) e como você pode gerenciar suas preferências com total autonomia.
              </p>
            </div>

            <button
              onClick={() => openCookiePreferencesModal()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm shrink-0 cursor-pointer self-stretch sm:self-auto justify-center"
            >
              <Settings className="w-4 h-4 text-neutral-900" />
              <span>Gerenciar Cookies</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm space-y-10 text-neutral-700 text-sm sm:text-base leading-relaxed">

          {/* 1. O que são cookies */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              1. O que São Cookies e Tecnologias Semelhantes
            </h2>
            <p>
              Cookies são pequenos arquivos de texto transferidos para o navegador de internet do usuário quando ele visita uma página na web. Eles permitem que o site reconheça o dispositivo do visitante, memorize preferências (como sua unidade favorita ou seu aceite de privacidade) e garanta a correta execução de recursos essenciais.
            </p>
            <p>
              Além de cookies tradicionais, tecnologias semelhantes incluem o armazenamento local (<code>localStorage</code> e <code>sessionStorage</code>), que operam diretamente na memória do seu navegador para guardar configurações de forma segura e rápida, sem envio desnecessário de dados a servidores remotos.
            </p>
          </section>

          {/* 2. Como a Marsol utiliza cookies */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              2. Como a Marsol Utiliza Cookies
            </h2>
            <p>
              No site institucional do <strong>Grupo Marsol</strong>, utilizamos cookies com objetivos estritamente focados na conveniência, segurança e transparência:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-neutral-700">
              <li>Garantir a estabilidade da navegação e carregamento ágil das informações sobre produtos e lojas;</li>
              <li>Armazenar localmente a sua escolha sobre consentimento de privacidade para que o aviso não seja exibido repetidamente a cada clique;</li>
              <li>Permitir o cálculo de proximidade por CEP para indicar a unidade física mais próxima de forma dinâmica;</li>
              <li>Apurar métricas estatísticas anônimas de navegação (somente quando autorizadas pelo usuário).</li>
            </ul>
          </section>

          {/* 3. Categorias de cookies */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              3. Categorias de Cookies (Estritamente Necessários vs. Opcionais)
            </h2>
            <p>
              Classificamos as tecnologias de armazenamento do site em três categorias bem delimitadas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex flex-col justify-between space-y-2">
                <div>
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 mb-2">
                    Obrigatório
                  </div>
                  <h3 className="font-bold text-neutral-900 text-sm">Estritamente Necessários</h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    Essenciais para a segurança, carregamento e memorização do consentimento.
                  </p>
                </div>
                <span className="text-[11px] text-neutral-500 font-medium">Sempre ativos</span>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex flex-col justify-between space-y-2">
                <div>
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 mb-2">
                    Opcional
                  </div>
                  <h3 className="font-bold text-neutral-900 text-sm">Estatísticas e Desempenho</h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    Medem visitas e páginas mais acessadas de forma anônima e agregada.
                  </p>
                </div>
                <span className="text-[11px] text-neutral-500 font-medium">Desativado por padrão</span>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex flex-col justify-between space-y-2">
                <div>
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider text-neutral-800 bg-neutral-200 mb-2">
                    Opcional
                  </div>
                  <h3 className="font-bold text-neutral-900 text-sm">Publicidade e Marketing</h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    Avaliação de campanhas institucionais e integração com redes sociais.
                  </p>
                </div>
                <span className="text-[11px] text-neutral-500 font-medium">Desativado por padrão</span>
              </div>
            </div>
          </section>

          {/* 4. Cookies Estritamente Necessários */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              4. Cookies Estritamente Necessários e Preferências Técnicas
            </h2>
            <p>
              Estes identificadores técnicos não podem ser desabilitados em nossos sistemas, pois sem eles o website não funcionaria de modo estável e seguro. Eles não coletam informações para perfis de consumo nem para direcionamento de anúncios.
            </p>
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-xs sm:text-sm text-left border-collapse border border-neutral-200">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-800 font-bold">
                    <th className="p-3 border border-neutral-200">Identificador</th>
                    <th className="p-3 border border-neutral-200">Tipo</th>
                    <th className="p-3 border border-neutral-200">Duração</th>
                    <th className="p-3 border border-neutral-200">Finalidade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="p-3 font-mono text-neutral-900 font-semibold border border-neutral-200">marsol_cookie_consent</td>
                    <td className="p-3 border border-neutral-200">Armazenamento Local (localStorage)</td>
                    <td className="p-3 border border-neutral-200">Persistente (até limpeza manual pelo usuário)</td>
                    <td className="p-3 border border-neutral-200">Registra a opção de consentimento manifestada pelo visitante (necessários, todos ou customizados).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-neutral-900 font-semibold border border-neutral-200">sessao_navegacao</td>
                    <td className="p-3 border border-neutral-200">Sessão Técnica</td>
                    <td className="p-3 border border-neutral-200">Término da sessão do navegador</td>
                    <td className="p-3 border border-neutral-200">Preserva o estado temporário da interface e previne reenvios acidentais.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Cookies de estatísticas */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              5. Cookies de Desempenho e Estatísticas (Analytics)
            </h2>
            <p>
              Ajudam a Marsol a entender como os visitantes interagem com o site, apontando quais seções (como as unidades de São Luís, categorias de pisos ou materiais básicos) despertam maior interesse.
            </p>
            <p>
              <strong>Regra de Consentimento:</strong> Estes cookies permanecem bloqueados e inativos até que você clique expressamente em &quot;Aceitar opcionais&quot; ou os habilite na Central de Preferências. Caso opte por recusá-los, nenhuma métrica individual será gravada.
            </p>
          </section>

          {/* 6. Cookies de publicidade */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              6. Cookies de Publicidade e Redes Sociais
            </h2>
            <p>
              Eventualmente utilizados para mensurar o alcance de campanhas institucionais ou facilitar o compartilhamento de conteúdos com perfis oficiais da Marsol nas redes sociais (Instagram e Facebook).
            </p>
            <p>
              A Marsol <strong>não realiza comercialização de publicidade programática</strong> de terceiros em suas páginas. Essa categoria também permanece bloqueada até obtenção de prévia autorização.
            </p>
          </section>

          {/* 7. Terceiros e integrações */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              7. Cookies de Terceiros e Integrações Externas (WhatsApp e Google Maps)
            </h2>
            <p>
              Ao utilizar os recursos de interação com aplicativos terceiros disponibilizados no site:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>
                <strong>WhatsApp (Meta):</strong> Ao clicar no link de atendimento de qualquer uma das lojas, uma nova aba ou o aplicativo nativo é acionado. A tecnologia de cookies da Meta passa a vigorar em seu domínio próprio.
              </li>
              <li>
                <strong>Google Maps:</strong> Ao traçar uma rota para as lojas Araçagy, Alphaville, Santa Rosa, Vila Luizão, São Francisco, Pindaí ou Maioba, você é redirecionado para o serviço do Google, que poderá aplicar suas próprias políticas e cookies de geolocalização.
              </li>
            </ul>
          </section>

          {/* 8. Como gerenciar e revogar */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              8. Como Gerenciar e Revogar seu Consentimento
            </h2>
            <p>
              Você pode alterar sua decisão ou revogar seu consentimento para os cookies opcionais a qualquer momento. Você não precisa apagar o histórico do navegador para isso: disponibilizamos um botão direto logo abaixo e em todas as páginas, no rodapé oficial do site:
            </p>

            <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-bold text-neutral-900 text-sm sm:text-base block">
                  Central de Preferências de Cookies da Marsol
                </span>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Clique para visualizar o status atual, ativar ou desativar categorias opcionais imediatamente.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openCookiePreferencesModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E30613] hover:bg-[#C50510] shadow-sm transition-colors cursor-pointer shrink-0"
              >
                <Sliders className="w-4 h-4 text-white" />
                <span>Abrir Preferências de Cookies</span>
              </button>
            </div>
          </section>

          {/* 9. Configurações do navegador */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              9. Gerenciamento Através das Configurações do Navegador
            </h2>
            <p>
              Além das ferramentas oferecidas neste site, você também pode configurar ou bloquear cookies diretamente no seu navegador. Consulte os tutoriais oficiais dos desenvolvedores mais comuns:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors flex items-center justify-between font-medium text-neutral-800"
              >
                <span>Google Chrome</span>
                <ExternalLink className="w-4 h-4 text-neutral-400" />
              </a>
              <a
                href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-do-site"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors flex items-center justify-between font-medium text-neutral-800"
              >
                <span>Mozilla Firefox</span>
                <ExternalLink className="w-4 h-4 text-neutral-400" />
              </a>
              <a
                href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors flex items-center justify-between font-medium text-neutral-800"
              >
                <span>Microsoft Edge</span>
                <ExternalLink className="w-4 h-4 text-neutral-400" />
              </a>
              <a
                href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors flex items-center justify-between font-medium text-neutral-800"
              >
                <span>Apple Safari</span>
                <ExternalLink className="w-4 h-4 text-neutral-400" />
              </a>
            </div>
            <p className="text-xs text-neutral-500 pt-1">
              Observação: a desativação generalizada de todos os cookies no navegador pode afetar a exibição correta de elementos gráficos e a usabilidade de recursos dinâmicos.
            </p>
          </section>

          {/* 10. Atualizações desta política */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 pb-2 border-b border-neutral-200">
              10. Atualizações Desta Política de Cookies
            </h2>
            <p>
              O <strong>Grupo Marsol</strong> poderá revisar esta Política de Cookies para alinhamento com novas exigências legais ou implementação de aprimoramentos técnicos no website.
            </p>
            <p>
              Qualquer alteração significativa que afete as categorias de cookies ou a forma de tratamento do consentimento será devidamente refletida nesta página e comunicada com transparência aos usuários.
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
            onClick={() => onNavigate('/politica-de-privacidade')}
            className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-[#E30613] hover:underline cursor-pointer"
          >
            Consultar a Política de Privacidade &rarr;
          </button>
        </div>
      </article>
    </div>
  );
};
