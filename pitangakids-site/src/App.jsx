import { useState } from "react";

// 🖼️ Coloca as imagens na pasta /public com estes nomes
const IMGS = {
  nico: "/nico-tottie.png",
  stellaNico: "/stella-nico.png",
  stella: "/stella-cha.png",
  abraco: "/abraco-parque.png",
  logo: "/logo.png",
};

const C = {
  rosa: "#F7A8C0", lilas: "#C4A8E0", lilasD: "#9B7DC8",
  mint: "#A8DDD0", coral: "#F4845F",
  creme: "#FDF6EE", creme2: "#FFF8F0",
  texto: "#3D2C2C", suave: "#7A6060", branco: "#FFFFFF",
};

// ─── LINKS (actualiza quando tiveres os URLs reais) ───
const LINKS = {
  app: "https://play.google.com/store/apps/details?id=com.pitangakids",
  amazon: "https://www.amazon.co.uk/s?k=pitanga+kids",
  bookvault: "https://www.bookvault.app",
};

// ─── TRADUÇÕES ───
const LANG = {
  pt: {
    flag: "🇧🇷", label: "PT",
    nav: ["Início","App","Livros","Blog","Sobre","Pitanguinhas","Recursos","Privacidade"],

    // Home
    heroTag: "🌱 Educação com amor",
    heroH1: ["Aprender é ", "brincar", ", brincar é ", "crescer"],
    heroDesc: "Um universo educativo onde cada criança encontra o seu caminho único, com Montessori, Waldorf, Reggio Emilia, STEAM e mais.",
    personagensH: ["Conheça o ", "Nico", " e a ", "Stella"],
    nico: ["Nico", "2,5 anos, curioso e aventureiro. Anda sempre com o Tottie, o seu dinossauro de pelúcia favorito!"],
    stellaNico: ["Stella e Nico", "Juntos exploram o mundo com olhos curiosos, descobrindo a magia nas coisas simples do dia a dia."],
    stella: ["Stella", "3,5 anos, criativa e cheia de amor. Adora organizar chazinhos e cuidar de todos ao redor."],
    metH: ["Metodologias que ", "inspiram"],
    met: [
      { icon: "🎯", nome: "Montessori", desc: "Aprendizagem autónoma, respeito pelo ritmo da criança" },
      { icon: "🌿", nome: "Waldorf", desc: "Arte, movimento e criatividade no coração do desenvolvimento" },
      { icon: "🏡", nome: "Reggio Emilia", desc: "Exploração, comunidade e as 100 linguagens das crianças" },
      { icon: "🔬", nome: "STEAM", desc: "Ciência, tecnologia, artes e matemática de forma lúdica" },
    ],

    // App
    appH: ["O app ", "Pitanga Kids"],
    appDesc: "Atividades pedagógicas personalizadas para crianças de 2 a 5 anos — na palma da mão.",
    appPlanosH: "Escolha o plano ideal para o seu pequeno",
    appBtn: "📱 Acessar o app",
    popular: "⭐ Mais popular",
    planos: [
      { nome: "Semente", emoji: "🌱", preco: "€9.99/mes", cor: C.mint, corT: "#2A7A6E",
        features: ["Atividades simples e divertidas", "Acesso a conteúdo básico", "Ideal para começar", "Sem cartão de crédito"] },
      { nome: "Jardim", emoji: "🍅", preco: "€14,99/mês", cor: C.rosa, corT: "#8B2252",
        features: ["Tudo do Semente +", "IA escolhe a metodologia", "Mais variedade de atividades", "Suporte prioritário"] },
      { nome: "Pitanga", emoji: "🍊", preco: "€19,99/mês", cor: C.lilas, corT: "#5C3080", popular: true,
        features: ["Tudo do Jardim +", "Você escolhe a metodologia", "Montessori, Waldorf, Reggio Emilia e mais", "Conteúdo pedagógico exclusivo"] },
    ],

    // Livros
    livrosH: ["Coleções ", "Pitanga Kids"],
    livrosDesc: "Livros ilustrados criados com amor para acompanhar cada etapa do crescimento.",
    disponivel: "Disponível", emBreve: "Em breve",
    btnAmazon: "🛒 Comprar na Amazon",
    btnBookvault: "📦 Comprar no BookVault",
    colecoes: [
      { nome: "Coleção Tulipa", emoji: "🌷", cor: C.rosa, idade: "2–5 anos", status: "Disponível",
        desc: "Aventuras de Nico e Stella — histórias com amor, família e descobertas. Cada livro é uma janela para o mundo.",
        livros: ["O Tesouro Escondido", "O Segredo da Caixa", "Cadê o Caju?"] },
      { nome: "Coleção Pipa", emoji: "🪁", cor: C.mint, idade: "6–9 anos", status: "Em breve",
        desc: "Histórias de aventura e imaginação para crianças que adoram explorar.", livros: ["Em breve..."] },
      { nome: "Coleção Guarda-Chuva", emoji: "☂️", cor: C.lilas, idade: "9–12 anos", status: "Em breve",
        desc: "Literatura infantojuvenil com profundidade, emoção e personagens inesquecíveis.", livros: ["Em breve..."] },
    ],

    // Blog
    blogH: ["Blog ", "Pedagógico"],
    blogDesc: "Dicas, inspirações e conteúdo educativo para famílias e educadores.",
    lerMais: "Ler →",
    artigos: [
      { id:1, emoji:"📖", cor:C.mint, tempo:"4 min", data:"Maio 2026", tags:["Leitura","Desenvolvimento"],
        titulo:"Como estimular a leitura nos primeiros anos de vida",
        resumo:"A leitura compartilhada é uma das experiências mais poderosas que pode oferecer ao seu filho. Muito antes de aprender a ler, a criança absorve o mundo através das histórias." },
      { id:2, emoji:"🎯", cor:C.rosa, tempo:"5 min", data:"Abril 2026", tags:["Montessori","Casa"],
        titulo:"O que é Montessori na prática e como aplicar em casa",
        resumo:"Criada pela médica italiana Maria Montessori, esta metodologia acredita que a criança aprende melhor quando tem liberdade para explorar, errar e descobrir no seu próprio ritmo." },
      { id:3, emoji:"🤸", cor:C.lilas, tempo:"5 min", data:"Março 2026", tags:["Movimento","Atividades"],
        titulo:"5 atividades para desenvolver a coordenação motora de 2 a 5 anos",
        resumo:"O movimento é o primeiro idioma da criança. Antes de falar, antes de escrever — ela aprende com o corpo. Desenvolver a coordenação é essencial para a cognição e autoconfiança!" },
      { id:4, emoji:"❤️", cor:C.coral, tempo:"4 min", data:"Fevereiro 2026", tags:["Emoções","Neurociência"],
        titulo:"Por que as emoções são a base de todo aprendizado",
        resumo:"Antes de qualquer conteúdo, existe o afeto. Crianças que se sentem seguras e amadas aprendem melhor, mais rápido e com mais alegria." },
      { id:5, emoji:"🌳", cor:C.mint, tempo:"5 min", data:"Janeiro 2026", tags:["Movimento","Cognição"],
        titulo:"Como o movimento do corpo ajuda no desenvolvimento cognitivo",
        resumo:"Deixar a criança correr, saltar e rolar é tão importante quanto sentá-la para aprender. O movimento não é o oposto do aprendizado — é parte essencial dele!" },
    ],

    // Sobre
    sobreH: ["A nossa ", "história"],
    sobreQuote: "\"A Pitanga Kids nasceu de uma crença simples: que toda criança carrega dentro de si uma luz única, esperando ser vista, celebrada e nutrida com afeto. Criamos um universo onde aprender é brincar, onde cada história abre uma janela para o mundo e onde cada família encontra um lugar seguro para crescer junto.\"",
    sobreCards: [
      { icon:"👩‍🏫", t:"Professora por vocação", d:"Fundada por uma professora apaixonada pela educação infantil e metodologias inovadoras." },
      { icon:"📚", t:"Aprendizagem holística", d:"Integramos Montessori, Waldorf, Reggio Emilia, STEAM e outras metodologias comprovadas." },
      { icon:"❤️", t:"Feito com amor", d:"Cada conteúdo, cada livro, cada atividade é criada com cuidado e intenção pedagógica." },
      { icon:"🌍", t:"Para o mundo todo", d:"Com raízes no Brasil e presença global, a Pitanga Kids chega a famílias de todo o mundo." },
    ],

    // Pitanguinhas
    pitH: ["Seja uma ", "Pitanguinha", "!"],
    pitDesc: "Junte-se à nossa comunidade de famílias que acreditam no poder da educação com amor.",
    pitCards: [
      { icon:"🌱", t:"Conteúdo pedagógico exclusivo", d:"Atividades e materiais criados por especialistas em educação infantil." },
      { icon:"💛", t:"Comunidade de famílias", d:"Conecte-se com famílias que partilham os mesmos valores educativos." },
      { icon:"📚", t:"Dicas e leituras", d:"Sugestões regulares de atividades, livros e recursos pedagógicos." },
      { icon:"🎯", t:"Inspiração para o dia a dia", d:"Pequenas ideias que transformam momentos comuns em aprendizagem." },
    ],

    // Recursos
    recursosH: ["Recursos ", "gratuitos"],
    recursosDesc: "Atividades pedagógicas para usar em casa ou na sala de aula — sem custo!",
    btnDownload: "⬇️ Baixar grátis",
    atividades: [
      { emoji:"🧺", nome:"Caixinha dos Tesouros", metodo:"Sensorial", idade:"0-2 anos", cor:C.mint,
        desc:"Uma caixa com objetos do dia a dia de texturas diferentes para o bebé explorar livremente." },
      { emoji:"🎨", nome:"Cores e Emoções", metodo:"Montessori", idade:"2-4 anos", cor:C.rosa,
        desc:"Explore as cores e as emoções através de atividades sensoriais e criativas." },
      { emoji:"🌱", nome:"Meu Jardim Secreto", metodo:"Reggio Emilia", idade:"3-5 anos", cor:C.lilas,
        desc:"Uma aventura pela natureza e pelo mundo das plantas e flores." },
      { emoji:"🔤", nome:"Brincando com as Letras", metodo:"STEAM", idade:"4-6 anos", cor:C.coral,
        desc:"Descubra o mundo das letras de forma lúdica combinando arte, criatividade e linguagem." },
    ],

    // Privacidade
    privH: ["Política de ", "Privacidade"],
    privSub: "Pitanga Kids · pitangakids.com · Última atualização: Abril de 2026",
    privIntro: "Respeitamos a sua privacidade.",
    privSecoes: [
      { t:"Recolha de Informações", p:"A Pitanga Kids pode recolher informações básicas de conta, como endereço de e-mail, quando os utilizadores optam por iniciar sessão através de e-mail ou Google (Gmail). Esta informação é utilizada exclusivamente para autenticação e acesso à aplicação. A aplicação pode também solicitar informações gerais e não identificáveis, como a faixa etária (ex.: 0–2, 3–5, 6–10 anos), para personalizar o conteúdo." },
      { t:"Privacidade das Crianças", p:"A Pitanga Kids foi concebida para crianças. A criação de conta ou início de sessão deve ser realizada por um pai, mãe ou responsável legal. Não recolhemos intencionalmente dados pessoais sensíveis de crianças." },
      { t:"Utilização das Informações", p:"As informações recolhidas são utilizadas apenas para permitir o acesso à aplicação e personalizar a experiência do utilizador." },
      { t:"Permissões do Dispositivo", p:"A aplicação pode solicitar determinadas permissões (como câmera ou informações do dispositivo) devido à plataforma utilizada para o seu desenvolvimento. No entanto, a Pitanga Kids não utiliza essas permissões para recolher, armazenar ou partilhar dados dos utilizadores." },
      { t:"Partilha de Dados", p:"Não vendemos nem partilhamos dados pessoais com terceiros." },
      { t:"Publicidade", p:"A aplicação não apresenta publicidade de terceiros." },
      { t:"Inteligência Artificial", p:"A aplicação pode utilizar inteligência artificial para gerar atividades personalizadas. Nenhum dado pessoal é utilizado para treinar modelos de IA." },
      { t:"Eliminação de Conta", p:"Os utilizadores podem solicitar a eliminação da sua conta diretamente na aplicação ou através do contacto: pitangakids.app@outlook.com. Todos os dados associados serão eliminados num prazo razoável." },
      { t:"Contacto", p:"Para qualquer questão, contacte: pitangakids.app@outlook.com | pitangakids.com" },
      { t:"Alterações", p:"Esta política pode ser atualizada periodicamente. Última atualização: Abril de 2026." },
    ],

    footer: "Feito com 🧡 para as famílias do mundo",
  },

  en: {
    flag: "🇬🇧", label: "EN",
    nav: ["Home","App","Books","Blog","About","Pitanguinhas","Resources","Privacy"],

    heroTag: "🌱 Education with love",
    heroH1: ["Learning is ", "playing", ", playing is ", "growing"],
    heroDesc: "An educational universe where every child finds their unique path, with Montessori, Waldorf, Reggio Emilia, STEAM and more.",
    personagensH: ["Meet ", "Nico", " and ", "Stella"],
    nico: ["Nico", "2.5 years old, curious and adventurous. Always with Tottie, his favourite dinosaur plush!"],
    stellaNico: ["Stella & Nico", "Together they explore the world with curious eyes, finding magic in the simple things of everyday life."],
    stella: ["Stella", "3.5 years old, creative and full of love. Loves organising little tea parties and caring for everyone around her."],
    metH: ["Methodologies that ", "inspire"],
    met: [
      { icon: "🎯", nome: "Montessori", desc: "Autonomous learning, respect for the child's own pace" },
      { icon: "🌿", nome: "Waldorf", desc: "Art, movement and creativity at the heart of development" },
      { icon: "🏡", nome: "Reggio Emilia", desc: "Exploration, community and the 100 languages of children" },
      { icon: "🔬", nome: "STEAM", desc: "Science, technology, arts and mathematics in a playful way" },
    ],

    appH: ["The ", "Pitanga Kids app"],
    appDesc: "Personalised educational activities for children aged 2 to 5 — right in your hands.",
    appPlanosH: "Choose the ideal plan for your little one",
    appBtn: "📱 Access the app",
    popular: "⭐ Most popular",
    planos: [
      { nome: "Semente", emoji: "🌱", preco: "Free", cor: C.mint, corT: "#2A7A6E",
        features: ["Simple and fun activities", "Access to basic content", "Perfect to start", "No credit card needed"] },
      { nome: "Tomate", emoji: "🍅", preco: "€4.99/month", cor: C.rosa, corT: "#8B2252",
        features: ["Everything in Semente +", "AI chooses the methodology", "More variety of activities", "Priority support"] },
      { nome: "Pitanga", emoji: "🍊", preco: "€9.99/month", cor: C.lilas, corT: "#5C3080", popular: true,
        features: ["Everything in Tomate +", "You choose the methodology", "Montessori, Waldorf, Reggio Emilia & more", "Exclusive pedagogical content"] },
    ],

    livrosH: ["", "Pitanga Kids Books"],
    livrosDesc: "Illustrated books created with love to accompany every stage of growing up.",
    disponivel: "Available", emBreve: "Coming soon",
    btnAmazon: "🛒 Buy on Amazon",
    btnBookvault: "📦 Buy on BookVault",
    colecoes: [
      { nome: "Tulipa Collection", emoji: "🌷", cor: C.rosa, idade: "2–5 years", status: "Available",
        desc: "Adventures of Nico and Stella — stories about love, family and discoveries. Each book is a window to the world.",
        livros: ["The Hidden Treasure", "The Secret of the Box", "Where is Caju?"] },
      { nome: "Pipa Collection", emoji: "🪁", cor: C.mint, idade: "6–9 years", status: "Coming soon",
        desc: "Adventure and imagination stories for children who love to explore.", livros: ["Coming soon..."] },
      { nome: "Guarda-Chuva Collection", emoji: "☂️", cor: C.lilas, idade: "9–12 years", status: "Coming soon",
        desc: "Children's literature with depth, emotion and unforgettable characters.", livros: ["Coming soon..."] },
    ],

    blogH: ["Pedagogical ", "Blog"],
    blogDesc: "Tips, inspiration and educational content for families and educators.",
    lerMais: "Read →",
    artigos: [
      { id:1, emoji:"📖", cor:C.mint, tempo:"4 min", data:"May 2026", tags:["Reading","Development"],
        titulo:"How to encourage reading in the early years of life",
        resumo:"Shared reading is one of the most powerful experiences you can offer your child. Long before they learn to read alone, children absorb the world through stories." },
      { id:2, emoji:"🎯", cor:C.rosa, tempo:"5 min", data:"April 2026", tags:["Montessori","Home"],
        titulo:"What is Montessori in practice and how to apply it at home",
        resumo:"Created by Italian physician Maria Montessori, this methodology believes that children learn best when they have freedom to explore, make mistakes and discover at their own pace." },
      { id:3, emoji:"🤸", cor:C.lilas, tempo:"5 min", data:"March 2026", tags:["Movement","Activities"],
        titulo:"5 activities to develop motor coordination in children aged 2 to 5",
        resumo:"Movement is a child's first language. Before speaking, before writing — they learn with their body. Developing coordination is essential for cognition and self-confidence!" },
      { id:4, emoji:"❤️", cor:C.coral, tempo:"4 min", data:"February 2026", tags:["Emotions","Neuroscience"],
        titulo:"Why emotions are the foundation of all learning",
        resumo:"Before any content, before any methodology — there is affection. Children who feel safe and loved learn better, faster and with more joy." },
      { id:5, emoji:"🌳", cor:C.mint, tempo:"5 min", data:"January 2026", tags:["Movement","Cognition"],
        titulo:"How body movement helps cognitive development",
        resumo:"Letting children run, jump and roll is just as important as sitting them down to learn. Movement is not the opposite of learning — it is an essential part of it!" },
    ],

    sobreH: ["Our ", "story"],
    sobreQuote: "\"Pitanga Kids was born from a simple belief: that every child carries within them a unique light, waiting to be seen, celebrated and nurtured with love. We created a universe where learning is play, where each story opens a window to the world, and where every family finds a safe place to grow together.\"",
    sobreCards: [
      { icon:"👩‍🏫", t:"Teacher by vocation", d:"Founded by a teacher passionate about early childhood education and innovative methodologies." },
      { icon:"📚", t:"Holistic learning", d:"We integrate Montessori, Waldorf, Reggio Emilia, STEAM and other proven methodologies." },
      { icon:"❤️", t:"Made with love", d:"Every piece of content, every book, every activity is created with care and pedagogical intention." },
      { icon:"🌍", t:"For the whole world", d:"With roots in Brazil and a global presence, Pitanga Kids reaches families all over the world." },
    ],

    pitH: ["Become a ", "Pitanguinha", "!"],
    pitDesc: "Join our community of families who believe in the power of education with love.",
    pitCards: [
      { icon:"🌱", t:"Exclusive pedagogical content", d:"Activities and materials created by early childhood education specialists." },
      { icon:"💛", t:"Family community", d:"Connect with families who share the same educational values." },
      { icon:"📚", t:"Tips and readings", d:"Regular suggestions for activities, books and pedagogical resources." },
      { icon:"🎯", t:"Daily inspiration", d:"Small ideas that transform ordinary moments into learning opportunities." },
    ],

    recursosH: ["Free ", "resources"],
    recursosDesc: "Pedagogical activities to use at home or in the classroom — at no cost!",
    btnDownload: "⬇️ Download free",
    atividades: [
      { emoji:"🧺", nome:"Treasure Basket", metodo:"Sensory", idade:"0-2 years", cor:C.mint,
        desc:"A box with everyday objects of different textures for the baby to explore freely." },
      { emoji:"🎨", nome:"Colours & Emotions", metodo:"Montessori", idade:"2-4 years", cor:C.rosa,
        desc:"Explore colours and emotions through sensory and creative activities." },
      { emoji:"🌱", nome:"My Secret Garden", metodo:"Reggio Emilia", idade:"3-5 years", cor:C.lilas,
        desc:"An adventure through nature and the world of plants and flowers." },
      { emoji:"🔤", nome:"Playing with Letters", metodo:"STEAM", idade:"4-6 years", cor:C.coral,
        desc:"Discover the world of letters in a playful way combining art, creativity and language." },
    ],

    privH: ["Privacy ", "Policy"],
    privSub: "Pitanga Kids · pitangakids.com · Last updated: April 2026",
    privIntro: "We respect your privacy.",
    privSecoes: [
      { t:"Information Collection", p:"Pitanga Kids may collect basic account information such as email address when users choose to sign in using email or Google (Gmail). This information is used solely for authentication and access to the app. The app may also ask for general, non-identifiable information such as age range (e.g., 0–2, 3–5, 6–10 years) to personalise content." },
      { t:"Children's Privacy", p:"Pitanga Kids is designed for children. Any account creation or login should be performed by a parent or guardian. We do not knowingly collect sensitive personal data from children." },
      { t:"Use of Information", p:"The collected information is used only to allow access to the app and personalise the user experience." },
      { t:"Device Permissions", p:"The app may request certain permissions (such as camera or device information) due to the platform used to build it. However, Pitanga Kids does not use these permissions to collect, store, or share user data." },
      { t:"Data Sharing", p:"We do not sell or share personal data with third parties." },
      { t:"Advertising", p:"The app does not display third-party advertisements." },
      { t:"Artificial Intelligence", p:"The app may use artificial intelligence to generate personalised activities. No personal data is used to train AI models." },
      { t:"Account Deletion", p:"Users can request account deletion directly within the app or by contacting: pitangakids.app@outlook.com. All associated data will be deleted within a reasonable timeframe." },
      { t:"Contact", p:"For any questions: pitangakids.app@outlook.com | pitangakids.com" },
      { t:"Changes", p:"This policy may be updated periodically. Last updated: April 2026." },
    ],

    footer: "Made with 🧡 for families around the world",
  },

  es: {
    flag: "🇪🇸", label: "ES",
    nav: ["Inicio","App","Libros","Blog","Sobre","Pitanguinhas","Recursos","Privacidad"],

    heroTag: "🌱 Educación con amor",
    heroH1: ["Aprender es ", "jugar", ", jugar es ", "crecer"],
    heroDesc: "Un universo educativo donde cada niño encuentra su camino único, con Montessori, Waldorf, Reggio Emilia, STEAM y más.",
    personagensH: ["Conoce a ", "Nico", " y a ", "Stella"],
    nico: ["Nico", "2,5 años, curioso y aventurero. ¡Siempre con Tottie, su dinosaurio de peluche favorito!"],
    stellaNico: ["Stella y Nico", "Juntos exploran el mundo con ojos curiosos, descubriendo la magia en las cosas simples del día a día."],
    stella: ["Stella", "3,5 años, creativa y llena de amor. ¡Le encanta organizar meriendas y cuidar a todos a su alrededor!"],
    metH: ["Metodologías que ", "inspiran"],
    met: [
      { icon: "🎯", nome: "Montessori", desc: "Aprendizaje autónomo, respeto por el ritmo del niño" },
      { icon: "🌿", nome: "Waldorf", desc: "Arte, movimiento y creatividad en el corazón del desarrollo" },
      { icon: "🏡", nome: "Reggio Emilia", desc: "Exploración, comunidad y los 100 lenguajes de los niños" },
      { icon: "🔬", nome: "STEAM", desc: "Ciencia, tecnología, artes y matemáticas de forma lúdica" },
    ],

    appH: ["La app ", "Pitanga Kids"],
    appDesc: "Actividades pedagógicas personalizadas para niños de 2 a 5 años — en la palma de tu mano.",
    appPlanosH: "Elige el plan ideal para tu pequeño",
    appBtn: "📱 Acceder a la app",
    popular: "⭐ Más popular",
    planos: [
      { nome: "Semente", emoji: "🌱", preco: "Gratis", cor: C.mint, corT: "#2A7A6E",
        features: ["Actividades simples y divertidas", "Acceso a contenido básico", "Ideal para empezar", "Sin tarjeta de crédito"] },
      { nome: "Tomate", emoji: "🍅", preco: "€4,99/mes", cor: C.rosa, corT: "#8B2252",
        features: ["Todo de Semente +", "IA elige la metodología", "Más variedad de actividades", "Soporte prioritario"] },
      { nome: "Pitanga", emoji: "🍊", preco: "€9,99/mes", cor: C.lilas, corT: "#5C3080", popular: true,
        features: ["Todo de Tomate +", "Tú eliges la metodología", "Montessori, Waldorf, Reggio Emilia y más", "Contenido pedagógico exclusivo"] },
    ],

    livrosH: ["Colecciones ", "Pitanga Kids"],
    livrosDesc: "Libros ilustrados creados con amor para acompañar cada etapa del crecimiento.",
    disponivel: "Disponible", emBreve: "Próximamente",
    btnAmazon: "🛒 Comprar en Amazon",
    btnBookvault: "📦 Comprar en BookVault",
    colecoes: [
      { nome: "Colección Tulipa", emoji: "🌷", cor: C.rosa, idade: "2–5 años", status: "Disponible",
        desc: "Aventuras de Nico y Stella — historias de amor, familia y descubrimientos. Cada libro es una ventana al mundo.",
        livros: ["El Tesoro Escondido", "El Secreto de la Caja", "¿Dónde está Caju?"] },
      { nome: "Colección Pipa", emoji: "🪁", cor: C.mint, idade: "6–9 años", status: "Próximamente",
        desc: "Historias de aventura e imaginación para niños que aman explorar.", livros: ["Próximamente..."] },
      { nome: "Colección Guarda-Chuva", emoji: "☂️", cor: C.lilas, idade: "9–12 años", status: "Próximamente",
        desc: "Literatura infantojuvenil con profundidad, emoción y personajes inolvidables.", livros: ["Próximamente..."] },
    ],

    blogH: ["Blog ", "Pedagógico"],
    blogDesc: "Consejos, inspiración y contenido educativo para familias y educadores.",
    lerMais: "Leer →",
    artigos: [
      { id:1, emoji:"📖", cor:C.mint, tempo:"4 min", data:"Mayo 2026", tags:["Lectura","Desarrollo"],
        titulo:"Cómo estimular la lectura en los primeros años de vida",
        resumo:"La lectura compartida es una de las experiencias más poderosas que puedes ofrecer a tu hijo. Mucho antes de aprender a leer solo, el niño absorbe el mundo a través de las historias." },
      { id:2, emoji:"🎯", cor:C.rosa, tempo:"5 min", data:"Abril 2026", tags:["Montessori","Casa"],
        titulo:"Qué es Montessori en la práctica y cómo aplicarlo en casa",
        resumo:"Creada por la médica italiana Maria Montessori, esta metodología cree que los niños aprenden mejor cuando tienen libertad para explorar, equivocarse y descubrir a su propio ritmo." },
      { id:3, emoji:"🤸", cor:C.lilas, tempo:"5 min", data:"Marzo 2026", tags:["Movimiento","Actividades"],
        titulo:"5 actividades para desarrollar la coordinación motora de 2 a 5 años",
        resumo:"El movimiento es el primer idioma del niño. Antes de hablar, antes de escribir — aprende con el cuerpo. ¡Desarrollar la coordinación es esencial para la cognición y la autoconfianza!" },
      { id:4, emoji:"❤️", cor:C.coral, tempo:"4 min", data:"Febrero 2026", tags:["Emociones","Neurociencia"],
        titulo:"Por qué las emociones son la base de todo aprendizaje",
        resumo:"Antes de cualquier contenido, existe el afecto. Los niños que se sienten seguros y amados aprenden mejor, más rápido y con más alegría." },
      { id:5, emoji:"🌳", cor:C.mint, tempo:"5 min", data:"Enero 2026", tags:["Movimiento","Cognición"],
        titulo:"Cómo el movimiento del cuerpo ayuda al desarrollo cognitivo",
        resumo:"Dejar que el niño corra, salte y ruede es tan importante como sentarlo a aprender. ¡El movimiento no es lo opuesto al aprendizaje — es parte esencial de él!" },
    ],

    sobreH: ["Nuestra ", "historia"],
    sobreQuote: "\"Pitanga Kids nació de una creencia simple: que cada niño lleva dentro de sí una luz única, esperando ser vista, celebrada y nutrida con afecto. Creamos un universo donde aprender es jugar, donde cada historia abre una ventana al mundo y donde cada familia encuentra un lugar seguro para crecer juntos.\"",
    sobreCards: [
      { icon:"👩‍🏫", t:"Maestra por vocación", d:"Fundada por una maestra apasionada por la educación infantil y las metodologías innovadoras." },
      { icon:"📚", t:"Aprendizaje holístico", d:"Integramos Montessori, Waldorf, Reggio Emilia, STEAM y otras metodologías probadas." },
      { icon:"❤️", t:"Hecho con amor", d:"Cada contenido, cada libro, cada actividad se crea con cuidado e intención pedagógica." },
      { icon:"🌍", t:"Para todo el mundo", d:"Con raíces en Brasil y presencia global, Pitanga Kids llega a familias de todo el mundo." },
    ],

    pitH: ["¡Sé una ", "Pitanguinha", "!"],
    pitDesc: "Únete a nuestra comunidad de familias que creen en el poder de la educación con amor.",
    pitCards: [
      { icon:"🌱", t:"Contenido pedagógico exclusivo", d:"Actividades y materiales creados por especialistas en educación infantil." },
      { icon:"💛", t:"Comunidad de familias", d:"Conéctate con familias que comparten los mismos valores educativos." },
      { icon:"📚", t:"Consejos y lecturas", d:"Sugerencias regulares de actividades, libros y recursos pedagógicos." },
      { icon:"🎯", t:"Inspiración para el día a día", d:"Pequeñas ideas que transforman momentos ordinarios en aprendizaje." },
    ],

    recursosH: ["Recursos ", "gratuitos"],
    recursosDesc: "Actividades pedagógicas para usar en casa o en el aula — ¡sin costo!",
    btnDownload: "⬇️ Descargar gratis",
    atividades: [
      { emoji:"🧺", nome:"Cesta del Tesoro", metodo:"Sensorial", idade:"0-2 años", cor:C.mint,
        desc:"Una caja con objetos cotidianos de diferentes texturas para que el bebé explore libremente." },
      { emoji:"🎨", nome:"Colores y Emociones", metodo:"Montessori", idade:"2-4 años", cor:C.rosa,
        desc:"Explora los colores y las emociones a través de actividades sensoriales y creativas." },
      { emoji:"🌱", nome:"Mi Jardín Secreto", metodo:"Reggio Emilia", idade:"3-5 años", cor:C.lilas,
        desc:"Una aventura por la naturaleza y el mundo de las plantas y las flores." },
      { emoji:"🔤", nome:"Jugando con las Letras", metodo:"STEAM", idade:"4-6 años", cor:C.coral,
        desc:"Descubre el mundo de las letras de forma lúdica combinando arte, creatividad y lenguaje." },
    ],

    privH: ["Política de ", "Privacidad"],
    privSub: "Pitanga Kids · pitangakids.com · Última actualización: Abril de 2026",
    privIntro: "Respetamos tu privacidad.",
    privSecoes: [
      { t:"Recopilación de información", p:"Pitanga Kids puede recopilar información básica de cuenta, como dirección de correo electrónico, cuando los usuarios eligen iniciar sesión mediante correo electrónico o Google (Gmail). Esta información se utiliza exclusivamente para autenticación y acceso a la aplicación." },
      { t:"Privacidad de los niños", p:"Pitanga Kids está diseñada para niños. La creación de cuenta o inicio de sesión debe ser realizada por un padre, madre o tutor legal. No recopilamos intencionalmente datos personales sensibles de niños." },
      { t:"Uso de la información", p:"La información recopilada se utiliza únicamente para permitir el acceso a la aplicación y personalizar la experiencia del usuario." },
      { t:"Permisos del dispositivo", p:"La aplicación puede solicitar ciertos permisos (como cámara o información del dispositivo) debido a la plataforma utilizada para su desarrollo. Sin embargo, Pitanga Kids no utiliza estos permisos para recopilar, almacenar o compartir datos de usuarios." },
      { t:"Compartir datos", p:"No vendemos ni compartimos datos personales con terceros." },
      { t:"Publicidad", p:"La aplicación no muestra publicidad de terceros." },
      { t:"Inteligencia Artificial", p:"La aplicación puede utilizar inteligencia artificial para generar actividades personalizadas. Ningún dato personal se utiliza para entrenar modelos de IA." },
      { t:"Eliminación de cuenta", p:"Los usuarios pueden solicitar la eliminación de su cuenta directamente en la aplicación o contactando: pitangakids.app@outlook.com. Todos los datos asociados serán eliminados en un plazo razonable." },
      { t:"Contacto", p:"Para cualquier pregunta: pitangakids.app@outlook.com | pitangakids.com" },
      { t:"Cambios", p:"Esta política puede actualizarse periódicamente. Última actualización: Abril de 2026." },
    ],

    footer: "Hecho con 🧡 para las familias del mundo",
  },
};

