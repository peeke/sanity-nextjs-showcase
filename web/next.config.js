const withCSS = require('@zeit/next-css')
const client = require('./client')
const groq = require('groq')
const isProduction = process.env.NODE_ENV === 'production'

const query = groq`
  *[defined(slug)] {
    ...,
    disallowRobot,
    includeInSitemap,
    title,
    _updatedAt
  }
`

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
  },
  exportPathMap: function () {
    return client.fetch(query).then(res => {
      return (res || []).reduce((result, { slug, _updatedAt }) => {
        return {
          ...result,
          [slug.current === '/' ? '/' : '/' + slug.current]: {
            page: slug.current === '/' ? '/' : '/[slug]',
            query: { slug: slug.current },
            _updatedAt,
            includeInSitemap: true,
            disallowRobot: false
          }
        }
      }, {})
    }).catch(err => {
      throw err
    })
  }
})
