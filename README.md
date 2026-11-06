# Grupo Marsol — Website Institucional Oficial

> Website institucional One Page oficial do **Grupo Marsol - Materiais de Construção** em São Luís - MA.  
> Conheça as 7 lojas, linhas completas de produtos (do básico ao acabamento), marcas homologadas e canais diretos de atendimento via WhatsApp.

Desenvolvido com excelência por **[Bydo Marketing](https://www.bydomarketing.com.br/)**.

---

## 🚀 Tecnologias e Arquitetura

- **React 19** — Renderização declarativa e componentização moderna.
- **TypeScript** — Tipagem estática rigorosa para estabilidade e manutenibilidade.
- **Vite** — Build tool ultrarrápido com empacotamento otimizado.
- **Tailwind CSS v4** — Design system utilitário com performance de build instantânea.
- **Lucide React** — Iconografia moderna e consistente.
- **Intersection Observer & A11y** — Revelação progressiva de elementos e suporte nativo a `prefers-reduced-motion`.
- **LGPD & Cookies** — Gerenciador de consentimento de cookies e páginas dedicadas de privacidade em conformidade com a legislação brasileira.

---

## 📁 Estrutura do Projeto

```text
grupo-marsol/
├── public/
│   ├── assets/
│   │   └── marsol/          # Fotografias reais das 7 lojas, logotipos e mídias
│   └── .htaccess            # Regras Apache/LiteSpeed para SPA na Hostinger
├── src/
│   ├── assets/              # Assets internos
│   ├── components/          # Componentes modulares da interface
│   ├── data/                # Bases tipadas (lojas, marcas, categorias, diferenciais)
│   ├── utils/               # Helpers (consentimento de cookies, observer de animação)
│   ├── App.tsx              # Componente raiz com roteador e sincronia SEO
│   ├── index.css            # Estilos globais e tokens Tailwind
│   └── main.tsx             # Ponto de montagem da aplicação
├── .github/
│   └── workflows/
│       └── deploy.yml       # Deploy contínuo automático para a Hostinger via GitHub Actions
├── index.html               # Documento principal com Metatags, OpenGraph e Schema.org
├── package.json             # Dependências e scripts de automação
├── tsconfig.json            # Configuração do TypeScript
└── vite.config.ts           # Configuração de build e plugins Vite
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 20 ou superior recomendada)
- **npm** (versão 10 ou superior)

### Passo a Passo

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:3000`

3. **Verificação de tipagem (Lint):**
   ```bash
   npm run lint
   ```

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```
   Os arquivos finais otimizados serão gerados na pasta `dist/`.

---

## 🌐 Arquitetura de Branches & Deploy na Hostinger

Este projeto adota o modelo profissional de **duas branches**:

1. **`main` (Desenvolvimento & Código-fonte):**
   - Contém todos os arquivos fonte (`src/`, `package.json`, `vite.config.ts`, etc.).
   - É nela que você trabalha e faz seus commits.

2. **`deploy` (Produção & Hostinger):**
   - Contém **estritamente os arquivos finais compilados** da pasta `dist/` (`index.html`, `.htaccess` e pasta `assets/`).
   - É a branch conectada diretamente na Hostinger (`public_html`).
   - **Atualizada automaticamente pelo GitHub Actions** a cada push na `main`.

---

### 🚀 Como funciona o fluxo automático (Push -> Build -> Deploy)

1. Você faz um commit e envia para o GitHub na branch `main`:
   ```bash
   git push origin main
   ```
2. O **GitHub Actions** (`.github/workflows/deploy.yml`) roda automaticamente:
   - Instala as dependências e valida a tipagem.
   - Executa o `npm run build` gerando a pasta `dist/` com o `.htaccess`.
   - Faz o push dos arquivos compilados diretamente para a branch **`deploy`**.
3. O **Webhook da Hostinger** detecta a atualização na branch `deploy` e faz o pull automático para a pasta `public_html` da sua hospedagem.
4. O site atualizado entra no ar em poucos segundos!

---

### ⚙️ Como conectar na Hostinger (Passo a Passo)

1. No **hPanel da Hostinger**, acesse **Avançado** > **Git**.
2. Preencha as configurações:
   - **Repositório:** `https://github.com/megatecnologia-source/gmarsol.git`
   - **Branch:** `deploy`
   - **Diretório de instalação:** `public_html`
3. Clique em **Criar / Conectar**.
4. Copie a URL do **Webhook** fornecida pela Hostinger.
5. No GitHub, acesse **Settings** > **Webhooks** > **Add webhook**:
   - Cole a URL do Webhook da Hostinger no campo **Payload URL**.
   - Content type: `application/json`.
   - Eventos: "Just the push event".
   - Salve o webhook.
6. Pronto! A partir de agora, todo commit na `main` atualiza o site na Hostinger automaticamente.

---

## 🏢 Créditos e Desenvolvimento

- **Cliente:** Grupo Marsol — Materiais de Construção
- **Desenvolvimento e Performance:** [Bydo Marketing](https://www.bydomarketing.com.br/)
- **Ano:** 2026
