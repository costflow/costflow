---
id: config
title: Configuration
sidebar_label: Configuration
---

Configuration for Costflow Desktop Apps. These configurations can be found on the `Settings` page.

## Costflow Syntax config file path

The file path of the Costflow syntax config file, should be a JSON file. Here is an example of the config file:

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
    "spotify": "@Spotify 16.98 USD visa > subscription"
  }
}
```

## Beancount file path

The file path of the Beancount file. **Recommended to use a new file for Costflow, then you can import the file to your main Beancount file.**

### Supported dynamic file path

| Variable | Description                    | Output           |
| -------- | ------------------------------ | ---------------- |
| YY       | Two-digit year                 | 23               |
| YYYY     | Four-digit year                | 2023             |
| M        | The month, beginning at 1      | 1-12             |
| MM       | The month, 2-digits            | 01-12            |
| MMM      | The abbreviated month name     | Jan-Dec          |
| MMMM     | The full month name            | January-December |
| D        | The day of the month           | 1-31             |
| DD       | The day of the month, 2-digits | 01-31            |

For example, if the file path is `/Users/leplay/DEV/Costflow/demo/{{YYYY}}/{{MM}}.bean` and the posting date is 2023-11-11, the output will be saved to `/Users/leplay/DEV/Costflow/demo/2023/11.bean`.

## Costflow index file path (Optional)

If you use dynamic file path for Beancount file, the file will be generated automatically according to the posting date. All the generated files will be listed in the Costflow index file. So you only need to include the index file in your main Beancount file.

## Telegram bot token (Optional)

The token of your Telegram bot. Once the token is set, you can start your own Telegram bot right in the app, so you can keep plain-text bookkeeping anytime, anywhere by sending messages to your bot.

You can get the token from [@BotFather](https://t.me/botfather).

Note:

- Do not share the bot with others.
- Launching the bot requires a network connection to Telegram.
