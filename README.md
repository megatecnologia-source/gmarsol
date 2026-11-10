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

## 🌐 Deploy na Hostinger (Build Automático & CI/CD)

O projeto está configurado para deploy imediato na Hostinger via integração com o GitHub:

### Opção A: Hostinger Web Apps / Node.js (Recomendada — Build Nativo)
A Hostinger executa o build automaticamente a cada novo commit enviado para a branch `main`:

* **Branch:** `main`
* **Comando de Build (Build Command):** `npm run build`
* **Diretório de Saída (Output Directory):** `dist`
* **Comando de Instalação (Install Command):** `npm ci`
* **Versão do Node.js:** `>= 20.0.0` (definida no `package.json`)

---

### Opção B: Hostinger Git Tradicional (Apache / LiteSpeed)
Se você estiver utilizando a ferramenta clássica de Git do hPanel (`Avançado > Git`), conecte na branch **`deploy`** (que contém exclusivamente a pasta `dist/` compilada com `.htaccess` na raiz).

---

### 🚀 Fluxo de Publicação Contínua

1. Você commita e envia suas alterações para a branch `main`:
   ```bash
   git push origin main
   ```
2. O **GitHub Actions** valida a tipagem (`npm run lint`), compila o projeto e sincroniza a branch `deploy`.
3. A **Hostinger** detecta o novo commit na `main` e publica a versão em produção automaticamente!

---

## 🏢 Créditos e Desenvolvimento

- **Cliente:** Grupo Marsol — Materiais de Construção
- **Desenvolvimento e Performance:** [Bydo Marketing](https://www.bydomarketing.com.br/)
- **Ano:** 2026
