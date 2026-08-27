// Eaê senhores!
// Aqui eu implementei a lógica do contentful
// para deixar a página de projetos mais dinâmica.
// Espero que tenham gostado!

import { createClient, type Entry, type EntryFieldTypes } from 'contentful'
import type { Project } from '@/types/project'

/* ── Cliente Contentful ───────────────────────────────────── */

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API_KEY,
})

/* ── Esqueleto do Contentful para o TypeScript ──────────────── */

interface ProjectSkeleton {
  contentTypeId: 'project'

  fields: {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    identifier: EntryFieldTypes.Text
    summary: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    body: EntryFieldTypes.Text
    github: EntryFieldTypes.Text
    url: EntryFieldTypes.Text
    image: EntryFieldTypes.Text
    languages: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    frameworks: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  }
}

/* ── Função de transformação ──────────────────────────────── */

function mapProject(entry: Entry<ProjectSkeleton>): Project {
  const fields = entry.fields

  return {
    id: entry.sys.id,
    identifier: (fields.identifier as string) ?? '',
    title: (fields.title as string) ?? '',
    slug: (fields.slug as string) ?? '',
    summary: (fields.summary as string | undefined) ?? undefined,
    description: (fields.description as string) ?? '',
    body: (fields.body as string | undefined) ?? undefined,
    github: (fields.github as string | undefined) ?? undefined,
    url: (fields.url as string | undefined) ?? undefined,
    image: (fields.image as string | undefined) ?? undefined,
    languages: (fields.languages as string[] | undefined) ?? [],
    frameworks: (fields.frameworks as string[] | undefined) ?? [],
  }
}

/* ── API pública ──────────────────────────────────────────── */

/** Retorna todos os projetos publicados. */
export async function getProjects(): Promise<Project[]> {
  const response = await client.getEntries<ProjectSkeleton>({
    content_type: 'project',
  })

  return response.items.map(mapProject)
}

/** Busca um projeto pelo slug. */
export async function getProjectBySlug(
  slug: string,
): Promise<Project | null> {
  const response = await client.getEntries<ProjectSkeleton>({
    content_type: 'project',
    'fields.slug': slug,
    limit: 1,
  })

  const item = response.items[0]
  return item ? mapProject(item) : null
}

// PS:
// Obrigado @oscarkemuel por ter me ensinado programação
// você foi crucial para o meu estado de hoje, pois
// através do seu impulso de ter me ensinado a programar
// com next.js, lá naquele protótipo de portfólio que clonei
// do template do chronark, que em seguida você criou o blog
// no meu repositório com contentful. Hoje, estou aqui, desenvolvendo
// muitas coisas, inclusive em áreas que nunca imaginei que iria estar
// como IA e também microcontroladores.
// Muito obrigado, Que a Paz esteja com você!