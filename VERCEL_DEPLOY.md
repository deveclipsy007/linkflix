# 🚀 Deploy na Vercel - Guia Completo

## Pré-requisitos

- ✅ Conta no GitHub
- ✅ Conta na Vercel (gratuita)
- ✅ Código commitado no Git

## 📋 Checklist Antes do Deploy

- [x] `.env` no `.gitignore` ✅
- [x] `vercel.json` configurado ✅
- [x] `vite.config.ts` com `outDir: 'dist'` ✅
- [x] Scripts de build no `package.json` ✅
- [x] Variáveis de ambiente documentadas ✅

## 🎯 Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Subir o Código no GitHub

```bash
# Se ainda não subiu, execute:
git remote add origin https://github.com/SEU-USUARIO/personalized-link-hub.git
git branch -M main
git push -u origin main
```

### Passo 2: Importar Projeto na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta do GitHub
3. Clique em **"Add New..."** > **"Project"**
4. Selecione o repositório `personalized-link-hub`
5. Clique em **"Import"**

### Passo 3: Configurar o Projeto

A Vercel detectará automaticamente que é um projeto Vite. Verifique as configurações:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Não clique em Deploy ainda!** Primeiro configure as variáveis de ambiente.

### Passo 4: Adicionar Variáveis de Ambiente

1. Na página de configuração, clique em **"Environment Variables"**
2. Adicione cada variável do seu arquivo `.env`:

```env
VITE_WHATSAPP_NUMBER=+5562998550007
VITE_EMAIL=yohann@example.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/yohann-escher-melo-95a6b1201/
VITE_YOUTUBE_URL=https://www.youtube.com/@Yohannescher
VITE_DX_TECH_URL=https://www.dxtechsolutions.com.br/
VITE_FRAME_TO_MONEY_URL=https://frametomoney.com
VITE_PROFILE_NAME=Yohann
VITE_PROFILE_TITLE=Desenvolvedor & Empreendedor
VITE_HERO_VIDEO_URL=https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4
```

**Importante:** Selecione todos os ambientes (Production, Preview, Development)

### Passo 5: Deploy!

1. Clique em **"Deploy"**
2. Aguarde o build (geralmente 1-3 minutos)
3. ✅ Seu site estará no ar!

### Passo 6: Configurar Domínio Personalizado (Opcional)

1. No dashboard do projeto, vá em **"Settings"** > **"Domains"**
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções da Vercel

## 🎯 Método 2: Deploy via CLI Vercel

### Instalar Vercel CLI

```bash
npm install -g vercel
```

### Fazer Login

```bash
vercel login
```

### Deploy

```bash
# Na pasta do projeto
vercel

# Para production
vercel --prod
```

### Adicionar Variáveis de Ambiente via CLI

```bash
vercel env add VITE_WHATSAPP_NUMBER
# Cole o valor quando solicitado
# Repita para cada variável
```

## 🔄 Atualizações Automáticas

Após o primeiro deploy, a Vercel criará deploys automáticos:

- **Push na branch `main`** → Deploy em Production
- **Push em outras branches** → Deploy de Preview
- **Pull Requests** → Deploy de Preview com URL única

## 🛠️ Comandos Úteis

```bash
# Testar build localmente antes do deploy
npm run build
npm run preview

# Ver logs do deploy
vercel logs

# Listar seus projetos
vercel list

# Ver domínios configurados
vercel domains ls

# Remover projeto
vercel remove personalized-link-hub
```

## 🔍 Verificar Build Local

Antes de fazer deploy, teste localmente:

```bash
# Instalar dependências
npm install

# Build de produção
npm run build

# Testar o build
npm run preview
```

Se abrir sem erros em `http://localhost:4173`, está pronto para deploy!

## 🐛 Troubleshooting

### Erro: "Build failed"

**Solução:**
1. Verifique se todas as dependências estão no `package.json`
2. Teste o build local: `npm run build`
3. Verifique os logs na Vercel

### Erro: "Environment variables not working"

**Solução:**
1. Certifique-se que as variáveis começam com `VITE_`
2. Verifique se adicionou em todos os ambientes (Production, Preview, Development)
3. Faça um novo deploy após adicionar variáveis

### Erro: "404 on page refresh"

**Solução:**
O `vercel.json` já está configurado com rewrites. Se ainda ocorrer:
1. Verifique se o `vercel.json` está na raiz do projeto
2. Faça um novo deploy

### Erro: "Module not found"

**Solução:**
1. Delete `node_modules` e `package-lock.json`
2. Execute `npm install`
3. Commit e push novamente

### Build muito lento

**Solução:**
1. Verifique se não está importando bibliotecas desnecessárias
2. Use imports dinâmicos para páginas grandes
3. Considere usar `vite-plugin-compression`

## 📊 Monitoramento

Após o deploy, a Vercel oferece:

- 📈 **Analytics** - Visualizações e performance
- 🔍 **Logs** - Logs de build e runtime
- 🚀 **Speed Insights** - Métricas de velocidade
- 🎯 **Web Vitals** - Core Web Vitals

Acesse em: `vercel.com/seu-usuario/personalized-link-hub`

## 🎨 URLs do Projeto

Após o deploy, você terá:

- **Production:** `personalized-link-hub.vercel.app`
- **Preview (branches):** `personalized-link-hub-git-branch.vercel.app`
- **Domínio personalizado:** `seu-dominio.com` (se configurado)

## 🔐 Segurança

✅ **Já implementado:**
- Variáveis de ambiente protegidas
- `.env` no `.gitignore`
- HTTPS automático
- Headers de segurança da Vercel

## 💡 Dicas Pro

1. **Use Preview Deploys:** Teste mudanças em branches antes de mergear
2. **Configure Notifications:** Receba alertas de deploy no Slack/Discord
3. **Analytics:** Ative Vercel Analytics para insights de usuários
4. **Edge Functions:** Para funcionalidades serverless (se necessário)
5. **Domínio Personalizado:** Mais profissional que `.vercel.app`

## 📱 Testar em Dispositivos

Após o deploy, teste em:
- 📱 Mobile (iOS e Android)
- 💻 Desktop (Chrome, Firefox, Safari)
- 🖥️ Tablet

Use o Vercel Preview para compartilhar com outras pessoas antes de ir para produção.

## 🎉 Pronto!

Seu site está no ar! 🚀

**URL do seu projeto:** `https://personalized-link-hub.vercel.app`

### Próximos Passos:

1. ✅ Compartilhe o link
2. 📊 Configure Analytics
3. 🎨 Adicione domínio personalizado
4. 📈 Monitore performance
5. 🔄 Faça updates via Git

---

**Suporte:**
- 📚 [Documentação Vercel](https://vercel.com/docs)
- 💬 [Comunidade Vercel](https://github.com/vercel/vercel/discussions)
- 🐛 [Report Issues](https://github.com/vercel/vercel/issues)

**Feito com ❤️ por Yohann Escher Melo**
