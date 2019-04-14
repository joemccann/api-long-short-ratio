const test = require('tape')
const { 'api-long-short-ratio': LSR } = require('.')

//
// Create a mock request and response method
//

function status (code) {
  this.statusCode = code
  return this
}

function send (obj) {
  const body = { ...this, ...obj }
  return body
}

const res = {
  status,
  send
}

test('sanity', t => {
  t.ok(true)
  t.end()
})

test('passing LSR for BTC', async t => {
  const req = {
    body: {
      asset: 'BTC'
    }
  }

  const { err, data, statusCode } = await LSR(req, res)

  t.ok(data)
  t.ok(!err)
  t.equals(statusCode, 200)

  const keys = Object.keys(data)
  const validKeys = ['long', 'short', 'timestamp', 'ratio', 'date']

  t.deepEquals(keys, validKeys)
  t.end()
})

test('failing LSR for XXX', async t => {
  const req = {
    body: {
      asset: 'XXX'
    }
  }

  const { err, data, statusCode } = await LSR(req, res)

  t.ok(!data)
  t.ok(err)
  t.equals(statusCode, 404)
  t.equals(err, `Request failed: response body was null.`)
  t.end()
})
