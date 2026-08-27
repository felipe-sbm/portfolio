/**
 * Interface de domínio do portfólio, no caso, sem dependência do Contentful.
 * O service contentful.ts traduz os entries do CMS para este formato.
 */
export interface Project {
  /** ID único do Contentful (sys.id) */
  id: string

  /** Identificador amigável para casar com chaves de i18n (ex.: "inkstone") */
  identifier: string

  /** Título do projeto */
  title: string

  /** Slug usado na URL (ex.: "inkstone") */
  slug: string

  /** Resumo curto (exibido no topo da página de detalhe) */
  summary?: string

  /** Descrição curta (exibida no card) */
  description: string

  /** Conteúdo em Markdown (corpo do projeto) */
  body?: string

  /** Link para o repositório GitHub */
  github?: string

  /** Link para o site do projeto */
  url?: string

  /** URL da imagem de capa */
  image?: string

  /** Linguagens usadas */
  languages: string[]

  /** Frameworks usados */
  frameworks: string[]
}