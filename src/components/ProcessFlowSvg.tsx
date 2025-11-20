import React from 'react';

export function ProcessFlowSvg() {
  return (
    <svg 
      viewBox="0 0 1200 400" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Gradiente de Fundo */}
        <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#050a10" />
          <stop offset="100%" stopColor="#0a1525" />
        </linearGradient>

        {/* Brilhos e Sombras */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Gradiente da Bola Final */}
        <radialGradient id="final-ball-grad">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#ff8c00" />
        </radialGradient>
      </defs>

      {/* Fundo */}
      <rect width="100%" height="100%" fill="url(#bg-grad)" rx="12" />

      {/* TRILHOS E CONEXÕES (Camada de fundo) */}
      <g stroke="#334455" strokeWidth="2" fill="none">
        {/* Rampa Ideia -> Roteiro */}
        <path d="M 100 140 L 220 220" />
        {/* Eixo Roteiro -> Narração */}
        <line x1="280" y1="220" x2="360" y2="220" />
        {/* Tubo Narração -> IA */}
        <path d="M 420 220 C 450 220 450 120 490 120" />
        {/* Rampa IA -> Imagens */}
        <line x1="550" y1="120" x2="630" y2="220" />
        {/* Ponte Imagens -> Montagem */}
        <line x1="690" y1="220" x2="800" y2="220" strokeDasharray="4,4"/>
        {/* Cabo Montagem -> VSL Final */}
        <path d="M 920 220 C 980 220 980 140 1040 140" />
      </g>

      {/* CAMINHO DA ANIMAÇÃO (Invisível, guia para a bola) */}
      <path id="motionPath" fill="none" stroke="none"
            d="M 100 130 L 220 220 L 390 220 C 450 220 450 120 520 120 L 660 220 L 860 220 C 950 220 950 140 1070 140" />

      {/* MÓDULOS E ÍCONES */}
      
      {/* 1. IDEIA */}
      <g transform="translate(70, 150)">
        <text x="30" y="100" fill="#556677" fontFamily="Arial" fontSize="12" textAnchor="middle">IDEIA INICIAL</text>
        <rect x="0" y="0" width="60" height="40" rx="5" stroke="#556677" fill="#0f1724" />
        {/* Ícone Lâmpada */}
        <circle cx="30" cy="15" r="8" stroke="#778899" strokeWidth="1.5" fill="none"/>
        <line x1="30" y1="23" x2="30" y2="28" stroke="#778899" strokeWidth="1.5"/>
        {/* Alavanca */}
        <line x1="65" y1="20" x2="85" y2="40" stroke="#556677" strokeWidth="2">
          <animateTransform attributeName="transform" type="rotate" from="0 65 20" to="20 65 20" dur="0.5s" begin="0.8s" fill="freeze" />
        </line>
      </g>

      {/* 2. ROTEIRO */}
      <g transform="translate(220, 200)">
        <text x="30" y="80" fill="#556677" fontFamily="Arial" fontSize="12" textAnchor="middle">ROTEIRO</text>
        <rect x="0" y="0" width="60" height="40" rx="5" stroke="#556677" fill="#0f1724" />
        {/* Ícone Papel */}
        <rect x="20" y="10" width="20" height="25" stroke="#778899" strokeWidth="1" fill="none"/>
        <line x1="24" y1="16" x2="36" y2="16" stroke="#778899" strokeWidth="1"/>
        <line x1="24" y1="22" x2="36" y2="22" stroke="#778899" strokeWidth="1"/>
      </g>

      {/* Engrenagem entre Roteiro e Narração */}
      <g transform="translate(320, 220)">
        <g>
          <circle cx="0" cy="0" r="12" stroke="#445566" strokeWidth="2" fill="none" strokeDasharray="4,3"/>
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite" />
        </g>
      </g>

      {/* 3. NARRAÇÃO */}
      <g transform="translate(360, 200)">
        <text x="30" y="80" fill="#556677" fontFamily="Arial" fontSize="12" textAnchor="middle">NARRAÇÃO</text>
        <rect x="0" y="0" width="60" height="40" rx="5" stroke="#556677" fill="#0f1724" />
        {/* Ícone Mic */}
        <rect x="25" y="8" width="10" height="16" rx="5" stroke="#778899" fill="none"/>
        <line x1="30" y1="26" x2="30" y2="32" stroke="#778899"/>
        <line x1="22" y1="32" x2="38" y2="32" stroke="#778899"/>
        {/* Ondas Som */}
        <path d="M 5,20 Q -5,20 5,40" stroke="#a18cd1" strokeWidth="1" fill="none" opacity="0">
           <animate attributeName="opacity" values="0;1;0" dur="1s" begin="2.5s" repeatCount="3"/>
        </path>
        <path d="M 55,20 Q 65,20 55,40" stroke="#a18cd1" strokeWidth="1" fill="none" opacity="0">
           <animate attributeName="opacity" values="0;1;0" dur="1s" begin="2.6s" repeatCount="3"/>
        </path>
      </g>

      {/* 4. IA PROCESSANDO */}
      <g transform="translate(490, 100)">
        <text x="30" y="80" fill="#556677" fontFamily="Arial" fontSize="12" textAnchor="middle">IA CORE</text>
        <rect x="0" y="0" width="60" height="40" rx="8" stroke="#00f260" strokeWidth="1.5" fill="#0f1724" filter="url(#glow)" opacity="0.8">
           <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </rect>
        {/* Ícone Chip */}
        <polyline points="15,20 25,10 35,30 45,20" stroke="#00f260" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="25" cy="10" r="2" fill="#00f260"/>
        <circle cx="35" cy="30" r="2" fill="#00f260"/>
      </g>

      {/* 5. IMAGENS */}
      <g transform="translate(630, 200)">
        <text x="30" y="80" fill="#556677" fontFamily="Arial" fontSize="12" textAnchor="middle">IMAGENS</text>
        <rect x="0" y="0" width="60" height="40" rx="5" stroke="#556677" fill="#0f1724" />
        {/* Ícone Frames */}
        <rect x="10" y="12" width="15" height="15" stroke="#778899" fill="none"/>
        <rect x="22" y="12" width="15" height="15" stroke="#778899" fill="none"/>
        <rect x="34" y="12" width="15" height="15" stroke="#778899" fill="none"/>
        {/* Pixels caindo */}
        <g fill="#00f260" opacity="0">
           <rect x="20" y="-40" width="2" height="2">
             <animate attributeName="y" from="-40" to="10" dur="0.5s" begin="4.5s" fill="freeze"/>
           </rect>
            <rect x="30" y="-50" width="2" height="2">
             <animate attributeName="y" from="-50" to="10" dur="0.6s" begin="4.5s" fill="freeze"/>
           </rect>
           <rect x="40" y="-35" width="2" height="2">
             <animate attributeName="y" from="-35" to="10" dur="0.4s" begin="4.5s" fill="freeze"/>
           </rect>
           <animate attributeName="opacity" to="1" dur="0.1s" begin="4.5s" fill="freeze"/>
        </g>
      </g>

      {/* 6. MONTAGEM VÍDEO */}
      <g transform="translate(800, 190)">
        <text x="60" y="90" fill="#556677" fontFamily="Arial" fontSize="12" textAnchor="middle">MONTAGEM</text>
        <rect x="0" y="0" width="120" height="60" rx="6" stroke="#556677" fill="#0f1724" />
        {/* Ícone Play Grande */}
        <polygon points="55,20 70,30 55,40" fill="#778899" />
        {/* Timeline */}
        <rect x="10" y="48" width="100" height="6" fill="#333" rx="2"/>
        {/* Blocos aparecendo na timeline */}
        <rect x="12" y="49" width="20" height="4" fill="#4facfe" opacity="0">
            <animate attributeName="opacity" to="1" begin="5.8s" dur="0.2s" fill="freeze"/>
        </rect>
        <rect x="35" y="49" width="30" height="4" fill="#a18cd1" opacity="0">
            <animate attributeName="opacity" to="1" begin="6.0s" dur="0.2s" fill="freeze"/>
        </rect>
        <rect x="68" y="49" width="40" height="4" fill="#00f260" opacity="0">
            <animate attributeName="opacity" to="1" begin="6.2s" dur="0.2s" fill="freeze"/>
        </rect>
      </g>

      {/* 7. VSL FINAL */}
      <g transform="translate(1040, 100)">
        <text x="25" y="110" fill="#fff" fontFamily="Arial" fontSize="12" fontWeight="bold" textAnchor="middle">VSL FINAL</text>
        {/* Celular */}
        <rect x="0" y="0" width="50" height="90" rx="8" stroke="#aaa" strokeWidth="2" fill="#050a10" />
        <rect x="4" y="10" width="42" height="60" fill="#1a2535" />
        {/* Ícone Play Tela */}
        <polygon points="20,35 30,40 20,45" fill="#fff" opacity="0">
            <animate attributeName="opacity" to="1" begin="7.5s" fill="freeze"/>
        </polygon>
        {/* Ícone $ (Venda) */}
        <circle cx="40" cy="80" r="8" fill="#ffd700" opacity="0">
            <animate attributeName="opacity" to="1" begin="7.8s" fill="freeze"/>
            <animateTransform attributeName="transform" type="scale" values="0;1.2;1" begin="7.8s" dur="0.5s" fill="freeze"/>
        </circle>
        <text x="40" y="84" fontSize="10" textAnchor="middle" fill="#000" fontWeight="bold" opacity="0">
            $<animate attributeName="opacity" to="1" begin="7.8s" fill="freeze"/>
        </text>
      </g>

      {/* BOLA DE ENERGIA (O PROTAGONISTA) */}
      <circle r="6" fill="#ffd700" filter="url(#glow)">
        {/* Animação de Movimento no Caminho */}
        <animateMotion dur="8s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
          <mpath href="#motionPath"/>
        </animateMotion>

        {/* Animação de Cor: Amarelo -> Azul -> Roxo -> Verde -> Dourado */}
        <animate attributeName="fill" 
                 values="#ffd700; #ffd700; #4facfe; #4facfe; #a18cd1; #a18cd1; #00f260; #00f260; url(#final-ball-grad)"
                 keyTimes="0; 0.12; 0.13; 0.3; 0.31; 0.5; 0.51; 0.8; 0.9" 
                 dur="8s" repeatCount="indefinite" />
                 
        {/* Efeito de Escala ao entrar nos módulos */}
        <animateTransform attributeName="transform" type="scale"
                 values="1; 1.5; 1; 1.5; 1"
                 keyTimes="0; 0.12; 0.25; 0.9; 1"
                 dur="8s" repeatCount="indefinite" additive="sum"/>
      </circle>

    </svg>
  );
}
