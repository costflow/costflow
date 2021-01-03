---
id: price
title: Price
sidebar_label: Price
---
Price

Syntax:

```
[YYYY-MM-DD] price COMMODITY_A [PRICE] [COMMODITY_B]
```


Explanation:

- `COMMODITY_B`  is optional, the default value is what you set before;
- Set the PRICE manually: just use a number as PRICE like Beancount;
- If there is no PRICE found, Costflow will automatically get the latest exchange rates of currencies, or the latest price of cryptocurrencies and stock [by Alpha Vantage](https://www.alphavantage.co/). The priority:
  1. Firstly, Costflow will check whether COMMODITY_A is one of [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)  currency codes. If it is, get the exchange rate;
  2. Secondly, Costflow will check whether COMMODITY_A is one of cryptocurrency codes that Alpha Vantage support ([support list](https://www.alphavantage.co/digital_currency_list/)). If it is, get the cryptocurrency price;
  3. Finally, Costflow will treat COMMODITY_A as a stock code and get its price. Only stocks listed on NASDAQ and NYSE are supported in this version. Note, COMMODITY_B **should not** be set, if COMMODITY_A is a stock code, COMMODITY_B is inherited from the stock market.



Examples:

```javascript
// #1 Input
2017-01-17 price USD 1.08 CAD
// #1 Output
2017-01-17 price USD 1.08 CAD

// #2 Input, get the exchange rate automatically. The word "to" is only for understanding, can be omitted.
price CAD to USD
// #2 Output
2019-07-01 price

// #3 Input, get Bitcoin price
price BTC
// #3 Output
2019-07-01 price BTC 11946.64 USD

// #4 Input, get Apple stock price
price AAPL
// #4 Output
2019-07-01 price AAPL 199.8 USD

```
