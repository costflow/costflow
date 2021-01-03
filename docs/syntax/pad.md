---
id: pad
title: Pad
sidebar_label: Pad
---

Syntax:

```
[YYYY-MM-DD] pad ACCOUNT ACCOUNT_PAD
```


Explanation:

- ACCOUNT and ACCOUNT_PAD can be the full name in your ledger file, or they can be the abbreviations you set before;
- Use pad carefully. Check [Beancount docs](https://beancount.github.io/docs/beancount_language_syntax.html#pad).


Examples:

```javascript
// Input
pad bofa eob
// Output
2019-07-01 pad Assets:US:BofA:Checking Equity:Opening-Balances
```
