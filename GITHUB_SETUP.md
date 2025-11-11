# 📤 Instruções para Subir o Projeto no GitHub

## Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha as informações:
   - **Repository name:** `personalized-link-hub`
   - **Description:** "Hub de links personalizado com design clean inspirado na Apple"
   - **Visibility:** Public ou Private (sua escolha)
   - ⚠️ **NÃO** marque "Initialize this repository with a README"
5. Clique em **"Create repository"**

## Passo 2: Conectar o Repositório Local ao GitHub

Após criar o repositório, o GitHub mostrará instruções. Use os comandos abaixo no terminal:

```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/SEU-USUARIO/personalized-link-hub.git

# Renomear a branch para main (se necessário)
git branch -M main

# Fazer push do código
git push -u origin main
```

**Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!**

## Passo 3: Verificar o Upload

1. Atualize a página do seu repositório no GitHub
2. Você deve ver todos os arquivos do projeto
3. O README.md será exibido automaticamente na página inicial

## Passo 4: Configurar GitHub Pages (Opcional)

Para hospedar o site gratuitamente no GitHub Pages:

1. No repositório, vá em **Settings** > **Pages**
2. Em **Source**, selecione **"GitHub Actions"**
3. Crie um arquivo `.github/workflows/deploy.yml` com o conteúdo abaixo

### Arquivo de Deploy Automático

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          VITE_WHATSAPP_NUMBER: ${{ secrets.VITE_WHATSAPP_NUMBER }}
          VITE_EMAIL: ${{ secrets.VITE_EMAIL }}
          VITE_LINKEDIN_URL: ${{ secrets.VITE_LINKEDIN_URL }}
          VITE_YOUTUBE_URL: ${{ secrets.VITE_YOUTUBE_URL }}
          VITE_DX_TECH_URL: ${{ secrets.VITE_DX_TECH_URL }}
          VITE_FRAME_TO_MONEY_URL: ${{ secrets.VITE_FRAME_TO_MONEY_URL }}
          VITE_PROFILE_NAME: ${{ secrets.VITE_PROFILE_NAME }}
          VITE_PROFILE_TITLE: ${{ secrets.VITE_PROFILE_TITLE }}
          VITE_HERO_VIDEO_URL: ${{ secrets.VITE_HERO_VIDEO_URL }}
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Configurar Secrets no GitHub

Para que as variáveis de ambiente funcionem no deploy:

1. Vá em **Settings** > **Secrets and variables** > **Actions**
2. Clique em **"New repository secret"**
3. Adicione cada variável do arquivo `.env`:
   - `VITE_WHATSAPP_NUMBER`
   - `VITE_EMAIL`
   - `VITE_LINKEDIN_URL`
   - `VITE_YOUTUBE_URL`
   - `VITE_DX_TECH_URL`
   - `VITE_FRAME_TO_MONEY_URL`
   - `VITE_PROFILE_NAME`
   - `VITE_PROFILE_TITLE`
   - `VITE_HERO_VIDEO_URL`

## Passo 5: Atualizar vite.config.ts para GitHub Pages

Se for usar GitHub Pages, atualize o `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/personalized-link-hub/', // Nome do seu repositório
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## Comandos Úteis do Git

```bash
# Ver status dos arquivos
git status

# Adicionar alterações
git add .

# Fazer commit
git commit -m "Sua mensagem"

# Enviar para o GitHub
git push

# Ver histórico de commits
git log --oneline

# Criar uma nova branch
git checkout -b nome-da-branch

# Voltar para a branch main
git checkout main
```

## 🎉 Pronto!

Seu projeto está agora no GitHub e pronto para ser compartilhado!

### Links Úteis:
- 📚 [Documentação do GitHub](https://docs.github.com)
- 🚀 [GitHub Pages](https://pages.github.com)
- 📖 [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Dica:** Mantenha o arquivo `.env` sempre no `.gitignore` para não expor informações sensíveis!
