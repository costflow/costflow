---
id: config
title: Configuration
sidebar_label: Configuration
---

To make the syntax easier, users will be asked to fill the following fields to config:

| Config       | Required | Type   | Detail                                                                                                                                                                                                          | Example                                            |
| ------------ | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| mode         | Y        | String | Output format, only support `beancount` in this version。                                                                                                                                                       | beancount                                          |
| currency     | Y        | String | Default currency code, in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217)。                                                                                                                           | CNY                                                |
| timezone     | N        | String | Timezone, in [IANA format](https://www.iana.org/time-zones)。                                                                                                                                                   | Asia/Hong_Kong                                     |
| indent       | N        | Number | Indent length, for transaction commands.                                                                                                                                                                        | 2                                                  |
| lineLength   | N        | Number | The length before currency code(include), for transaction commands.                                                                                                                                             | 80                                                 |
| tag          | N        | String | Apply tag(s) to every transaction automatically. Start with #, separated with blank space if multiple.                                                                                                          | \#trip \#food                                      |
| link         | N        | String | Apply link(s) to every transaction automatically. Start with ^, separated with blank space if multiple.                                                                                                         | ^project-x                                         |
| insertTime   | N        | String | Insert time to every transaction, the value is the position to insert. Currently only `metadata` allowed.                                                                                                       | metadata                                           |
| alphavantage | N        | String | If you want to use pricing or \$ command, you should [apply](https://www.alphavantage.co/support/) your own Alpha Vantage API token..                                                                           | TRBZ2Y1D7TN0ZHFO                                   |
| account      | N        | Object | Use `key: value` format. Replacing the key with the value of your input. The value is the account name in your legder file.                                                                                     | `{"bofa": "Assets:US:BofA:Checking"}`              |
| formula      | N        | Object | Use `key: value` format. Formula will parse the input first and run Costflow Syntax again. The key is the formula keyword, some variables can be used in the value. Check [formula docs](/docs/syntax/formula). | `{"gcp": "@Google {{ amount }} USD visa > cloud"}` |

Here is the config will be used in following examples.

```json
{
  "mode": "beancount",
  "currency": "CNY",
  "timezone": "Asia/Hong_Kong",
  "tag": "#costflow",
  "link": "",
  "indent": 2,
  "lineLength": 60,
  "insertTime": "metadata",
  "defaultAccount": "Assets:BofA",
  "upperCaseAsCurrencyCode": true,
  "alphavantage": "YOUR_ALPHAVANTAGE_API_KEY",
  "account": {
    "boc": "Assets:CN:BOC",
    "bofa": "Assets:US:BofA:Checking",
    "cloud": "Expenses:Cloud",
    "cmb": "Liabilities:CreditCard:CMB",
    "eob": "Equity:Opening-Balances",
    "food": "Expenses:Food",
    "phone": "Expenses:Home:Phone",
    "rent": "Expenses:Home:Rent",
    "rx": "Assets:Receivables:X",
    "ry": "Assets:Receivables:Y",
    "subscription": "Expenses:Subscriptions",
    "visa": "Liabilities:CreditCard:Visa"
  },
  "formula": {
    "☕️": "@Leplays ☕️ {{ amount }} Liabilities:CreditCard:Visa > Expenses:Coffee",
    "c2f": "{{ pre }} cmb > food",
    "aws": "@AWS {{ amount }} USD visa > cloud",
    "spotify": "@Spotify 15.98 USD visa > subscription"
  }
}
```
