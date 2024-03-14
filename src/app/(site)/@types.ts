export type Show = {
  id: string
  titulo: string
  image: {
    src: string
    alt: string
  }
  dataInicio: Date
  dataFim: Date
  local: string
  linkLocal: string
  linkCompra: string
}

export type PostInstagram = {
  id: string
  url: string
}
