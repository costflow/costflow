---
id: balance
title: Balance
sidebar_label: Balance
---

Syntax:

```
[YYYY-MM-DD] balance ACCOUNT AMOUNT [COMMODITY]
```



Explanation:

- `ACCOUNT` can be the full name in your ledger file, or they can be the abbreviations you set before;
- `COMMODITY`  is optional, the default value is what you set in config;



Examples:

```javascript
// Input
balance bofa 360
// Output
2019-07-01 balance Assets:US:BofA:Checking 360 USD

// Input with simpler date format. Because Beancount applies the time of all non-transaction directives at the beginning of its date, we usually use the next day for this directive. https://docs.google.com/document/d/1wAMVrKIA2qtRGmoVDSUBJGmYZSygUaR0uOMW1GV3YE0/edit#heading=h.l0pvgeniwvq8
tmr balance bofa 360
// Output
2019-07-02 balance Assets:US:BofA:Checking 360 USD
```
