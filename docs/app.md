# Podcast Manager

### Descrição

Um app estilo netflix, aonde seja possível centralizar diferentes episódios de podcasts separados por categoria.

### Domínio

Podcasts feitos em vídeo.

### Features

- Listar os episódios podcasts em sessões de categorias.
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast.

## Como

#### Feature

Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categoria

```js
[
  {
    podcastName: "flow",
    episodeName: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover:
      "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saude", "esporte"],
  },
  {
    podcastName: "flow",
    episodeName: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover:
      "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saude", "esporte"],
  },
];
```
