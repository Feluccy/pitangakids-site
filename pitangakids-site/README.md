# 🍊 Pitanga Kids — Site Oficial

Site trilíngue (PT/EN/ES) da marca educacional Pitanga Kids.

## 📁 Estrutura
```
pitangakids-site/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   └── App.jsx
└── public/
    ├── logo.png          ← Logo Pitanga Kids
    ├── nico-tottie.png   ← Nico a abraçar o Tottie
    ├── stella-nico.png   ← Stella e Nico no jardim
    ├── stella-cha.png    ← Stella a fazer chazinho
    └── abraco-parque.png ← Abraço no parque
```

## 🖼️ IMPORTANTE — Adicionar as imagens
Coloca as imagens dos personagens na pasta `/public` com os nomes acima.

## 🔗 Atualizar links reais
No ficheiro `src/App.jsx`, procura `const LINKS` e atualiza:
```js
const LINKS = {
  app: "https://play.google.com/store/apps/details?id=...",
  amazon: "https://www.amazon.co.uk/...",
  bookvault: "https://www.bookvault.app/...",
};
```

## 🚀 Publicar no Vercel
1. Faz upload desta pasta no GitHub
2. Vai a vercel.com → Import Project
3. Escolhe o repositório
4. Vercel detecta o Vite automaticamente e publica!
5. Adiciona o domínio pitangakids.com nas definições

## 🌍 DNS no Namecheap
Após publicar no Vercel, vai ao Namecheap → Advanced DNS e adiciona os registos que o Vercel te indicar.
