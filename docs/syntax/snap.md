---
id: snap
title: Snap
sidebar_label: Snap
---


`$` is for getting the latest exchange rate of currencies or the latest price of cryptocurrencies and stocks. The result will be returned directly, **should not** be saved to the ledger file. The syntax:

```
$ [AMOUNT] COMMODITY_A [to] COMMODITY_B
```



Explanation:

- `COMMODITY_B`  is optional, the default value is what you set before;
- `AMOUNT` is optional, the default amount is 1;
- The word "to" is only for understanding, which can be omitted;
- The priority is the same with Price:
  1. Firstly, Costflow will check whether `COMMODITY_A` is one of [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)  currency codes. If it is, get the exchange rate;
  2. Secondly, Costflow will check whether COMMODITY_A is one of cryptocurrency codes that Alpha Vantage support ([support list](https://www.alphavantage.co/digital_currency_list/)). If it is, get the cryptocurrency price;
  3. Finally, Costflow will treat `COMMODITY_A` as a stock code and get its price. Only stocks listed on NASDAQ and NYSE are supported in this version. Note, `COMMODITY_B` **should not** be set, if `COMMODITY_A` is a stock code, `COMMODITY_B` is inherited from the stock market.



Examples:

```javascript
// Input, get the exchange rate automatically.
// The word "to" is only for understanding, can be omitted.
$ CAD to USD
// Return
1 CAD = 0.7637 USD

// Input, get 10 Bitcoin price
$ 10 BTC
// Return
10 BTC = 119466.4 USD

// Input, get Apple stock price
$ AAPL
// Return
AAPL 199.8 USD (-0.030%)

```
