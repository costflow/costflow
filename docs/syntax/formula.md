---
id: formula
title: Formula
sidebar_label: Formula
---


Added in v0.3. Formula is for making creating transactions with patterns easier, such as Netflix and Spotify subscriptions,  Uber and Lyft bills, even salaries.

Like account replacement, a config is needed before start using formula. The formula config is `key: value` format. The key is the formula name (can't be a command name), the value is the content to parse with Costflow Syntax. Some variables are allowed in the value. The variable should be wrapped in double curly braces `{{ }}`. The variables allowed in current version:

- amount: the first number in the input. You can use some basic math operations with the amount, e.g. `amount * 0.8`;
- pre: the original input excludes the formula name;

More variables will be supported in future versions.

The way formula works is: convert the formula based on its config, then parse the value with Costflow Syntax all over again. So the value should follow Costflow Syntax too.

For example, we wrote a formula config for AWS transaction:

```json
{
  "aws": "@AWS {{ amount }} USD visa > cloud"
}
```

If we run `f aws 60` or just `aws 60` in Costflow Hub / CLI / Playground, the formula will run like this:

![Formula flowchart](/img/formula-example-1.png)

Formula is created for transactions, but it can be used for other directives. Here are some  formula config examples:

```json
{
  "formula": {
    "aws": "@AWS {{ amount }} USD visa > aws",
    "cashback": "Airline Cash Back {{ amount }} visa > {{ amount * 0.95 }} expenseFlight + {{ amount * 0.05 }} incomeCashback",
    "netflix": "@Netflix 15.99 USD visa > netflix",
    "split": "Dinner {{ amount }} visa > food + rx + ry",
    "spotify": "@Spotify 14.99 USD visa > spotify",
    "uber": "@Uber {{ amount }} USD visa > uber",
    "rent": "Rent {{ amount }} USD visa > rent",
    "v2f": "{{ pre }} visa > food",
    "☕️": "@Leplays ☕️ {{ amount }}  Liabilities:CreditCard:Visa > Expenses:Coffee"
  }
}
```
