window.FORMA_I18N = {
  "pt-PT": {
    meta: {
      title: "FORMA — atelier de impressão 3D",
      description:
        "Peças impressas numa Bambu Lab A2L: chaveiros personalizados, figuras anime e comic, miniaturas, decoração e props. Entra na lista de espera da loja."
    },
    ticker:
      "; PRINTER: Bambu Lab A2L   ; MATERIAL: PLA · PETG   ; MODE: multi-peça   ; STATUS: a imprimir a loja   ; NICHES: 5",
    nav: {
      niches: "Nichos",
      catalog: "Catálogo",
      quote: "Orçamento",
      shop: "A loja",
      waitlist: "Lista de espera",
      langLabel: "Idioma"
    },
    hero: {
      kicker: "Atelier de impressão 3D",
      title: "Estamos a imprimir a loja.",
      lead: "Peças feitas numa Bambu Lab A2L — chaveiros com o teu nome, figuras em várias peças com grande detalhe, miniaturas, decoração e props de grande formato. Deixa o teu e-mail. Avisamos-te quando puderes encomendar.",
      printerCaption: "Cabeça de impressão em movimento · camada a camada"
    },
    form: {
      email: "E-mail",
      emailPlaceholder: "o teu e-mail",
      name: "Nome (opcional)",
      namePlaceholder: "como te chamamos",
      interest: "O que te interessa",
      submit: "Quero ser avisado",
      sending: "A enviar…",
      successTitle: "Estás na lista.",
      success: "Quando a loja abrir, escrevemos-te. Até lá, o catálogo abaixo já mostra o que está a sair da A2L.",
      error: "Não conseguimos enviar agora. Tenta outra vez, ou configura o e-mail em js/config.js se fores o dono do site.",
      missingConfig:
        "O site ainda não tem um e-mail de destino. Abre js/config.js e preenche ownerEmail (FormSubmit) ou formspreeId.",
      consent:
        "Aceito receber e-mails da FORMA sobre a abertura da loja e peças novas. Posso sair quando quiser.",
      consentError: "Precisamos do teu acordo para te escrever.",
      invalidEmail: "Esse e-mail não parece válido.",
      privacyLink: "Como tratamos os dados",
      required: "obrigatório"
    },
    stats: {
      printer: "Bambu Lab A2L",
      printerHint: "grande formato, detalhe fino",
      parts: "Multi-peça",
      partsHint: "montagem e acabamento",
      langs: "PT · BR · EN",
      langsHint: "três línguas desde o dia zero",
      list: "Só e-mail",
      listHint: "sem spam, sem conta"
    },
    niches: {
      kicker: "Cinco linhas de produto",
      title: "Cinco nichos, uma impressora.",
      lead: "A A2L aguentá-los a todos: do chaveiro de 4 cm ao elmo de palco. Escolhe o que queres ver primeiro — a lista de espera guarda o teu interesse.",
      keychains: {
        title: "Chaveiros personalizados",
        desc: "Iniciais em relevo, nomes, mascotes e peças pequenas com acabamento limpo. Ideais para prendas e merchandising."
      },
      figurines: {
        title: "Figuras anime e comic",
        desc: "Modelos complexos, grande detalhe, impressos em várias peças e montados. Não vendemos cópias oficiais — só peças originais ou por encomenda."
      },
      miniatures: {
        title: "Miniaturas de mesa",
        desc: "Escala 28–32 mm para RPG e wargames: dragões, heróis e packs para a tua campanha."
      },
      decor: {
        title: "Decoração e secretária",
        desc: "Vasos geométricos, organizadores, ninhos de cabos e objectos úteis que aguentam o dia-a-dia."
      },
      props: {
        title: "Cosplay e grande formato",
        desc: "O volume da A2L serve elmos, empunhaduras, stands de exposição e peças de palco em várias partes."
      }
    },
    catalog: {
      kicker: "Peças que já existem",
      title: "No catálogo agora",
      lead: "Isto não é a loja final — é o que já está a ser impresso e pode ser encomendado por e-mail até o checkout estar no ar.",
      filterAll: "Tudo",
      from: "a partir de",
      quote: "sob consulta",
      empty: "Nada neste nicho ainda. Entra na lista e diz-nos o que queres ver.",
      notify: "Avisem-me",
      currency: "€",
      status: {
        available: "Pronto a enviar",
        "made-to-order": "Por encomenda",
        coming: "Brevemente"
      }
    },
    quote: {
      kicker: "; COST ESTIMATE",
      title: "Quanto custa imprimir?",
      lead: "Uma fotografia não mede filament nem tempo de máquina. O custo real vem do volume 3D e do corte. Sem nuvem: o cálculo corre neste browser, com a cama da A2L (330 × 320 × 325 mm).",
      tabPhoto: "Foto de referência",
      tabStl: "Ficheiro STL",
      photoHelp: "A foto dá uma faixa de preço. Serviços de imagem→3D (Meshy, Tripo, PrintPal) geram uma malha, mas não fazem o slice nem validam o custo de fábrica.",
      stlHelp: "Arrasta um .stl. Medimos volume, caixa e se cabe na A2L. Infill e suportes são uma estimativa — não um corte Orca/Bambu.",
      dropPhoto: "Larga uma foto ou clica para escolher",
      dropStl: "Larga um .stl ou clica para escolher",
      height: "Altura alvo",
      material: "Material",
      infill: "Infill",
      detail: "Detalhe",
      detailSimple: "Simples",
      detailNormal: "Normal",
      detailComplex: "Complexo / várias peças",
      niche: "Nicho",
      resultTitle: "Estimativa FORMA",
      priceFrom: "a partir de",
      priceTo: "até",
      grams: "filament",
      time: "tempo de máquina",
      size: "caixa",
      volume: "volume",
      fitOk: "Cabe na A2L numa só peça",
      fitNo: "Não cabe numa só peça — partir ou reduzir",
      notQuote: "Não é um preço final: sem slice real, sem suportes medidos, sem falhas nem acabamento.",
      sendWaitlist: "Levar esta estimativa para a lista",
      hours: "h",
      fileError: "Não lemos esse ficheiro. Experimenta um STL exportado do slicer.",
      tooBig: "Ficheiro demasiado grande (máx. 25 MB).",
      noFile: "Escolhe primeiro um ficheiro.",
      photoNeedHeight: "Indica a altura da peça.",
      privacy: "Foto e STL não saem do teu computador. Se entrares na lista, só vai um resumo em texto."
    },
    shop: {
      kicker: "O que vem a seguir",
      title: "A loja, camada a camada",
      lead: "O checkout, as cores de filament e as encomendas com o teu nome ainda estão na placa de construção. Até lá, a lista de espera é a porta.",
      items: [
        "Pagamento e portes para Portugal, UE e Brasil",
        "Escolha de cor PLA / PETG",
        "Chaveiros com texto teu, em minutos de configuração",
        "Figuras em kit (para montar) ou já coladas e lixadas",
        "Pergunta de encomenda para peças grandes de cosplay"
      ],
      asideTitle: "Bambu Lab A2L",
      aside:
        "Impressora de grande formato, boa para peças grandes e para o detalhe das figuras em várias partes. Filament com cor sólida, não pintamos de fábrica — o PLA já chega a parecer objecto acabado."
    },
    waitlist: {
      kicker: "Passo zero",
      title: "Um e-mail. Zero spam.",
      lead: "Não há conta, não há aplicação. Só a abertura da loja, peças novas, e a possibilidade de dizeres que nicho queres ver primeiro.",
      note: "Se já enviaste o e-mail em cima, está feito — não precisas de o repetir."
    },
    privacy: {
      title: "Dados",
      body: "Guardamos o e-mail, o nome se o deres, o idioma da página, os nichos que marcares e, se usares o orçamento, um resumo em texto. Foto e STL ficam no teu browser. Serve só para te avisar da loja e de peças novas. Não vendemos listas. Para apagar os teus dados, responde a qualquer e-mail nosso e pede a remoção."
    },
    footer: {
      mark: "FORMA",
      tag: "atelier 3D",
      rights: "Peças originais. Sem licenças oficiais de anime, comic ou jogos.",
      gcode: "; end of print — thanks for waiting",
      instagram: "Instagram"
    }
  },
  "pt-BR": {
    meta: {
      title: "FORMA — ateliê de impressão 3D",
      description:
        "Peças impressas numa Bambu Lab A2L: chaveiros personalizados, figures de anime e HQ, miniaturas, decoração e props. Entre na lista de espera da loja."
    },
    ticker:
      "; PRINTER: Bambu Lab A2L   ; MATERIAL: PLA · PETG   ; MODE: várias peças   ; STATUS: imprimindo a loja   ; NICHES: 5",
    nav: {
      niches: "Nichos",
      catalog: "Catálogo",
      quote: "Orçamento",
      shop: "A loja",
      waitlist: "Lista de espera",
      langLabel: "Idioma"
    },
    hero: {
      kicker: "Ateliê de impressão 3D",
      title: "Estamos imprimindo a loja.",
      lead: "Peças feitas numa Bambu Lab A2L — chaveiros com o seu nome, figures em várias peças com muito detalhe, miniaturas, decoração e props grandes. Deixe seu e-mail. Avisamos você quando der para encomendar.",
      printerCaption: "Cabeça de impressão em movimento · camada por camada"
    },
    form: {
      email: "E-mail",
      emailPlaceholder: "seu e-mail",
      name: "Nome (opcional)",
      namePlaceholder: "seu nome",
      interest: "O que te interessa",
      submit: "Quero ser avisado",
      sending: "Enviando…",
      successTitle: "Você está na lista.",
      success: "Quando a loja abrir, a gente escreve. Até lá, o catálogo abaixo já mostra o que está saindo da A2L.",
      error: "Não deu para enviar agora. Tenta de novo, ou configura o e-mail em js/config.js se você for o dono do site.",
      missingConfig:
        "O site ainda não tem um e-mail de destino. Abra js/config.js e preencha ownerEmail (FormSubmit) ou formspreeId.",
      consent:
        "Aceito receber e-mails da FORMA sobre a abertura da loja e peças novas. Posso sair quando quiser.",
      consentError: "Precisamos do seu ok para te escrever.",
      invalidEmail: "Esse e-mail não parece válido.",
      privacyLink: "Como tratamos os dados",
      required: "obrigatório"
    },
    stats: {
      printer: "Bambu Lab A2L",
      printerHint: "grande formato, detalhe fino",
      parts: "Várias peças",
      partsHint: "montagem e acabamento",
      langs: "PT · BR · EN",
      langsHint: "três línguas desde o primeiro dia",
      list: "Só e-mail",
      listHint: "sem spam, sem conta"
    },
    niches: {
      kicker: "Cinco linhas de produto",
      title: "Cinco nichos, uma impressora.",
      lead: "A A2L dá conta dos cinco: do chaveiro de 4 cm ao elmo de palco. Marca o que você quer ver primeiro — a lista de espera guarda esse interesse.",
      keychains: {
        title: "Chaveiros personalizados",
        desc: "Iniciais em relevo, nomes, mascotes e peças pequenas com acabamento caprichado. Bons para presente e merchandising."
      },
      figurines: {
        title: "Figures de anime e HQ",
        desc: "Modelos complexos, muito detalhe, impressos em várias peças e montados. Sem cópia oficial — só peças originais ou sob encomenda."
      },
      miniatures: {
        title: "Miniaturas de RPG",
        desc: "Escala 28–32 mm para RPG e wargame: dragões, heróis e packs para a sua mesa."
      },
      decor: {
        title: "Decoração e escrivaninha",
        desc: "Vasos geométricos, organizadores, porta-fios e objetos úteis para o dia a dia."
      },
      props: {
        title: "Cosplay e grande formato",
        desc: "O volume da A2L serve elmos, empunhaduras, stands de exposição e peças de palco em várias partes."
      }
    },
    catalog: {
      kicker: "Peças que já existem",
      title: "No catálogo agora",
      lead: "Isso não é a loja final — é o que já está sendo impresso e pode ser pedido por e-mail até o checkout existir.",
      filterAll: "Tudo",
      from: "a partir de",
      quote: "sob consulta",
      empty: "Nada neste nicho ainda. Entra na lista e diz o que você quer ver.",
      notify: "Me avisem",
      currency: "€",
      status: {
        available: "Pronto para envio",
        "made-to-order": "Sob encomenda",
        coming: "Em breve"
      }
    },
    quote: {
      kicker: "; COST ESTIMATE",
      title: "Quanto custa imprimir?",
      lead: "Uma foto não mede filamento nem tempo de máquina. O custo real vem do volume 3D e do fatiamento. Sem nuvem: o cálculo roda neste browser, com a mesa da A2L (330 × 320 × 325 mm).",
      tabPhoto: "Foto de referência",
      tabStl: "Arquivo STL",
      photoHelp: "A foto dá uma faixa de preço. Serviços de imagem→3D (Meshy, Tripo, PrintPal) geram uma malha, mas não fatiam nem validam o custo de fábrica.",
      stlHelp: "Solta um .stl. Medimos volume, caixa e se cabe na A2L. Infill e suportes são estimativa — não um slice Orca/Bambu.",
      dropPhoto: "Solta uma foto ou clique para escolher",
      dropStl: "Solta um .stl ou clique para escolher",
      height: "Altura alvo",
      material: "Material",
      infill: "Infill",
      detail: "Detalhe",
      detailSimple: "Simples",
      detailNormal: "Normal",
      detailComplex: "Complexo / várias peças",
      niche: "Nicho",
      resultTitle: "Estimativa FORMA",
      priceFrom: "a partir de",
      priceTo: "até",
      grams: "filamento",
      time: "tempo de máquina",
      size: "caixa",
      volume: "volume",
      fitOk: "Cabe na A2L numa peça só",
      fitNo: "Não cabe numa peça só — partir ou reduzir",
      notQuote: "Não é preço final: sem slice real, sem suportes medidos, sem falha nem acabamento.",
      sendWaitlist: "Levar esta estimativa para a lista",
      hours: "h",
      fileError: "Não lemos esse arquivo. Tenta um STL exportado do slicer.",
      tooBig: "Arquivo grande demais (máx. 25 MB).",
      noFile: "Escolhe um arquivo primeiro.",
      photoNeedHeight: "Indica a altura da peça.",
      privacy: "Foto e STL não saem do seu computador. Se entrar na lista, só vai um resumo em texto."
    },
    shop: {
      kicker: "O que vem depois",
      title: "A loja, camada por camada",
      lead: "O checkout, as cores de filamento e os pedidos com o seu nome ainda estão na mesa de impressão. Até lá, a lista de espera é a porta.",
      items: [
        "Pagamento e frete para Portugal, UE e Brasil",
        "Escolha de cor PLA / PETG",
        "Chaveiros com o seu texto, configuração rápida",
        "Figures em kit (para montar) ou já coladas e lixadas",
        "Pedido especial para peças grandes de cosplay"
      ],
      asideTitle: "Bambu Lab A2L",
      aside:
        "Impressora de grande formato, boa para peça grande e para o detalhe das figures em várias partes. Filamento de cor sólida — a gente não pinta de fábrica; o PLA já chega com cara de objeto pronto."
    },
    waitlist: {
      kicker: "Passo zero",
      title: "Um e-mail. Zero spam.",
      lead: "Sem conta, sem app. Só a abertura da loja, peças novas, e a chance de dizer qual nicho você quer ver primeiro.",
      note: "Se você já enviou o e-mail acima, está feito — não precisa repetir."
    },
    privacy: {
      title: "Dados",
      body: "Guardamos o e-mail, o nome se você der, o idioma da página, os nichos que marcar e, se usar o orçamento, um resumo em texto. Foto e STL ficam no seu browser. Só para avisar da loja e de peças novas. Não vendemos lista. Para apagar seus dados, responda qualquer e-mail nosso e peça a remoção."
    },
    footer: {
      mark: "FORMA",
      tag: "ateliê 3D",
      rights: "Peças originais. Sem licenças oficiais de anime, HQ ou jogos.",
      gcode: "; end of print — thanks for waiting",
      instagram: "Instagram"
    }
  },
  en: {
    meta: {
      title: "FORMA — 3D printing atelier",
      description:
        "Parts printed on a Bambu Lab A2L: custom keychains, anime and comic figurines, miniatures, décor and props. Join the shop waitlist."
    },
    ticker:
      "; PRINTER: Bambu Lab A2L   ; MATERIAL: PLA · PETG   ; MODE: multi-part   ; STATUS: printing the shop   ; NICHES: 5",
    nav: {
      niches: "Niches",
      catalog: "Catalog",
      quote: "Quote",
      shop: "The shop",
      waitlist: "Waitlist",
      langLabel: "Language"
    },
    hero: {
      kicker: "3D printing atelier",
      title: "We're still printing the shop.",
      lead: "Made on a Bambu Lab A2L — named keychains, multi-part figurines with serious detail, miniatures, desk objects and large-format props. Leave your email. We'll write when you can order.",
      printerCaption: "Print head in motion · layer by layer"
    },
    form: {
      email: "Email",
      emailPlaceholder: "your email",
      name: "Name (optional)",
      namePlaceholder: "what to call you",
      interest: "What you're into",
      submit: "Notify me",
      sending: "Sending…",
      successTitle: "You're on the list.",
      success: "We'll email you when the shop opens. Until then, the catalog below is what is already coming off the A2L.",
      error: "Could not send just now. Try again, or set an email in js/config.js if you own this site.",
      missingConfig:
        "This site has no destination email yet. Open js/config.js and fill in ownerEmail (FormSubmit) or formspreeId.",
      consent:
        "I agree to get emails from FORMA about the shop opening and new pieces. I can leave whenever I want.",
      consentError: "We need your ok before we write.",
      invalidEmail: "That email does not look valid.",
      privacyLink: "How we handle data",
      required: "required"
    },
    stats: {
      printer: "Bambu Lab A2L",
      printerHint: "large format, fine detail",
      parts: "Multi-part",
      partsHint: "assembled and finished",
      langs: "PT · BR · EN",
      langsHint: "three languages from day one",
      list: "Email only",
      listHint: "no spam, no account"
    },
    niches: {
      kicker: "Five product lines",
      title: "Five niches, one printer.",
      lead: "The A2L can hold all five: from a 4 cm keychain to a stage helm. Pick what you want to see first — the waitlist stores that interest.",
      keychains: {
        title: "Personalized keychains",
        desc: "Raised initials, names, mascots and small parts with a clean finish. Built for gifts and merch."
      },
      figurines: {
        title: "Anime & comic figurines",
        desc: "Complex, high-detail models printed in pieces and assembled. No official licences — original work or commissions only."
      },
      miniatures: {
        title: "Tabletop miniatures",
        desc: "28–32 mm scale for RPG and wargames: wyrms, heroes and packs for your campaign."
      },
      decor: {
        title: "Home décor & desk",
        desc: "Faceted planters, organizers, cable nests and objects that survive a real desk."
      },
      props: {
        title: "Cosplay & large format",
        desc: "A2L volume for helms, hilts, display stands and stage pieces split across parts."
      }
    },
    catalog: {
      kicker: "Pieces that already exist",
      title: "In the catalog now",
      lead: "This is not the final shop — it is what is already printing, and can be requested by email until checkout is live.",
      filterAll: "All",
      from: "from",
      quote: "on request",
      empty: "Nothing in this niche yet. Join the list and tell us what you want to see.",
      notify: "Tell me",
      currency: "€",
      status: {
        available: "Ready to ship",
        "made-to-order": "Made to order",
        coming: "Coming soon"
      }
    },
    quote: {
      kicker: "; COST ESTIMATE",
      title: "What does it cost to print?",
      lead: "A photo cannot measure filament or machine time. Real cost comes from 3D volume and slicing. No cloud: this browser estimates against the A2L bed (330 × 320 × 325 mm).",
      tabPhoto: "Reference photo",
      tabStl: "STL file",
      photoHelp: "A photo gives a price band. Image-to-3D APIs (Meshy, Tripo, PrintPal) build a mesh, but they do not slice or validate factory cost.",
      stlHelp: "Drop a .stl. We measure volume, bounding box and whether it fits the A2L. Infill and supports are a guess — not an Orca/Bambu slice.",
      dropPhoto: "Drop a photo or click to choose",
      dropStl: "Drop a .stl or click to choose",
      height: "Target height",
      material: "Material",
      infill: "Infill",
      detail: "Detail",
      detailSimple: "Simple",
      detailNormal: "Normal",
      detailComplex: "Complex / multi-part",
      niche: "Niche",
      resultTitle: "FORMA estimate",
      priceFrom: "from",
      priceTo: "to",
      grams: "filament",
      time: "machine time",
      size: "box",
      volume: "volume",
      fitOk: "Fits the A2L in one piece",
      fitNo: "Does not fit in one piece — split or scale down",
      notQuote: "Not a final price: no real slice, no measured supports, no failures or finishing.",
      sendWaitlist: "Take this estimate to the waitlist",
      hours: "h",
      fileError: "Could not read that file. Try an STL exported from a slicer.",
      tooBig: "File too large (max 25 MB).",
      noFile: "Choose a file first.",
      photoNeedHeight: "Set the part height.",
      privacy: "Photo and STL stay on your computer. If you join the list, only a text summary is sent."
    },
    shop: {
      kicker: "What comes next",
      title: "The shop, layer by layer",
      lead: "Checkout, filament colours and named orders are still on the build plate. Until then, the waitlist is the door.",
      items: [
        "Payment and shipping to Portugal, the EU and Brazil",
        "PLA / PETG colour choice",
        "Keychains with your text, quick setup",
        "Figures as kits (to assemble) or already glued and sanded",
        "A commission form for large cosplay parts"
      ],
      asideTitle: "Bambu Lab A2L",
      aside:
        "A large-format printer, good for big parts and for the detail on multi-part figures. Solid filament colour — we do not paint by default; PLA already reads as a finished object."
    },
    waitlist: {
      kicker: "Step zero",
      title: "One email. No spam.",
      lead: "No account, no app. Just the shop opening, new pieces, and a way to say which niche you want to see first.",
      note: "If you already sent the form above, you're done — no need to repeat it."
    },
    privacy: {
      title: "Data",
      body: "We keep your email, your name if you give it, the page language, the niches you tick and, if you use the quote tool, a text summary. Photo and STL stay in your browser. Only to tell you about the shop and new pieces. We do not sell lists. To erase your data, reply to any email from us and ask for removal."
    },
    footer: {
      mark: "FORMA",
      tag: "3D atelier",
      rights: "Original pieces. No official anime, comic or game licences.",
      gcode: "; end of print — thanks for waiting",
      instagram: "Instagram"
    }
  }
};
