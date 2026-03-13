# SmartCredit - Plataforma de Simulação de Crédito

## 📌 Sobre o projeto
O SmartCredit é uma plataforma web que permite simular propostas de crédito de forma rápida e segura.  
O usuário cadastra seus dados e pode simular empréstimos, recebendo resultados detalhados sobre valor e prazo.

## 🎯 Funcionalidades
- Cadastro de usuários (nome, e-mail, renda).  
- Criação de simulações de crédito (valor, prazo).  
- Armazenamento de dados em banco SQLite via Prisma.  
- Frontend em React com formulário interativo e exibição de simulação.  

## 🛠 Tecnologias utilizadas
- **Frontend:** React, Axios, Vite  
- **Backend:** Node.js, Express, Prisma, SQLite  
- **Outras:** CORS, dotenv, OBS Studio (para gravação do pitch)

## 🚀 Como rodar o projeto

### Backend
```bash
cd backend
npm install
npx prisma migrate dev
npm run dev

FRONTEND

cd frontend
npm install
npm run dev

Acesse: http://localhost:5173 no navegador

🎥 Vídeos

Pitch do projeto: https://youtu.be/Cg3oN5mJnSw?si=v61Arr3xKB3v4v-3

Demonstração da plataforma: https://youtu.be/PDkNwhqHDaE?si=clfPLCsUcBrYyWHB

📁 Estrutura do projeto
backend/
 ├─ src/
 │   ├─ controllers/
 │   │   ├─ userController.js
 │   │   └─ simulationController.js
 │   ├─ routes/
 │   │   └─ routes.js
 │   └─ prisma/
 │       └─ schema.prisma
 ├─ package.json
frontend/
 ├─ src/
 │   ├─ pages/
 │   │   └─ Register.jsx
 │   ├─ main.jsx
 │   └─ App.jsx
 ├─ index.html
 ├─ package.json
 └─ vite.config.js
📌 Observações

Variáveis de ambiente: nenhuma necessária para SQLite local.

Certifique-se que backend está rodando antes de abrir o frontend.

As simulações são armazenadas no banco SQLite (dev.db).
