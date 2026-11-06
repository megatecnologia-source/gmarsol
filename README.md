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

## 🌐 Hospedagem na Hostinger & Deploy Automático via GitHub

Este projeto já está configurado para publicação na **Hostinger** com sincronização automática a cada novo `git push` na branch principal (`main`).

### 1. Suporte a SPA (Single Page Application)
O arquivo `public/.htaccess` garante que o servidor LiteSpeed/Apache da Hostinger redirecione rotas como `/politica-de-privacidade` e `/politica-de-cookies` para o `index.html` sem gerar erro 404, além de aplicar compressão e cache estático para ativos da pasta `/assets/`.

### 2. Fluxo de Atualização Automática
Configurado através do workflow `.github/workflows/deploy.yml`:
1. Você envia um commit para o repositório no GitHub (`git push origin main`).
2. O GitHub Actions executa automaticamente o build da aplicação (`npm run build`).
3. Os arquivos compilados de `dist/` são transferidos via FTPS/FTP seguro diretamente para a pasta `public_html` da sua hospedagem na Hostinger.
4. O site entra no ar atualizado imediatamente, sem necessidade de deploy manual.

---

## 🏢 Créditos e Desenvolvimento

- **Cliente:** Grupo Marsol — Materiais de Construção
- **Desenvolvimento e Performance:** [Bydo Marketing](https://www.bydomarketing.com.br/)
- **Ano:** 2026
