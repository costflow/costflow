---
id: introduction
title: Costflow CLI
sidebar_label: Introduction
slug: /cli/
---


## Install

```sh
npm install -g costflow-cli
```

## Usage

```sh
costflow
```
All the input should follow [Costflow Syntax](/docs/syntax/).


## Config

Your config file will be generated when you run `costflow` first time, the name is .costflow.json and located in your home directory. Your should update it before you start.

The config fields are same as Costflow Syntax, except a new field name `filePath`. The `filePath` is the ledger file path you want Costflow CLI to save the output.

The `filePath` can contain a dynamic date format, the dynamic part should between two %. Here are some variable you can use.

| Variable | Description                    | Output           |
| -------- | ------------------------------ | ---------------- |
| YY       | Two-digit year                 | 19               |
| YYYY     | Four-digit year                | 2019             |
| M        | The month, beginning at 1      | 1-12             |
| MM       | The month, 2-digits            | 01-12            |
| MMM      | The abbreviated month name     | Jan-Dec          |
| MMMM     | The full month name            | January-December |
| D        | The day of the month           | 1-31             |
| DD       | The day of the month, 2-digits | 01-31            |

For example, if the filePath is `/Users/leplay/beancount/%YYYY/MM%.bean` and the posting date is 2019-09-18, the output will be saved to `/Users/leplay/beancount/2019/09.bean`.

## Open Source

[https://github.com/costflow/cli](https://github.com/costflow/cli)
