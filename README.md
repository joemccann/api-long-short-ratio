# SYNOPSIS

☁️ REST-ful API for fetching the Bitfinex Long vs Short ratio for BTC, ETH, LTC and XRP via Google Cloud Functions.

## REQUIREMENTS

1. A Google Cloud Account.
2. Billing Enabled.
3. API Access Enabled.
4. `gcloud` CLI installed and in your `$PATH`.
5. A preferred configuration created ( `gcloud init` ).

## USAGE

```sh
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-long-short-ratio?asset=BTC
```

Or, if you prefer a `POST`:

```sh
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-long-short-ratio --data '{"asset": "BTC"}' -H "Content-Type: application/json"
```

The expected response:

```js
{
  "data": {
    "long": 301751.81084729,
    "short": 146453.13477503,
    "timestamp": 1555083480000,
    "ratio": 2.0603984428931335,
    "date": "Fri Apr 12 2019 15:38:54 GMT+0000 (Coordinated Universal Time)"
  }
}
```

Or in the case there is a failure:

```js
{
  "err": "Request failed: response body was null."
}
```

## API

```sh
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-long-short-ratio?asset=BTC
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-long-short-ratio?asset=ETH
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-long-short-ratio?asset=LTC
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-long-short-ratio?asset=XRP
```

## DEPLOY

First, fork or clone this repo, then:

```sh
npm i
```

Now, deploy it GCP, run the following command in the root of this repository:

```sh
gcloud functions deploy api-long-short-ratio --runtime nodejs10 --trigger-http --memory 128MB
```

You should receive a YAML like response in your terminal including the URL for the Cloud Function.

## TESTS

```sh
npm i -D
npm test
```

## AUTHORS

- [Joe McCann](https://twitter.com/joemccann)

## LICENSE

MIT