// ─── COMPONENTES BASE ───
function Img({ src, alt, style }) {
  return <img src={src} alt={alt} style={style}
    onError={e => { e.target.style.background = C.creme2; e.target.src = ""; }} />;
}

function Nav({ lang, setLang, page, setPage, t }) {
  const navIds = ["home","app","livros","blog","sobre","pitanguinhas","recursos","privacidade"];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(253,246,238,0.97)",
      borderBottom: `2px solid ${C.rosa}`,
      padding: "0 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 60, gap: 8,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", flexShrink: 0 }}
        onClick={() => setPage("home")}>
        <Img src={IMGS.logo} alt="Pitanga Kids" style={{ height: 38, borderRadius: 10 }} />
        <span style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 900, fontSize: 18, color: C.coral }}>Pitanga Kids</span>
      </div>
      <div style={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "flex-end", alignItems: "center" }}>
        {navIds.map((id, i) => (
          <button key={id} onClick={() => setPage(id)} style={{
            background: page === id ? C.coral : "transparent",
            color: page === id ? "#fff" : C.texto,
            border: "none", borderRadius: 20, padding: "4px 11px",
            fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12,
            cursor: "pointer",
          }}>{t.nav[i]}</button>
        ))}
        <div style={{ display: "flex", gap: 4, marginLeft: 8 }}>
          {["pt","en","es"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              background: lang === l ? C.lilas : "transparent",
              color: lang === l ? "#fff" : C.suave,
              border: `1px solid ${lang === l ? C.lilas : C.rosa}`,
              borderRadius: 16, padding: "3px 9px",
              fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 11,
              cursor: "pointer",
            }}>{LANG[l].flag} {LANG[l].label}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer({ t, setPage, navIds }) {
  const ids = ["home","app","livros","blog","sobre","pitanguinhas","recursos","privacidade"];
  return (
    <footer style={{ background: C.texto, color: "#fff", padding: "32px 40px", textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 14 }}>
        <Img src={IMGS.logo} alt="Pitanga Kids" style={{ height: 30, borderRadius: 8 }} />
        <span style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 16 }}>Pitanga Kids</span>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 12 }}>
        {ids.map((id, i) => (
          <button key={id} onClick={() => setPage(id)} style={{
            background: "transparent", color: "rgba(255,255,255,0.6)",
            border: "none", fontSize: 12, cursor: "pointer",
          }}>{t.nav[i]}</button>
        ))}
      </div>
