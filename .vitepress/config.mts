import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'PX4 Behavior',
  description: 'User Guide and Documentation for the PX4 Behavior package',
  base: '/px4-behavior-docs/',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/px4-behavior-docs/favicon.ico' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    externalLinkIcon: true,
    logo: '/logo.png',
    nav: [
      { text: 'User Guide', link: '/introduction/' },
      { text: 'API Reference', link: 'https://robin-mueller.github.io/px4-behavior' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is PX4 Behavior?', link: '/introduction/' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/robin-mueller/px4-behavior' }
    ],
    editLink: {
      pattern: 'https://github.com/robin-mueller/px4-behavior-docs/blob/master/:path'
    },
    lastUpdated: {
      text: 'Last update',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2024-present Robin Müller'
    }
  }
})
