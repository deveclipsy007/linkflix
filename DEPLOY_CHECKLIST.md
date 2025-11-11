# ✅ Checklist de Deploy - Vercel

## 📋 Pré-Deploy

### Arquivos de Configuração
- [x] `vercel.json` criado e configurado
- [x] `vite.config.ts` com `outDir: 'dist'`
- [x] `.gitignore` incluindo `.env`
- [x] `.env.example` com template de variáveis
- [x] `package.json` com scripts corretos

### Segurança
- [x] Variáveis sensíveis em `.env`
- [x] `.env` no `.gitignore`
- [x] Sem credenciais hardcoded
- [x] URLs configuráveis via env vars

### Build
- [x] Build local testado com sucesso ✅
- [x] Pasta `dist` gerada corretamente
- [x] Sem erros de TypeScript
- [x] Assets carregando corretamente

## 🚀 Deploy na Vercel

### Método 1: Via GitHub (Recomendado)

1. **Subir código no GitHub**
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/personalized-link-hub.git
   git branch -M main
   git push -u origin main
   ```

2. **Importar na Vercel**
   - [ ] Acessar [vercel.com](https://vercel.com)
   - [ ] Login com GitHub
   - [ ] Clicar em "Add New..." > "Project"
   - [ ] Selecionar repositório
   - [ ] Clicar em "Import"

3. **Configurar Variáveis de Ambiente**
   
   Adicionar no painel da Vercel:
   
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
   
   ⚠️ **Importante:** Selecionar todos os ambientes (Production, Preview, Development)

4. **Deploy**
   - [ ] Clicar em "Deploy"
   - [ ] Aguardar build (1-3 minutos)
   - [ ] Verificar se deploy foi bem-sucedido

### Método 2: Via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 🧪 Pós-Deploy

### Testes Essenciais

- [ ] **Homepage carrega** - Verificar hero e cards
- [ ] **Navegação funciona** - Testar links internos
- [ ] **Site Automático** - Página carrega corretamente
- [ ] **Dev Acelerado** - Página carrega com imagem
- [ ] **WhatsApp links** - Redirecionam corretamente
- [ ] **Links externos** - Abrem em nova aba
- [ ] **Responsivo** - Testar em mobile
- [ ] **Performance** - Verificar velocidade de carregamento

### Testes de Dispositivos

- [ ] Desktop (Chrome)
- [ ] Desktop (Firefox)
- [ ] Desktop (Safari)
- [ ] Mobile (iOS)
- [ ] Mobile (Android)
- [ ] Tablet

### Verificações Técnicas

- [ ] **Console sem erros** - Abrir DevTools
- [ ] **Assets carregando** - Imagens e vídeos
- [ ] **Animações funcionando** - Hover states e transições
- [ ] **Smooth scroll** - Rolagem suave
- [ ] **SEO básico** - Title e meta tags

## 🔧 Configurações Opcionais

### Domínio Personalizado

- [ ] Comprar domínio (se não tiver)
- [ ] Adicionar na Vercel (Settings > Domains)
- [ ] Configurar DNS
- [ ] Aguardar propagação (até 48h)
- [ ] Verificar HTTPS ativo

### Analytics

- [ ] Ativar Vercel Analytics
- [ ] Configurar Web Vitals
- [ ] Configurar Speed Insights

### Notificações

- [ ] Configurar notificações de deploy
- [ ] Integrar com Slack/Discord (opcional)

## 📊 Monitoramento

### Métricas para Acompanhar

- [ ] **Page Views** - Visualizações de página
- [ ] **Unique Visitors** - Visitantes únicos
- [ ] **Core Web Vitals** - LCP, FID, CLS
- [ ] **Build Times** - Tempo de build
- [ ] **Deploy Frequency** - Frequência de deploys

### Ferramentas

- [ ] Vercel Analytics
- [ ] Google Analytics (se configurado)
- [ ] Google Search Console

## 🐛 Troubleshooting

### Se o Build Falhar

1. Verificar logs na Vercel
2. Testar build local: `npm run build`
3. Verificar variáveis de ambiente
4. Checar dependências no `package.json`

### Se Variáveis Não Funcionarem

1. Confirmar que começam com `VITE_`
2. Verificar se foram adicionadas em todos os ambientes
3. Fazer redeploy após adicionar variáveis

### Se Páginas Darem 404

1. Verificar `vercel.json` na raiz
2. Confirmar rewrites configurados
3. Fazer redeploy

## 📝 Comandos Úteis

```bash
# Ver status do projeto
vercel

# Ver logs
vercel logs

# Listar projetos
vercel list

# Remover projeto
vercel remove personalized-link-hub

# Adicionar variável de ambiente
vercel env add NOME_DA_VARIAVEL

# Listar variáveis
vercel env ls
```

## 🎉 Deploy Completo!

Quando todos os itens estiverem marcados, seu projeto está:

✅ **Seguro** - Sem vazamento de dados  
✅ **Otimizado** - Build de produção  
✅ **Funcional** - Todas as features testadas  
✅ **Monitorado** - Analytics configurado  
✅ **Profissional** - Pronto para compartilhar  

## 📱 Compartilhar

Seu site está em:
- **Production:** `https://personalized-link-hub.vercel.app`
- **Domínio personalizado:** `https://seu-dominio.com` (se configurado)

Compartilhe nas redes sociais! 🚀

---

**Última atualização:** Após configuração para Vercel  
**Status:** ✅ Pronto para deploy
