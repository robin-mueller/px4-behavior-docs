# AutoAPMS User Guide and Documentation

[![Build Docs](https://github.com/robin-mueller/auto-apms-guide/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/robin-mueller/auto-apms-guide/deployments)


The docs are powered by [VitePress](https://vitepress.dev/). The website is deployed by a GitHub action on every push to the `master` branch.

## Setup
Install [Node.js](https://nodejs.org/en). We recommend the latest LTS version (as for now it's 20). Here is how to do it on Ubuntu:

```bash
# Setup the local Ubuntu repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js
sudo apt-get install nodejs -y

# Install VitePress module (Run in auto-apms-guide directory)
npm add -D vitepress
```

For further information, visit the [quickstart guide](https://vitepress.dev/guide/getting-started) for setting up VitePress. 

## Build
The project is scaffolded from the root of this repository and supports the following commands:
- Run `npm run dev` for [starting the dev server](https://vitepress.dev/reference/cli#vitepress-dev)
- Run `npm run build` for [generating the static HTML site](https://vitepress.dev/reference/cli#vitepress-build)
- Run `npm run preview` to [preview the production build](https://vitepress.dev/reference/cli#vitepress-preview)
