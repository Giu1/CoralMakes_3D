# Como mudar o catálogo

Só dois sítios: a pasta **images** e o ficheiro **js/products.js**.
Não mexas em mais nada para vender um produto.

---

## 1. Pôr a foto

1. Copia a foto para a pasta `images`.
2. Nome simples, sem espaços: `chaveiro.jpg`

JPG, PNG ou WEBP. Uma foto de frente, fundo limpo, fica melhor.

---

## 2. Ligar a foto e o texto

Abre `js/products.js`. Cada produto é um bloco `{ ... }`.

Muda só estas linhas:

```
image: "images/chaveiro.jpg",
price: 8,
name: {
  "pt-BR": "Chaveiro de iniciais",
  "pt-PT": "Chaveiro de iniciais",
  en: "Initials keychain"
},
blurb: {
  "pt-BR": "Duas letras em relevo. PLA fosco.",
  "pt-PT": "Duas letras em relevo. PLA mate.",
  en: "Two raised letters. Matte PLA."
}
```

- `image` — caminho da foto. Se ficares `""`, o site usa o desenho geométrico.
- `price` — número em euros. Se não tiveres preço: `null` (aparece “sob consulta”).
- `status` — `available` (pronto), `made-to-order` (sob encomenda) ou `coming` (em breve).
- `niche` — `keychains` | `figurines` | `miniatures` | `decor` | `props`

Se só vendes em português, podes escrever assim (vale para as 3 línguas):

```
name: "Chaveiro de iniciais",
blurb: "Duas letras em relevo. PLA fosco.",
```

---

## 3. Adicionar um produto novo

1. Copia um bloco inteiro, da `{` até `},`
2. Cola a seguir ao último produto (antes do `];`)
3. Muda o `id` — minúsculas, sem espaços: `vaso-lua`
4. Muda foto, nome, texto e preço

---

## 4. Apagar um produto

Apaga o bloco `{ ... },` inteiro desse produto.

---

## 5. Ver no ecrã

Guarda o ficheiro. Recarrega o site (`F5`).

Se o site já está no GitHub: envia a foto nova **e** o `js/products.js` atualizado. Espera cerca de 1 minuto.

---

## Foto noutro sítio (Imgur, Drive, Cloudinary)

Em vez de `images/...` podes colar um link direto da imagem:

```
image: "https://i.imgur.com/xxxxxxxx.jpg",
```

O link tem de abrir a foto sozinha (terminar em .jpg / .png), não a página do álbum.
