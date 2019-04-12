const test = require('tape')
const { 'api-long-short-ratio': LSR } = require('.')

//
// Create a stubbed response object
//
const res = {
  send: (body) => {
    return body
  }
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

  const { data } = await LSR(req, res)

  const keys = Object.keys(data)

  const validKeys = ['long', 'short', 'timestamp', 'ratio', 'date']

  t.ok(data)

  t.deepEquals(keys, validKeys)

  t.end()
})

test('failing LSR for XXX', async t => {
  const req = {
    body: {
      asset: 'XXX'
    }
  }

  const { err } = await LSR(req, res)

  t.ok(err)
  t.equals(err, `Request failed: response body was null.`)
  t.end()
})
