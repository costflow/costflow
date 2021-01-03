---
id: option
title: Option
sidebar_label: Option
---

Syntax:

```
option NAME VALUE
```

`NAME` and `VALUE` should be double-quotes strings, if the `NAME` is one word without whitespace, all double-quotes can be omitted.


Examples:

```javascript
// Input
option title Example Costflow file
// Output
option "title" "Example Costflow file"

// Input
option operating_currency CNY
// Output
option "operating_currency" "CNY"

// Input
option "conversion_currency" "NOTHING"
// Output
option "conversion_currency" "NOTHING"

```
