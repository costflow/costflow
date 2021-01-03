---
id: note
title: Note
sidebar_label: Note
---

Syntax:

```
[YYYY-MM-DD] note ACCOUNT DESCRIPTION
```



Explanation:

- `ACCOUNT` can be the full name in your ledger file, or they can be the abbreviations you set before;
- `DESCRIPTION` can be any strings, no need double-quotes.



Examples

```javascript
// Input
note bofa Called about fraudulent card.
// Output
2019-07-01 note Assets:US:BofA:Checking "Called about fraudulent card."
```