<div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginBottom: 12 }}>
        <a href="mailto:pitangakids.app@outlook.com" style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, textDecoration: "none" }}>📧 pitangakids.app@outlook.com</a>
        <a href="https://instagram.com/pitangakids.app" target="_blank" style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, textDecoration: "none" }}>📸 @pitangakids.app</a>
        <a href="https://tiktok.com/@pitangakids.app" target="_blank" style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, textDecoration: "none" }}>🎵 @pitangakids.app</a>
      </div>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
        © 2026 Pitanga Kids · pitangakids.com · {t.footer}
      </p>
    </footer>
  );
}

// ─── PÁGINAS ───
function HomePage({ t }) {
  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg,#FFF0F6 0%,#F5EFFC 55%,#EAF8F4 100%)",
        padding: "56px 40px 48px",
        display: "grid", gridTemplateColumns: "1fr auto", gap: 36, alignItems: "center",
        maxWidth: 960, margin: "0 auto",
      }}>
        <div>
          <div style={{
            display: "inline-block", background: C.lilas, color: "#fff",
            fontFamily: "'Baloo 2',cursive", fontSize: 11, fontWeight: 700,
            letterSpacing: 2, textTransform: "uppercase",
            padding: "4px 14px", borderRadius: 50, marginBottom: 16,
          }}>{t.heroTag}</div>
          <h1 style={{ fontFamily: "'Baloo 2',cursive", fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, color: C.texto, lineHeight: 1.15, marginBottom: 14 }}>
            {t.heroH1[0]}<span style={{ color: C.coral }}>{t.heroH1[1]}</span>
            {t.heroH1[2]}<span style={{ color: C.lilas }}>{t.heroH1[3]}</span>
          </h1>
          <p style={{ fontSize: 15.5, color: C.suave, maxWidth: 460, lineHeight: 1.7 }}>{t.heroDesc}</p>
        </div>
        <Img src={IMGS.abraco} alt="Stella e Nico" style={{
          width: 260, height: 260, borderRadius: 24, objectFit: "cover",
          boxShadow: "0 6px 28px rgba(196,168,224,0.22)",
        }} />
      </div>

      {/* Personagens */}
      <div style={{ background: C.creme2, padding: "48px 40px" }}>
        <h2 style={{ textAlign: "center", fontFamily: "'Baloo 2',cursive", fontSize: 26, fontWeight: 800, color: C.texto, marginBottom: 32 }}>
          {t.personagensH[0]}<span style={{ color: C.coral }}>{t.personagensH[1]}</span>
          {t.personagensH[2]}<span style={{ color: C.rosa }}>{t.personagensH[3]}</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, maxWidth: 860, margin: "0 auto" }}>
          {[
            { img: IMGS.nico, info: t.nico, cor: C.mint },
            { img: IMGS.stellaNico, info: t.stellaNico, cor: C.rosa },
            { img: IMGS.stella, info: t.stella, cor: C.lilas },
          ].map(p => (
            <div key={p.info[0]} style={{
              background: C.branco, borderRadius: 22,
              boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
              border: `2px solid ${p.cor}44`, overflow: "hidden", textAlign: "center",
            }}>
              <Img src={p.img} alt={p.info[0]} style={{ width: "100%", height: 190, objectFit: "cover" }} />
              <div style={{ padding: "14px 16px 18px" }}>
                <h3 style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 17, color: C.texto, marginBottom: 5 }}>{p.info[0]}</h3>
                <p style={{ color: C.suave, fontSize: 13.5, lineHeight: 1.5 }}>{p.info[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metodologias */}
      <div style={{ background: C.creme, padding: "48px 40px" }}>
        <h2 style={{ textAlign: "center", fontFamily: "'Baloo 2',cursive", fontSize: 26, fontWeight: 800, color: C.texto, marginBottom: 32 }}>
          {t.metH[0]}<span style={{ color: C.lilas }}>{t.metH[1]}</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 18, maxWidth: 860, margin: "0 auto" }}>
          {t.met.map(m => (
            <div key={m.nome} style={{
              background: C.branco, borderRadius: 18, padding: "22px 18px",
              boxShadow: "0 3px 12px rgba(0,0,0,0.04)", textAlign: "center",
            }}>
              <div style={{ fontSize: 34, marginBottom: 8 }}>{m.icon}</div>
              <h3 style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 16, color: C.texto, marginBottom: 5 }}>{m.nome}</h3>
              <p style={{ color: C.suave, fontSize: 13, lineHeight: 1.5 }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppPage({ t }) {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg,#FFF0F6,#F5EFFC)", padding: "52px 40px 20px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 36, fontWeight: 900, color: C.texto, marginBottom: 10 }}>
          {t.appH[0]}<span style={{ color: C.coral }}>{t.appH[1]}</span>
        </h1>
        <p style={{ color: C.suave, fontSize: 16, maxWidth: 500, margin: "0 auto 24px" }}>{t.appDesc}</p>
        <a href={LINKS.app} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-block", background: C.coral, color: "#fff",
          borderRadius: 50, padding: "12px 32px",
          fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 15,
          textDecoration: "none",
        }}>{t.appBtn}</a>
      </div>
      <div style={{ padding: "36px 40px", background: C.creme }}>
        <h2 style={{ textAlign: "center", fontFamily: "'Baloo 2',cursive", fontSize: 24, fontWeight: 800, color: C.texto, marginBottom: 32 }}>
          {t.appPlanosH}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 22, maxWidth: 860, margin: "0 auto" }}>
          {t.planos.map(p => (
            <div key={p.nome} style={{
              background: C.branco, borderRadius: 22, padding: "32px 24px 26px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
              border: `2px solid ${p.cor}`, position: "relative",
            }}>
              {p.popular && (
                <div style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  background: C.coral, color: "#fff",
                  fontFamily: "'Baloo 2',cursive", fontSize: 11, fontWeight: 700,
                  padding: "3px 16px", borderRadius: 50, whiteSpace: "nowrap",
                }}>{t.popular}</div>
              )}
              <div style={{ width: 52, height: 52, borderRadius: 14, background: p.cor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 12 }}>{p.emoji}</div>
              <h3 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 22, fontWeight: 800, color: C.texto, marginBottom: 4 }}>{p.nome}</h3>
              <div style={{ fontFamily: "'Baloo 2',cursive", fontSize: 26, fontWeight: 900, color: p.corT, marginBottom: 16 }}>{p.preco}</div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {p.features.map(f => (
                  <li key={f} style={{ color: C.suave, fontSize: 13.5, padding: "5px 0", borderBottom: "1px solid #f0e8e8", display: "flex", gap: 7 }}>
                    <span style={{ color: p.cor, fontWeight: 800 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LivrosPage({ t }) {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg,#FFF0F6,#F5EFFC)", padding: "52px 40px 20px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 36, fontWeight: 900, color: C.texto, marginBottom: 10 }}>
          {t.livrosH[0]}<span style={{ color: C.lilas }}>{t.livrosH[1]}</span>
        </h1>
        <p style={{ color: C.suave, fontSize: 16, maxWidth: 500, margin: "0 auto" }}>{t.livrosDesc}</p>
      </div>
      <div style={{ padding: "36px 40px", background: C.creme }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Img src={IMGS.stellaNico} alt="Nico e Stella" style={{
            width: 220, height: 220, borderRadius: 22, objectFit: "cover",
            boxShadow: "0 5px 20px rgba(196,168,224,0.2)",
          }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780, margin: "0 auto" }}>
          {t.colecoes.map(c => {
            const disponivel = c.status === t.disponivel || c.status === "Disponível" || c.status === "Available" || c.status === "Disponible";
            return (
              <div key={c.nome} style={{
                background: C.branco, borderRadius: 22, padding: "26px 28px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
                border: `2px solid ${c.cor}`,
                display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, alignItems: "start",
              }}>
                <div style={{ width: 58, height: 58, borderRadius: 14, background: c.cor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{c.emoji}</div>
                <div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 20, fontWeight: 800, color: C.texto, margin: 0 }}>{c.nome}</h3>
                    <span style={{
                      background: disponivel ? C.mint : C.creme, color: disponivel ? "#2A7A6E" : C.suave,
                      fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 50,
                    }}>{c.status}</span>
                    <span style={{ fontSize: 11, color: C.suave, background: C.creme, padding: "2px 8px", borderRadius: 50 }}>👶 {c.idade}</span>
                  </div>
                  <p style={{ color: C.suave, fontSize: 14, lineHeight: 1.6, marginBottom: 10 }}>{c.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: disponivel ? 14 : 0 }}>
                    {c.livros.map(l => (
                      <span key={l} style={{ background: `${c.cor}33`, color: C.texto, fontSize: 12, padding: "3px 10px", borderRadius: 50, fontWeight: 600 }}>📖 {l}</span>
                    ))}
                  </div>
                  {disponivel && (
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <a href={LINKS.amazon} target="_blank" rel="noopener noreferrer" style={{
                        display: "inline-block", background: C.coral, color: "#fff",
                        borderRadius: 50, padding: "8px 20px",
                        fontFamily: "'Baloo 2',cursive", fontWeight: 700, fontSize: 13,
                        textDecoration: "none",
                      }}>{t.btnAmazon}</a>
                      <a href={LINKS.bookvault} target="_blank" rel="noopener noreferrer" style={{
                        display: "inline-block", background: "transparent", color: C.lilasD,
                        border: `1.5px solid ${C.lilas}`, borderRadius: 50, padding: "8px 20px",
                        fontFamily: "'Baloo 2',cursive", fontWeight: 700, fontSize: 13,
                        textDecoration: "none",
                      }}>{t.btnBookvault}</a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function BlogPage({ t }) {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg,#EAF8F4,#F5EFFC)", padding: "52px 40px 20px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 36, fontWeight: 900, color: C.texto, marginBottom: 10 }}>
          {t.blogH[0]}<span style={{ color: C.coral }}>{t.blogH[1]}</span>
        </h1>
        <p style={{ color: C.suave, fontSize: 16, maxWidth: 500, margin: "0 auto" }}>{t.blogDesc}</p>
      </div>
      <div style={{ padding: "36px 40px", background: C.creme }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 20, maxWidth: 940, margin: "0 auto" }}>
          {t.artigos.map(a => (
            <div key={a.id} style={{
              background: C.branco, borderRadius: 20,
              boxShadow: "0 3px 14px rgba(0,0,0,0.05)",
              border: `1px solid ${a.cor}44`, overflow: "hidden",
            }}>
              <div style={{ background: `${a.cor}28`, padding: "22px 18px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 30 }}>{a.emoji}</span>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {a.tags.map(tag => (
                    <span key={tag} style={{ background: a.cor, color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 50 }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: "16px 18px 20px" }}>
                <h3 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 15.5, fontWeight: 800, color: C.texto, marginBottom: 7, lineHeight: 1.35 }}>{a.titulo}</h3>
                <p style={{ color: C.suave, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{a.resumo}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: C.suave, fontSize: 11 }}>📅 {a.data} · ⏱ {a.tempo}</span>
                  <span style={{ color: a.cor, fontSize: 12, fontWeight: 700 }}>{t.lerMais}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SobrePage({ t }) {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg,#FFF0F6,#F5EFFC)", padding: "52px 40px 20px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 36, fontWeight: 900, color: C.texto, marginBottom: 10 }}>
          {t.sobreH[0]}<span style={{ color: C.lilas }}>{t.sobreH[1]}</span>
        </h1>
      </div>
      <div style={{ padding: "36px 40px", background: C.creme }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Img src={IMGS.stella} alt="Stella" style={{
              width: 200, height: 200, borderRadius: 22, objectFit: "cover",
              boxShadow: "0 5px 20px rgba(247,168,192,0.2)",
            }} />
          </div>
          <div style={{
            background: C.branco, borderRadius: 22, padding: "36px",
            boxShadow: "0 3px 14px rgba(0,0,0,0.04)",
            borderLeft: `5px solid ${C.lilas}`, marginBottom: 28,
          }}>
            <p style={{ fontSize: 17, color: C.texto, lineHeight: 1.8, textAlign: "center", fontStyle: "italic" }}>{t.sobreQuote}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {t.sobreCards.map(c => (
              <div key={c.t} style={{
                background: C.branco, borderRadius: 16, padding: "20px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.04)", textAlign: "center",
              }}>
                <div style={{ fontSize: 26, marginBottom: 7 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 14.5, color: C.texto, marginBottom: 5 }}>{c.t}</h3>
                <p style={{ color: C.suave, fontSize: 13, lineHeight: 1.5 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PitaguinhasPage({ t }) {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg,#FFF0F6,#FFF0E8)", padding: "52px 40px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🍊</div>
        <h1 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 36, fontWeight: 900, color: C.texto, marginBottom: 10 }}>
          {t.pitH[0]}<span style={{ color: C.coral }}>{t.pitH[1]}</span>{t.pitH[2]}
        </h1>
        <p style={{ color: C.suave, fontSize: 16, maxWidth: 500, margin: "0 auto" }}>{t.pitDesc}</p>
      </div>
      <div style={{ padding: "36px 40px", background: C.creme }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 18, maxWidth: 820, margin: "0 auto" }}>
          {t.pitCards.map(v => (
            <div key={v.t} style={{
              background: C.branco, borderRadius: 20, padding: "26px 18px",
              boxShadow: "0 3px 12px rgba(0,0,0,0.05)", textAlign: "center",
              border: `2px solid ${C.coral}22`,
            }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>{v.icon}</div>
              <h3 style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 15.5, color: C.texto, marginBottom: 6 }}>{v.t}</h3>
              <p style={{ color: C.suave, fontSize: 13.5, lineHeight: 1.6 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecursosPage({ t }) {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg,#EAF8F4,#F5EFFC)", padding: "52px 40px 20px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 36, fontWeight: 900, color: C.texto, marginBottom: 10 }}>
          {t.recursosH[0]}<span style={{ color: C.mint }}>{t.recursosH[1]}</span>
        </h1>
        <p style={{ color: C.suave, fontSize: 16, maxWidth: 500, margin: "0 auto" }}>{t.recursosDesc}</p>
      </div>
      <div style={{ padding: "36px 40px", background: C.creme }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, maxWidth: 920, margin: "0 auto" }}>
          {t.atividades.map(a => (
            <div key={a.nome} style={{
              background: C.branco, borderRadius: 20,
              boxShadow: "0 3px 12px rgba(0,0,0,0.05)",
              border: `2px solid ${a.cor}`, overflow: "hidden",
            }}>
              <div style={{ background: `${a.cor}28`, padding: "24px 18px 18px", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 7 }}>{a.emoji}</div>
                <h3 style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 17, color: C.texto, marginBottom: 7 }}>{a.nome}</h3>
                <div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
                  <span style={{ background: a.cor, color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 50 }}>{a.metodo}</span>
                  <span style={{ background: C.creme, color: C.suave, fontSize: 10, padding: "2px 7px", borderRadius: 50 }}>👶 {a.idade}</span>
                </div>
              </div>
              <div style={{ padding: "16px 18px 20px" }}>
                <p style={{ color: C.suave, fontSize: 13.5, lineHeight: 1.6, marginBottom: 12 }}>{a.desc}</p>
                <button style={{
                  background: a.cor, color: "#fff", border: "none",
                  borderRadius: 50, padding: "9px", width: "100%",
                  fontFamily: "'Baloo 2',cursive", fontWeight: 700, fontSize: 13, cursor: "pointer",
                }}>{t.btnDownload}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrivacidadePage({ t }) {
  return (
    <div>
      <div style={{ background: C.creme2, padding: "52px 40px 20px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 32, fontWeight: 900, color: C.texto, marginBottom: 7 }}>
          {t.privH[0]}<span style={{ color: C.lilas }}>{t.privH[1]}</span>
        </h1>
        <p style={{ color: C.suave, fontSize: 13 }}>{t.privSub}</p>
      </div>
      <div style={{ padding: "36px 40px", background: C.creme }}>
        <div style={{ maxWidth: 700, margin: "0 auto", background: C.branco, borderRadius: 20, padding: "36px", boxShadow: "0 3px 12px rgba(0,0,0,0.04)" }}>
          <p style={{ fontStyle: "italic", color: C.suave, marginBottom: 24, fontSize: 14.5 }}>{t.privIntro}</p>
          {t.privSecoes.map((s, i) => (
            <div key={s.t} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < t.privSecoes.length - 1 ? `1px solid ${C.rosa}44` : "none" }}>
              <h3 style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 16, color: C.texto, marginBottom: 5 }}>{s.t}</h3>
              <p style={{ color: C.suave, fontSize: 13.5, lineHeight: 1.7 }}>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── APP PRINCIPAL ───
export default function App() {
  const [lang, setLang] = useState("pt");
  const [page, setPage] = useState("home");
  const t = LANG[lang];

  const pages = {
    home: <HomePage t={t} />,
    app: <AppPage t={t} />,
    livros: <LivrosPage t={t} />,
    blog: <BlogPage t={t} />,
    sobre: <SobrePage t={t} />,
    pitanguinhas: <PitaguinhasPage t={t} />,
    recursos: <RecursosPage t={t} />,
    privacidade: <PrivacidadePage t={t} />,
  };

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", minHeight: "100vh", background: C.creme }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Baloo+2:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      <Nav lang={lang} setLang={setLang} page={page} setPage={setPage} t={t} />
      {pages[page] || <HomePage t={t} />}
      <Footer t={t} setPage={setPage} />
    </div>
  );
}
