# AI Multi-Agent Studio

Estúdio web para planejar, coordenar e acompanhar uma equipe de agentes de IA na produção de conteúdo para YouTube.

## Estado do projeto
Primeiro scaffold do protótipo. A interface inicial está em construção; integrações externas ainda não estão conectadas.

## Stack
- Next.js + React + TypeScript
- Tailwind CSS
- Preparado para integração server-side com Supabase, provedores de IA e YouTube Data API.

## Executar localmente
```bash
npm install
npm run dev
```

Crie variáveis locais em `.env.local` quando as integrações forem implementadas. Nunca publique chaves ou tokens no frontend.

## Princípios
- Não simular integrações como se estivessem conectadas.
- Credenciais apenas no servidor.
- Revisão e autorização humana antes da publicação.
- Agentes e provedores substituíveis por adaptadores.
