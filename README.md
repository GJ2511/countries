Countries-Api

Module which expose some usefull Api's that can be very handy when dealing with countries

Country JSON will be like

```json
{
  "name": {
    "common": "Aruba",
    "official": "Aruba",
    "native": {
      "nld": {
        "official": "Aruba",
        "common": "Aruba"
      },
      "pap": {
        "official": "Aruba",
        "common": "Aruba"
      }
    }
  },
  "tld": [".aw"],
  "cca2": "AW",
  "ccn3": "533",
  "cca3": "ABW",
  "cioc": "ARU",
  "currency": ["AWG"],
  "callingCode": ["297"],
  "capital": "Oranjestad",
  "altSpellings": ["AW"],
  "region": "Americas",
  "subregion": "Caribbean",
  "languages": {
    "nld": "Dutch",
    "pap": "Papiamento"
  },
  "translations": {
    "deu": {"official": "Aruba", "common": "Aruba"},
    "fra": {"official": "Aruba", "common": "Aruba"},
    "hrv": {"official": "Aruba", "common": "Aruba"},
    "ita": {"official": "Aruba", "common": "Aruba"},
    "jpn": {"official": "\u30a2\u30eb\u30d0", "common": "\u30a2\u30eb\u30d0"},
    "nld": {"official": "Aruba", "common": "Aruba"},
    "por": {"official": "Aruba", "common": "Aruba"},
    "rus": {"official": "\u0410\u0440\u0443\u0431\u0430", "common": "\u0410\u0440\u0443\u0431\u0430"},
    "spa": {"official": "Aruba", "common": "Aruba"},
    "fin": {"official": "Aruba", "common": "Aruba"},
    "zho": {"official": "\u963F\u9C81\u5DF4", "common": "\u963F\u9C81\u5DF4"}
  },
  "latlng": [12.5, -69.96666666],
  "demonym": "Aruban",
  "landlocked": false,
  "borders": [],
  "area": 180
}
```

Author: [Gaurav Joshi](https://github.com/GJ2511/countries)

- [Countries-Api](#start)
  - [Methods](#methods)
    - [`findByCountryCode(countryCode)`](#user-content-findbycountrycodecountrycode)

## Start
```js
const Countries = require('Countries-Api');
```

Uses https://github.com/GJ2511/response-format module for formating results

## Methods

### `findByCountryCode(countryCode)`

Returns a 200 Success where:
- `statusCode` - 200
- `error` - false
- `message` - optional message.
- `data` - optional payload.

```js
Countries.findByCountryCode('AW');
```

Generates the following response payload:

```json
{"statusCode":200,"error":false,"data":[{"name":{"common":"Aruba","official":"Aruba","native":{"nld":{"official":"Aruba","common":"Aruba"},"pap":{"official":"Aruba","common":"Aruba"}}},"tld":[".aw"],"cca2":"AW","ccn3":"533","cca3":"ABW","cioc":"ARU","currency":["AWG"],"callingCode":["297"],"capital":"Oranjestad","altSpellings":["AW"],"region":"Americas","subregion":"Caribbean","languages":{"nld":"Dutch","pap":"Papiamento"},"translations":{"deu":{"official":"Aruba","common":"Aruba"},"fra":{"official":"Aruba","common":"Aruba"},"hrv":{"official":"Aruba","common":"Aruba"},"ita":{"official":"Aruba","common":"Aruba"},"jpn":{"official":"アルバ","common":"アルバ"},"nld":{"official":"Aruba","common":"Aruba"},"por":{"official":"Aruba","common":"Aruba"},"rus":{"official":"Аруба","common":"Аруба"},"spa":{"official":"Aruba","common":"Aruba"},"fin":{"official":"Aruba","common":"Aruba"},"zho":{"official":"阿鲁巴","common":"阿鲁巴"}},"latlng":[12.5,-69.96666666],"demonym":"Aruban","landlocked":false,"borders":[],"area":180}],"message":"OK"}
```
### `findByCCN3(ccn3)`

Returns a 200 Success where:
- `statusCode` - 200
- `error` - false
- `message` - optional message.
- `data` - optional payload.

```js
Countries.findByCountryCode(533);
```

Generates the same response as: [`findByCountryCode(countryCode)`](#user-content-findbycountrycodecountrycode)