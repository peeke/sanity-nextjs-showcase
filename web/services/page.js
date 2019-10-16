import groq from 'groq'
import client from '../client'

export async function getPage(slug) {
  const pageQuery = groq`
    *[_type == "page" && slug.current == $slug][0]{
      ...,
      content[] {
        ...,
        cta {
          ...,
          link->
        },
        ctas[] {
          ...,
          link->
        }
      }
    }
  `

  return await client.fetch(pageQuery, {slug})
}

export async function getFrontPage() {
  const pageQuery = groq`
    *[_id == "global-config"][0]{
      frontpage -> {
        ...,
        content[] {
          ...,
          cta {
            ...,
            link->
          },
          ctas[] {
            ...,
            link->
          }
        }
      }
    }
  `

  return (await client.fetch(pageQuery)).frontpage
}
