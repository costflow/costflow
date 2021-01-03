---
id: introduction
title: Costflow Syntax
sidebar_label: Introduction
slug: /syntax/
---

Latest version: `v1.0`.

Costflow is a series of products for making plain text accounting easier, including `Syntax`, `Parser`, `CLI`, `Playground` and `Self-hosted Costflow Hub`, which let you keep accounting anytime, anywhere.

Costflow Syntax is the rule for parsing plain text to the accounting tools formats, such as Beancount, Ledger and hledger, etc.

You can try Costflow Syntax on [Costflow Playground](https://playground.costflow.io/) while you are reading. All products that support Costflow Syntax are listed on [Docs page](/docs/).

> Beancount is the only supported output format in current version.

## Features

- Simple transaction syntax.
- Account name replacements. E.g. bofa in your message will be replaced with Assets:US:BofA:Checking.
- Formula, make creating transactions with patterns easier, for sure.
- Get real time price for exchanging rate or stock, even cryptocurrency.
- Optional date input, the default value is "today" in your timezone.
- Optional Currency/Commodity code.
- Custom indent and line length.
- Insert time info to transactions.



## Commands

The 'command' is the first word/symbol of the texts (exclude date). Some commands are same with 'directives' in Beancount.

| Command                 | Description                                                                                                                                                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [\*](/docs/syntax/transaction)      | Completed transaction. Optional.                                                                                                                                                                                      |
| [!](/docs/syntax/transaction)       | Incomplete transaction.                                                                                                                                                                                               |
| [f](/docs/syntax/formula)           | Formula. Added in v0.3. For transactions with patterns.                                                                                                                                                               |
| [;](/docs/syntax/comment)           | Comment.                                                                                                                                                                  |
| [//](/docs/syntax/comment)          | Comment. The behavior of two comment symbols might be different (based on products' logic).                                                                                                                                                 |
| [open](/docs/syntax/open)           | Open directive.                                                                                                                                                                                                       |
| [close](/docs/syntax/close)         | Close directive.                                                                                                                                                                                                      |
| [commodity](/docs/syntax/commodity) | Commodity directive.                                                                                                                                                                                                  |
| [option](/docs/syntax/option)       | Option directive.                                                                                                                                                                                                     |
| [note](/docs/syntax/note)           | Note directive.                                                                                                                                                                                                       |
| [balance](/docs/syntax/balance)     | Balance directive.                                                                                                                                                                                                    |
| [pad](/docs/syntax/pad)             | Pad directive.                                                                                                                                                                                                        |
| [price](/docs/syntax/price)         | Price directive.                                                                                                                                                                                                      |
| [$](/docs/syntax/snap)             | Get the latest exchange rate between currencies or price of cryptocurrencies or stocks. It will not be saved to your ledger file, just return the result.                                                             |
| [event](/docs/syntax/event)         | Event directive.                                                                                                                                                                                                      |
| Fallback rules       | If no command found and<br/>If the first word is one of formula keywords, the command will be `f`(formula);<br/>If message contains numbers, then the command will be `*`(transaction);<br/>Otherwise, the command will fall back to `//`(comment)。 |


### General Rules:

- The date is optional. If no YYYY-MM-DD format date found, the date will be 'today' in your timezone. Use '2019-07-01' in the following examples. Start from v0.2, we support more date formats:

  - Month name: Jul 25 / July 10 / Aug 2. The month name can be full name or three-letter abbreviations, the first letter should be uppercase.
  - Relative dates:
    - Yesterday: `yesterday` / `ytd`
    - The day before yesterday: `dby`
    - Tomorrow: `tomorrow` / `tmr`, useful for Balance command.
    - The day after tomorrow: `dat`

- Commodity/Currency code is optional, too, the default value is what you set before. Use 'USD' in following examples.

- Metadata is not supported in this version.

- Inline comment is not supported in this version.

- Commodity/Currency should be a word all in capital letters.

- The abbreviation of an account name should be a word all in lowercase letters or numbers.

- If the transaction is `2019-07-01 * "McDonald's" "🍔"`, and the insertTime is `metadata`, the time info will be applied like:
  ```
  2019-07-01 *  "McDonald's" "🍔"
    time: "11:22:33"
    ...
  ```
