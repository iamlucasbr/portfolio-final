# Portfolio Profissional (iamlucasdev.com)

Este repositório contém o código-fonte do meu portfolio pessoal e profissional, desenvolvido com Next.js (App Router) e Tailwind CSS.

## 🚀 Visão Geral do Projeto

O objetivo principal deste projeto é apresentar minhas habilidades, experiências e projetos de forma moderna e responsiva.

### Tecnologias Utilizadas

* **Framework:** Next.js 14 (Static Export)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS

---

## 🛠️ Configuração e Deploy (CI/CD)

O deploy deste projeto é totalmente automatizado através do GitHub Actions para o servidor Hostinger.

### 1. Build Estático (Next.js)

Para que o Next.js funcione em um ambiente de hospedagem estática (como a Hostinger), ele é configurado para gerar todos os arquivos HTML, CSS e JavaScript na pasta `out/`.

* **Arquivo de Configuração:** `next.config.js`
    A linha `output: 'export'` é usada no servidor para garantir a exportação estática.

### 2. Fluxo de Deploy (GitHub Actions)

O arquivo de fluxo de trabalho (`.github/workflows/deploy.yml`) executa os seguintes passos após cada `git push` para a branch `main`:

| Etapa | Ação | Propósito |
| :--- | :--- | :--- |
| **Build & Export** | `npm run build` | Cria todos os arquivos estáticos dentro da pasta `out/`. |
| **Deploy** | `appleboy/ftp-deploy@v3` | Transfere os arquivos de `out/` para o servidor FTP. |

### 3. Credenciais de FTP (Secrets)

As credenciais do servidor são armazenadas de forma segura no GitHub Secrets (Configurações > Secrets > Actions):

* `FTP_SERVER` (Host da Hostinger)
* `FTP_USERNAME` (Usuário `u99790...`)
* `FTP_PASSWORD`

---

## 💻 Uso Local

Para rodar o projeto localmente:

1.  Clone o repositório.
2.  Instale as dependências: `npm install`
3.  Inicie o servidor de desenvolvimento: `npm run dev`