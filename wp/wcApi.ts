const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default

const wcApi = new WooCommerceRestApi({
  url: process.env.WP_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3'
})

export default wcApi
