# 🔗 Personalized Link Hub

Um hub de links personalizado moderno e elegante, inspirado no design clean da Apple. Apresente seus projetos, redes sociais e serviços de forma profissional e interativa.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-cyan)

## ✨ Características

- 🎨 **Design Minimalista** - Interface clean inspirada na Apple
- 🎭 **Animações Suaves** - Transições fluidas com Framer Motion
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada** - Carregamento rápido e smooth scroll
- 🎯 **Cards Interativos** - Efeitos 3D e hover states sofisticados
- 🌐 **Múltiplas Páginas** - Sistema de roteamento interno
- 🔒 **Variáveis de Ambiente** - Configuração segura e flexível

## 🚀 Páginas Incluídas

### 1. **Home** - Hub Principal
- Hero section com vídeo de fundo
- Grid de cards interativos com seus projetos
- Seção "Sobre Mim" com biografia
- CTA de contato via WhatsApp
- Footer com redes sociais

### 2. **Site Automático** - Landing Page de Vendas
- Apresentação do sistema de sites automatizados
- Portfólio com carrossel infinito
- Seções de features e benefícios
- Depoimentos e garantias
- FAQ interativo
- CTAs estratégicos

### 3. **Dev Acelerado** - Página de Curso
- Anúncio do curso de desenvolvimento
- Data de lançamento destacada
- Benefícios e highlights
- CTA para lista de espera

## 🛠️ Tecnologias Utilizadas

- **React 18.3** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS** - Estilização utilitária
- **Framer Motion** - Animações avançadas
- **Lenis** - Smooth scroll
- **Lucide React** - Ícones modernos
- **Sonner** - Toast notifications

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/personalized-link-hub.git
cd personalized-link-hub
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas informações:
```env
VITE_WHATSAPP_NUMBER=+5562998550007
VITE_EMAIL=seu@email.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/seu-perfil/
# ... outras variáveis
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

6. Acesse no navegador:
```
http://localhost:5173
```

## 🔧 Configuração

### Personalizando Seus Links

Edite o arquivo `src/config/links.tsx` para adicionar/modificar seus projetos:

```tsx
export const mainLinks = [
  {
    title: "Seu Projeto",
    description: "Descrição do projeto",
    url: "https://seu-site.com",
    image: <SeuComponenteImagem />,
    category: "Categoria",
    featured: true
  },
  // ... mais links
];
```

### Personalizando Informações do Perfil

No mesmo arquivo, atualize suas informações:

```tsx
export const profileInfo = {
  name: "Seu Nome",
  title: "Seu Título",
  bio: "Sua biografia...",
  // ...
};
```

## 📁 Estrutura do Projeto

```
personalized-link-hub/
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes UI reutilizáveis
│   │   ├── figma/      # Componentes gerados do Figma
│   │   ├── LinkHub.tsx # Página principal
│   │   ├── SiteAutomatico.tsx
│   │   ├── DevAcelerado.tsx
│   │   └── ...
│   ├── config/         # Configurações centralizadas
│   │   └── links.tsx   # Links e informações do perfil
│   ├── imports/        # Componentes importados
│   ├── App.tsx         # Componente raiz com roteamento
│   ├── main.tsx        # Entry point
│   └── vite-env.d.ts   # Tipos do Vite
├── .env                # Variáveis de ambiente (não commitado)
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore          # Arquivos ignorados pelo Git
├── package.json        # Dependências e scripts
├── tailwind.config.js  # Configuração do Tailwind
├── tsconfig.json       # Configuração do TypeScript
└── vite.config.ts      # Configuração do Vite
```

## 🎨 Customização de Cores

O projeto usa uma paleta de cores consistente. Para alterar, edite o `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#dc2626', // Vermelho principal
      // ... adicione suas cores
    }
  }
}
```

## 🚀 Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 📤 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Configure o GitHub Pages para servir da pasta dist/
```

## 🔒 Segurança

- ✅ Variáveis de ambiente para dados sensíveis
- ✅ `.env` no `.gitignore`
- ✅ Sem hardcoded de credenciais
- ✅ Validação de inputs
- ✅ Links externos com `rel="noopener noreferrer"`

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Yohann Escher Melo**

- LinkedIn: [yohann-escher-melo](https://www.linkedin.com/in/yohann-escher-melo-95a6b1201/)
- YouTube: [@Yohannescher](https://www.youtube.com/@Yohannescher)
- Website: [DX Tech Solutions](https://www.dxtechsolutions.com.br/)

## 🙏 Agradecimentos

- Design inspirado na Apple
- Projeto original do Figma: [Personalized Link Hub](https://www.figma.com/design/sJd6Q6H4fVkg2AJekhxAuL/Personalized-Link-Hub)
- Ícones por [Lucide](https://lucide.dev/)
- Vídeos por [Pexels](https://www.pexels.com/)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!