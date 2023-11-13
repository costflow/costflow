---
id: introduction
title: Costflow Desktop Apps
sidebar_label: Introduction
slug: /desktop-apps/
---

## Download

https://github.com/costflow/desktop/releases

## Features

- Open source;
- Quickly add entries using Costflow syntax;
- All file manipulation is done locally;
- Start your own Telegram bot right in the app, so you can keep plain-text bookkeeping anytime, anywhere;

## Configuration

### Costflow Syntax config file path

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
