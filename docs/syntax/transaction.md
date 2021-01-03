---
id: transaction
title: Transaction
sidebar_label: Transaction
---


Transactions are the most common type of directives that occur in a ledger. Costflow Syntax support two methods for transactions.

### First: `>`

The first one uses greater-than sign, it means the flow direction from its left to its right. The general format is:

```javascript
[YYYY-MM-DD] [Flag] ["Payee"] ["Narration"] [#tag] [^link] AMOUNT [COMMODITY] FROM_ACCOUNT > [AMOUNT] [COMMODITY] TO_ACCOUNT
```

The elements in square brackets are optional. Here are some examples.

```javascript
// #1 Traditional format with >
2017-01-05 "RiverBank Properties" "Paying the rent" 2400 Assets:US:BofA:Checking > 2400  Expenses:Home:Rent
// #1 Output
2017-01-05 * "RiverBank Properties" "Paying the rent"
  Assets:US:BofA:Checking                        -2400.00 USD
  Expenses:Home:Rent                             +2400.00 USD


// #2 No date, no commodity symbol, use @Payee
@Verizon 59.61 Assets:US:BofA:Checking > Expenses:Home:Phone
// #2 Output
2019-07-01 * "Verizon" ""
  Assets:US:BofA:Checking                          -59.61 USD
  Expenses:Home:Phone                              +59.61 USD


// #3 Use account replacements
@Verizon 59.61 bofa > phone
// #3 Output is exactly same with #2


// #4 Multiple accounts flow to one
Rent 750 cmb + 750 boc > rent
// #4 Output
2019-07-01 * "Rent"
  Liabilities:CreditCard:CMB                     -750.00 USD
  Assets:CN:BOC                                  -750.00 USD
  Expenses:Home:Rent                            +1500.00 USD


// #5 One account flows to multiple accounts. The scene in this example is you have dinner with your friends, you pay the bill for your friends(x and y), then your friends will pay you back.
Dinner 180 CNY bofa > rx + ry + food
// #5 Output
2019-07-01 * "Dinner"
  Assets:Receivables:X                            +60.00 CNY
  Assets:Receivables:Y                            +60.00 CNY
  Expenses:Food                                   +60.00 CNY
  Liabilities:CreditCard:CMB                     -180.00 CNY

```
Rules details:

- The date is optional. If no YYYY-MM-DD format date found, the date will be 'today' in your timezone;

- The flag is used to indicate the status of a transaction, * means completed transaction, ! means incomplete transaction. * can be omitted;

- Payees and narration are easy to use, but the syntax is a little bit complex:
  - Compatible with Beancount double quotes format: if there is only one double-quotes string, it is a narration; If there are two double-quotes strings, the first one is a payee and the second one is narration.
  - Double-quotes can be omitted in these cases:
    - Input narration directly without double-quotes, but the narration **cannot** contain numbers. E.g., 'Xbox 360 Game' is not a valid narration.
    - Payee can be used in @Payee format. In this rule, payee **cannot** contain blank spaces, but payee can be connected with - or _. E.g., @KFC and @Burger_King are all valid payees.
    - If you only want to record payee, just input @Payee, no need to concern narration.

- Tag: strings start with `#` are treated as tags;
- Link: strings start with ^ are treated as links;
- In the first transaction syntax:
  1. AMOUNT. Because > means the flow direction, so the default amounts in left side are negative, the minus sign can be omitted;
  2. COMMODITY. Optional, the default value is what you set before;
  3. ACCOUNT. Accounts can be the full name in your ledger file, or they can be the abbreviations you set before.
- The right side rules are the same with the left side, except the default amounts are positive;

- [Costs and prices](https://beancount.github.io/docs/beancount_language_syntax.html#costs-and-prices) are not support in this version.
- If there are multiple accounts in either side, use `+` to connect, Be aware, only one `>` allowed in a message;
- The amounts in the right side can be omitted, they are equal to **sum*(left side amounts)/(right side accounts number)**. Useful when splitting expenses with friends.




### Second: `|`

The second method uses the pipe sign (U+007C) instead of `>`, it means "start a new line", the timing is the same with Beancount. The syntax detail:

```javascript
[YYYY-MM-DD] [Flag] ["Payee"] ["Narration"] [#tag] [^link] ACCOUNT_A [COMMODITY] AMOUNT | ACCOUNT_B [COMMODITY] AMOUNT
```

As we can see, the usage of Date, Flag, Payee, Narration, Tag, Link are all same with the first one. The differences:

- Should insert a `|` between each account;
- The second transaction syntax has no flow direction, so the minus sign and amounts cannot be omitted;

We can rewrite the examples with |:

```javascript
// #1 Traditional format with |
2017-01-05 "RiverBank Properties" "Paying the rent" | Assets:US:BofA:Checking -2400 | Expenses:Home:Rent 2400
// #1 Output
2017-01-05 * "RiverBank Properties" "Paying the rent"
  Assets:US:BofA:Checking                        -2400.00 USD
  Expenses:Home:Rent                             +2400.00 USD


// #2 No date, no commodity symbol, use @Payee
@Verizon | Assets:US:BofA:Checking -59.61 | Expenses:Home:Phone 59.61
// #2 Output
2019-07-01 * "Verizon" ""
  Assets:US:BofA:Checking                          -59.61 USD
  Expenses:Home:Phone                              +59.61 USD


// #3 Use account replacements
@Verizon | bofa -59.61 | phone 59.61
// #3 Output is exactly same with #2


// #4 Multiple accounts flow to one
Rent | cmb -750 | boc -750 | rent 1500
// #4 Output
2019-07-01 * "Rent"
  Liabilities:CreditCard:CMB                     -750.00 USD
  Assets:CN:BOC                                  -750.00 USD
  Expenses:Home:Rent                            +1500.00 USD


// #5 One account flows to multiple accounts. The sen in this example is you have dinner with your friends, you pay the bill for your friends(x and y), then your friends will pay you back.
Dinner | bofa 180 CNY | rx -60 | ry -60 | food -60
// #5 Output
2019-07-01 * "Dinner"
  Assets:Receivables:X                            +60.00 CNY
  Assets:Receivables:Y                            +60.00 CNY
  Expenses:Food                                   +60.00 CNY
  Liabilities:CreditCard:CMB                     -180.00 CNY


```
