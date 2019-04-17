const cors = require('cors-for-cloud-functions')
const LSR = require('metric-long-short-ratios')
const lsr = new LSR()

const ERR_NO_ASSET = `An asset is required. BTC || ETH || LTC || XRP`

exports['api-long-short-ratio'] = async (request, response) => {
  const { req, res, isOptions } = cors(request, response)

  if (isOptions) return res.status(204).send('')

  const {
    body,
    query
  } = req

  const asset = body.asset || query.asset

  if (!asset) return res.status(404).send({ err: ERR_NO_ASSET })

  const result = await lsr.ratio({ asset })

  const { err, data } = result

  if (err) return res.status(404).send({ err })

  return res.status(200).send({ data })
}
