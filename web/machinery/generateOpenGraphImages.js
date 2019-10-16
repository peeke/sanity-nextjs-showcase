import client from '../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export default function generateOpenGraphImages(openGraphImage, alt) {
  if (!openGraphImage) return []
  return [
    {
      url: builder
        .image(openGraphImage)
        .width(800)
        .height(600)
        .url(),
      width: 800,
      height: 600,
      alt
    },
    {
      // Facebook recommended size
      url: builder
        .image(openGraphImage)
        .width(1200)
        .height(630)
        .url(),
      width: 1200,
      height: 630,
      alt
    },
    {
      // Square 1:1
      url: builder
        .image(openGraphImage)
        .width(600)
        .height(600)
        .url(),
      width: 600,
      height: 600,
      alt
    }
  ]
}
