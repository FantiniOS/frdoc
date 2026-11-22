# FRdoc — Página Institucional Comercial (`frdoc.com.br`)

Site institucional comercial do **FRdoc** — Ecossistema clínico dedicado (**Single-Tenant + White-Label**) com Painel Web e Aplicativo Mobile do Paciente para clínicas de Endocrinologia, Nutrologia e Saúde Integrativa.

## Stack

- **Next.js 16 (App Router)**
- **React 19 + TypeScript**
- **Tailwind CSS v4**
- **Lucide React**
- **Fontes:** `Plus Jakarta Sans` & `JetBrains Mono` (`next/font/google`)

## Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validação e Build

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Configuração Comercial

Os dados institucionais, número de WhatsApp, mensagem pré-preenchida e e-mail de contato ficam centralizados em `src/config/site.ts`.

## Deploy na Vercel

O projeto está pronto para importação direta na **Vercel** na raiz deste repositório, com domínio principal configurado para `https://frdoc.com.br`.
