---
id: event
title: Event
sidebar_label: Event
---

Syntax:

```
[YYYY-MM-DD] event NAME VALUE
```


Explanation:

- `NAME` and `VALUE` can use double-quotes like Beancount;
- If no double-quotes found, the first word (exclude date) will be saved as `NAME`, the rest part will be saved as `VALUE`;



Examples:

```javascript
// Input, traditional Beancount format
2017-01-02 event "location" "Paris, France"
// Output
2017-01-02 event "location" "Paris, France"

// Input, without double-quotes
event location Paris, France
// Output
2017-01-02 event "location" "Paris, France"
```
