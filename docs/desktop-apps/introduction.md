---
id: introduction
title: Costflow Desktop Apps
sidebar_label: Introduction
slug: /desktop-apps/
---

<img src="/img/desktop-apps.png" alt="Costflow Desktop Apps" />

## Download

https://download.costflow.io/

## Features

- Open source;
- Quickly add entries using Costflow syntax;
- All file manipulation is done locally;
- Start your own Telegram bot right in the app, so you can keep plain-text bookkeeping anytime, anywhere;

## Configuration

Check [Configuration](/docs/desktop-apps/config/) for more details.

## Troubleshooting

- Costflow can’t be opened because the developer cannot be verified.
<p><img src="/img/costflow-cannot-be-opened.png" alt="Costflow cannot be opened" width="300"/></p>
Open `Terminal.app` and enter the following command (you may need to enter a password halfway through), then restart `Costflow`:

```sh
sudo xattr -d com.apple.quarantine /Applications/Costflow.app
```
