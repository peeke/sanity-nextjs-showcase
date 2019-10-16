import React, {Component} from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import RenderSections from '../components/RenderSections'
import { useSiteConfig } from '../machinery/siteConfig'
import { getPage } from '../services/page';
import generateOpenGraphImages from '../machinery/generateOpenGraphImages';

Page.getInitialProps = async function({ query: { page } }) {
  if (page && page !== '/') return getPage(page)
  return null
}

export default function Page({
  title = 'Missing title',
  description,
  disallowRobots,
  openGraphImage,
  content = [],
  slug
}) {
  const config = useSiteConfig()
  const openGraphImages = generateOpenGraphImages(openGraphImage, title)

  return (
    <Layout>
      <NextSeo
        config={{
          title,
          titleTemplate: `${config.title} | %s`,
          description,
          canonical: config.url && `${config.url}/${slug}`,
          openGraph: {
            images: openGraphImages
          },
          noindex: disallowRobots
        }}
      />
      {content && <RenderSections sections={content} />}
    </Layout>
  )
}
