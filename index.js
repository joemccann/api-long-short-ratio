const LSR = require('metric-long-short-ratios')
const lsr = new LSR()

const ERR_NO_ASSET = `An asset is required. BTC || ETH || LTC || XRP`

exports['api-long-short-ratio'] = async (req, res) => {
  const {
    body,
    query
  } = req

  const asset = body.asset || query.asset

  if (!asset) return res.send({ err: ERR_NO_ASSET })

  const result = await lsr.ratio({ asset })

  const { err, data } = result

  if (err) return res.send({ err })

  return res.send({ data })
}
