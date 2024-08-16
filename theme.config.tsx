import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  // Tambahkan ini
  navs: [
    {
      name: "GitHub",
      url: "https://github.com/shuding/nextra-docs-template",
      icon: <img src="/path-to-github-icon.svg" alt="GitHub" />
    },
    {
      name: "Discord",
      url: "https://discord.com",
      icon: <img src="/path-to-discord-icon.svg" alt="Discord" />
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourtwitterhandle",
      icon: <img src="/path-to-twitter-icon.svg" alt="Twitter" />
    }
  ],
}

export default config
