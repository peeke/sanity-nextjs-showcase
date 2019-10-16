import groq from 'groq'
import client from '../client'

export async function getConfig() {
  const siteConfigQuery = groq`
    *[_id == "global-config"] {
      ...,
      logo {asset->{extension, url}},
      mainNavigation[] -> {
        ...,
        "title": page->title
      },
      footerNavigation[] -> {
        ...,
        "title": page->title
      }
    }[0]
  `

  // Add site config from sanity
  return client.fetch(siteConfigQuery)
}
